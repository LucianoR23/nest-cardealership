import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString()
    readonly marca: string;

    @IsString()
    @MinLength(3)
    readonly modelo: string;

}