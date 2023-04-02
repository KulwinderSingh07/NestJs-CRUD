import { IsNotEmpty, IsString } from "class-validator";

export class EditUserdto{
    @IsString()
    @IsNotEmpty()
    Name:string
}
