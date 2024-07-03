import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Metadata, MetadataDocument } from '../schemas';
import { MetadataOut } from 'src/dtos/metadata.dto';

@Injectable()
export class MetadataService {
  @InjectModel(Metadata.name)
  private metadataModel: Model<MetadataDocument>;

  async create(
    id: string,
    description: string,
    external_url: string,
    image: string,
    name: string,
    attributes: [],
  ): Promise<MetadataOut> {
    const metadata = new this.metadataModel({
      id,
      description,
      external_url,
      image,
      name,
      attributes,
    });
    return metadata.save();
  }

  async findAll(): Promise<MetadataOut[]> {
    //  dont have id in metadata schema
    return this.metadataModel.find().exec();
  }

  async findOne(id: string): Promise<MetadataOut> {
    return this.metadataModel.findOne({ id }).exec();
  }
}
