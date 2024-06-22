import { Module } from '@nestjs/common';
import * as controllers from "./controllers";
import * as services from './services';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import {
  User,
  UserSchema,
} from "./schemas";
import configuration from "src/configs/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get<string>("database.mongo_url"),
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
    ConfigModule
  ],
  controllers: [].concat(Object.values(controllers)),
  providers: [].concat(Object.values(services)),
})
export class AppModule { }