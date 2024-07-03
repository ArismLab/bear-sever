import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MetadataDocument = HydratedDocument<Metadata>;

@Schema()
export class Metadata {
  @Prop({ required: true, unique: true, index: true, sparse: true })
  id: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  external_url: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  attributes: [];
}

export const MetadataSchema = SchemaFactory.createForClass(Metadata);
