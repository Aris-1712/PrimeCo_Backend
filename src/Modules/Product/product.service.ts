import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/Models/product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dtos/product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepo: Repository<Product>){}

    async addProduct(data:ProductDto){
        const product = await this.productRepo.create(data)
        return await this.productRepo.save(product)
    }

    async getProducts(){
        return await this.productRepo.find()
    }
}
  