import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  NotFoundException,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { MetadataService } from '../services';
import { MetadataOut, MetadataIn } from 'src/dtos/metadata.dto';

@Controller('api/v1/metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Get()
  async findAll() {
    return this.metadataService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const metadata = this.metadataService.findOne(id);
    if (!metadata) {
      throw new NotFoundException(`Metadata #${id} not found`);
      return metadata;
    }
  }

  @Post()
  async create(@Body() metadata: MetadataIn) {
    return this.metadataService.create(
      metadata.id,
      metadata.description,
      metadata.external_url,
      metadata.image,
      metadata.name,
      metadata.attributes,
    );
  }
}
