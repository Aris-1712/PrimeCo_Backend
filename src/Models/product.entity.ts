
import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Product {
@Column()
name:string;

@Column()
type:string;

@ObjectIdColumn() 
_id: ObjectId


}