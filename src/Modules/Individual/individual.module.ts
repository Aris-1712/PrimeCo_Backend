import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Individual } from "src/Models/individual.entity";
import { IndividualServie } from "./individual.service";
import { IndividualController } from "./individual.controller";


@Module({
    providers:[IndividualServie],
    controllers:[IndividualController],
    imports:[TypeOrmModule.forFeature([Individual])]
})
export class IndividualModule {}