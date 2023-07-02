import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/Models/product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dtos/product.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepo: Repository<Product>){}

    async addProduct(data:ProductDto){
        const product = await this.productRepo.create(data)
        return await this.productRepo.save(product)
    }

    async editProduct(data:Partial<ProductDto>){
        const product = await this.productRepo.findOne({where:{
            _id: new ObjectId(data?._id)
        }});
        product.name = data?.name;
        product.type = data?.type
        return await this.productRepo.save(product)
    }

    async deleteProduct(data:Partial<ProductDto>){
        const product = await this.productRepo.findOne({where:{
            _id: new ObjectId(data?._id)
        }});
        return await this.productRepo.remove(product)
    }

    async getProducts(){
        return await this.productRepo.find()
    }
}
  