import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/product.dto';

@Controller('/product')
export class ProductController {
  constructor(private productSer: ProductService) {}

  @Post('new')
  newProduct(@Body() body:ProductDto) {
    return this.productSer.addProduct(body)
  }

  @Get('')
  getProducts(){
    return this.productSer.getProducts()
  }
}
