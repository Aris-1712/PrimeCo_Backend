import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inbound } from 'src/Models/inbound.entity';
import { Repository } from 'typeorm';
import { InboundBodyDto, InboundDto } from './dtos/inbound.dto';
import { Product } from 'src/Models/product.entity';
import { Individual } from 'src/Models/individual.entity';
import { ObjectId } from 'mongodb';
import { Trip } from 'src/Models/trip.entity';

@Injectable()
export class InboundService {
  constructor(
    @InjectRepository(Inbound) private inboundRepo: Repository<Inbound>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(Individual)
    private individualRepo: Repository<Individual>,
    @InjectRepository(Trip) private tripRepo: Repository<Trip>,
  ) {}

  async getTripId() {
    let res = await this.tripRepo?.find();
    const trip = await this.tripRepo.create({
      tripid: `TRID${Number(res.length) + 1}`,
    });
    return await this.tripRepo.save(trip);
  }

  async addDn(body: InboundBodyDto) {
    let tripObj = await this.tripRepo?.findOneBy({
      tripid: body?.tripId,
    });
    if (!tripObj) {
      throw new NotFoundException('Invalid tripid');
    }
    await this.inboundRepo?.update({ tripId: body?.tripId }, { deleted: true });
    let driverObj = await this.individualRepo?.findOneBy({
      _id: new ObjectId(body?.driverId),
    });
    if (!driverObj) {
      throw new NotFoundException('Invalid driver');
    }
    for (let dn of body?.dns) {
      let productObj = await this.productRepo?.findOneBy({
        _id: dn?.productId,
      });
      if (productObj) {
        throw new NotFoundException('Invalid product');
      }
      let product = await this.inboundRepo?.create({
        tripId: body.tripId,
        driverId: body.driverId,
        deleted: false,
        ...dn,
      });
      await this.inboundRepo?.save(product);
    }
    return { success: 'OK' };
  }

  async getAllTripDetails() {
    let trips = await this.inboundRepo?.find({
      where: {
        deleted: false,
      },
    });
    let sortedTrips = trips.sort((a: any, b: any) => {
      let aDate = new Date(a.deliveryDate).getTime();
      let bDate = new Date(b.deliveryDate).getTime();
      return bDate - aDate;
    });
    return sortedTrips;
  }

  async getByTripId(id: any) {
    let trips = await this.inboundRepo?.find({
      where: {
        deleted: false,
        tripId: id,
      },
    });
    return trips;
  }
}
