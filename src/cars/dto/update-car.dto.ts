import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string

    @IsString()
    @IsOptional()
    readonly marca?: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly modelo?: string;

}