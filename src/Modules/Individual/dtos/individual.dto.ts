import { IsNotEmpty, IsOptional } from "class-validator";
import { Individual_Type } from "src/Models/individual.entity";


export class IndividualDto {
    @IsOptional()
    _id: any
    
    @IsNotEmpty()
    name:string
    
    @IsNotEmpty()
    type: Individual_Type    

}