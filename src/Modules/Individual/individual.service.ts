import { InjectRepository } from '@nestjs/typeorm';
import { Individual, Individual_Type } from 'src/Models/individual.entity';
import { Repository } from 'typeorm';
import { IndividualDto } from './dtos/individual.dto';
import { ObjectId } from 'mongodb';

export class IndividualServie {
  constructor(
    @InjectRepository(Individual)
    private individualRepo: Repository<Individual>,
  ) {}
  async addIndividual(data: IndividualDto) {
    const driver = await this.individualRepo.create(data);
    return await this.individualRepo.save(driver);
  }

  async editIndividual(data: Partial<IndividualDto>) {
    const individual = await this.individualRepo.findOne({
      where: {
        _id: new ObjectId(data?._id),
      },
    });
    individual.name = data?.name;
    individual.type = data?.type;
    return await this.individualRepo.save(individual);
  }

  async getIndividual(type: Individual_Type) {
    return await this.individualRepo.find({
      where: { type },
    });
  }

  async getAllIndividual() {
    return await this.individualRepo.find();
  }
}
