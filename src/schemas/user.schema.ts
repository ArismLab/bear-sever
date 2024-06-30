import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

export class InfoNFT {
    nftId: string;
    addressContract: string;
}

export class Items{
    clothes: InfoNFT;
    weapon: InfoNFT;
    hat: InfoNFT;
    backpack: InfoNFT;
    pet: InfoNFT;
}

@Schema()
export class User {
    @Prop({ required: true, unique: true, index: true, sparse: true })
    id: string;

    @Prop({ required: true, unique: true })
    address: string;

    @Prop({ required: true })
    isDeployed: boolean;

    @Prop({ required: true })
    refId: string;

    @Prop({ required: true })
    refAmount: number;
    
    @Prop({ required: true })
    items: Items;

    @Prop({ required: true })
    gasFree: number;

}

export const UserSchema = SchemaFactory.createForClass(User);