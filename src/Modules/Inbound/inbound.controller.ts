import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { InboundService } from "./inbound.service";
import { InboundBodyDto } from "./dtos/inbound.dto";

@Controller('/inbound')
export class InboundController {
   constructor(private inboundSer:InboundService){}
    
   @Get('/tripId')
   getTid(){
    return this.inboundSer.getTripId()
   }

   @Post('/addDn')
   addDn(@Body() body:InboundBodyDto){
      return this.inboundSer?.addDn(body)
   }

   @Get('/trips')
   getTrips(){
      return this.inboundSer.getAllTripDetails()
   }

   @Get('/trips/:id')
   getTripsById(@Param('id') id:any){
      return this.inboundSer.getByTripId(id)
   }
}