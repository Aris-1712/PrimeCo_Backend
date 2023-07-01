import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { Product } from "src/Models/product.entity";


@Module({
imports:[TypeOrmModule.forFeature([Product])],
providers:[ProductService],
controllers:[ProductController]
})
export class ProductModule{}