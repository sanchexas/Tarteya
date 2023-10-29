import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './_dto/CreateUser.dto';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
@UsePipes(ValidationPipe)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('create')
    createUser(@Body() body: CreateUserDto){
        this.usersService.create(body);
    }
} 
