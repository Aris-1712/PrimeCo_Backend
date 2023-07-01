import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Individual } from './Models/individual.entity';
import { Inbound } from './Models/inbound.entity';
import { Product } from './Models/product.entity';
import { InboundModule } from './Modules/Inbound/inbound.module';
import { ProductModule } from './Modules/Product/product.module';
import { IndividualModule } from './Modules/Individual/individual.module';
import { Trip } from './Models/trip.entity';

@Module({
  imports: [
    InboundModule,
    ProductModule,
    IndividualModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://aris:Arisgani1712@cluster0.hykda.mongodb.net/Prime?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [Individual, Inbound, Product, Trip],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
