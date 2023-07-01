import { Module } from "@nestjs/common";
import { InboundController } from "./inbound.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Inbound } from "src/Models/inbound.entity";
import { InboundService } from "./inbound.service";
import { Product } from "src/Models/product.entity";
import { Individual } from "src/Models/individual.entity";
import { Trip } from "src/Models/trip.entity";


@Module({
imports:[TypeOrmModule.forFeature([Inbound,Product,Individual,Trip])],
providers:[InboundService],
controllers:[InboundController]
})
export class InboundModule{}