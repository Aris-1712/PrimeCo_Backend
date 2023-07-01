
import { Column, Entity, ObjectIdColumn, ObjectId } from "typeorm";
export enum Individual_Type {
    DRIVER = "DRIVER",
    CUSTOMER = "CUSTOMER"
}
@Entity()
export class Individual {
@Column()
name:string;

@Column()
type:Individual_Type

@ObjectIdColumn() 
_id: ObjectId
}