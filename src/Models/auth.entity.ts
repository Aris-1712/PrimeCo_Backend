import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Auth {
    @ObjectIdColumn()
    _id: ObjectId

    @Column()
    email: string

    @Column()
    password: string
}