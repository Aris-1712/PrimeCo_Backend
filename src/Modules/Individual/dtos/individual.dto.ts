import { IsNotEmpty } from "class-validator";
import { Individual_Type } from "src/Models/individual.entity";


export class IndividualDto {
    @IsNotEmpty()
    name:string
    
    @IsNotEmpty()
    type: Individual_Type    

}