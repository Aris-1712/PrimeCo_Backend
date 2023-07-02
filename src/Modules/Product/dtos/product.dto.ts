import { IsNotEmpty, IsOptional } from "class-validator";

export class ProductDto {
@IsOptional()
_id: any

@IsNotEmpty()    
name: string

@IsNotEmpty()
type:string
}