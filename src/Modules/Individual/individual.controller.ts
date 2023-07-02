import { Body, Controller, Get, Post } from '@nestjs/common';
import { IndividualServie } from './individual.service';
import { IndividualDto } from './dtos/individual.dto';
import { Individual_Type } from 'src/Models/individual.entity';

@Controller('/individual')
export class IndividualController {
  constructor(private individualSer: IndividualServie) {}

  @Post('new')
  newProduct(@Body() body: IndividualDto) {
    return this.individualSer.addIndividual(body);
  }

  @Post('edit')
  editIndividual(@Body() body: Partial<IndividualDto>) {
    return this.individualSer.editIndividual(body);
  }

  @Get('/all')
  getAll() {
    return this.individualSer.getAllIndividual();
  }

  @Get('/drivers')
  getDrivers() {
    return this.individualSer.getIndividual(Individual_Type.DRIVER);
  }

  @Get('/customers')
  getCustomrs() {
    return this.individualSer.getIndividual(Individual_Type.CUSTOMER);
  }
}
