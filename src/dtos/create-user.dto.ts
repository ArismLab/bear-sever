import { Type } from "class-transformer";
import { IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    address: string;
    
    @IsString()
    @IsNotEmpty()
    refId: string;
}