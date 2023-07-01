import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  isNotEmpty,
} from 'class-validator';
import { ObjectId } from 'mongodb';

export class InboundBodyDto {
  @IsNotEmpty()
  tripId: string;

  @IsMongoId()
  driverId: ObjectId;

  @IsNotEmpty()
  dns: InboundDto[];
}

export class InboundDto {
  @IsNotEmpty()
  dnNo: string;

  @IsNotEmpty()
  @IsDate()
  deliveryDate: Date;

  @IsNotEmpty()
  customerId: ObjectId;

  @IsNotEmpty()
  productId: ObjectId;

  @IsNotEmpty()
  @IsNumber()
  qty: number;

  @IsNotEmpty()
  location: string;

  @IsOptional()
  remarks: string;
}
