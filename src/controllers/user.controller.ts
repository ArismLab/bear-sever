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
} from "@nestjs/common";
import { UserService } from "../services";
import {CreateUserDto} from "../dtos/create-user.dto";

@Controller("api/v1/users")
export class UserController {
    constructor(private readonly userService: UserService
    ) { }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const user = this.userService.findOne(id);
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }

    @Post()
    async create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }
}