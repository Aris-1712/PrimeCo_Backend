import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/product.dto';
import { AuthGuard } from 'src/AuthGuard';

@Controller('/product')
@UseGuards(AuthGuard)
export class ProductController {
  constructor(private productSer: ProductService) {}

  @Post('new')
  newProduct(@Body() body: ProductDto) {
    return this.productSer.addProduct(body);
  }

  @Post('edit')
  editProduct(@Body() body: Partial<ProductDto>) {
    return this.productSer.editProduct(body);
  }

  @Post('delete')
  deleteProduct(@Body() body: Partial<ProductDto>) {
    return this.productSer.deleteProduct(body);
  }

  @Get('')
  getProducts() {
    return this.productSer.getProducts();
  }
}
