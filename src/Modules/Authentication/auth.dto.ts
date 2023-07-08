import { IsEmail, IsNotEmpty } from 'class-validator'


export class authDto {

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string
}