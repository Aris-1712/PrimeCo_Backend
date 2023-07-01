import { IsNotEmpty } from "class-validator";

export class ProductDto {
@IsNotEmpty()    
name: string

@IsNotEmpty()
type:string
}