import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Trip {
    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    tripid: string
}