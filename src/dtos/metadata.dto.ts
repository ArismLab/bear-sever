import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class MetadataOut {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  external_url: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  attributes: [];
}

export class MetadataIn {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  external_url: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  attributes: [];
}
