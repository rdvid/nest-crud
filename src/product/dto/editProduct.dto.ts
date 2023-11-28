import { IsEmail, IsString, MinLength, IsNotEmpty, IsOptional, IsNumber, Min, MaxLength, IsArray, ArrayMinSize, ArrayNotEmpty, IsDate, IsUUID } from "class-validator";

export class EditProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(1)
    value: number;

    @Min(0)
    availableQuantity: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    description: string;

    @IsArray()
    @ArrayMinSize(3)
    characteristics: ProductCharacteristicDto[];

    @IsArray()
    @ArrayNotEmpty()
    images: ProductImageDto[];

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsDate()
    @IsOptional()
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;

}


class ProductCharacteristicDto {
    @IsString()
    name: string;
    
    @IsString()
    @MaxLength(255)
    description: string;
}

class ProductImageDto {
    @IsString()
    url: string;
    
    @IsString()
    @MaxLength(255)
    description: string;
}

