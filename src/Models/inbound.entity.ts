import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import {ObjectId as ObjectIdType} from 'mongodb'
@Entity()
export class Inbound {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  tripId: string;

  @Column()
  dnNo: string;

  @Column()
  driverId: ObjectIdType;

  @Column()
  deliveryDate: Date;

  @Column()
  customerId: ObjectIdType;

  @Column()
  productId: ObjectIdType;

  @Column()
  qty: number;

  @Column()
  location: string;

  @Column()
  remarks: string;

  @Column()
  deleted: boolean
}
