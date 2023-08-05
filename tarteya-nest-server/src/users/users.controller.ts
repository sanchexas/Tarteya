import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
@UsePipes(ValidationPipe)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    async createUser(@Body() body: CreateUserDto){
        await this.usersService.create(body);
    }
}
