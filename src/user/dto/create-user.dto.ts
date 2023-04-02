import { IsEmail, IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";

export class CreateUserdto{
    @IsString()
    Name:string

    @IsEmail()
    @IsNotEmpty()
    Email:string

    @IsNotEmpty()
    @IsString()
    Password:string
}