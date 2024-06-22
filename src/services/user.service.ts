import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas";

import { CreateUserDto } from "../dtos/create-user.dto";
@Injectable()
export class UserService {
    @InjectModel(User.name)
    private userModel: Model<UserDocument>;

    async create(user: CreateUserDto): Promise<User> {
        const id = Math.random().toString(36).substring(7);
        const userRef = await this.userModel.findOne({ id: user.refId }).exec();
        if (!userRef) {
            throw new Error("Referral user not found");
        }
        userRef.refAmount += 1;
        const createdUser = new this.userModel({
            id,
            address: user.address,
            refId: user.refId,
            refAmount: 0,
            items:[],
            gasFee: 0,
        });
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ id }).exec();
    }
}