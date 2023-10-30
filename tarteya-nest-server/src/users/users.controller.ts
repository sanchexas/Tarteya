import { Body, Controller, Post, Res, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './_dto/CreateUser.dto';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
@UsePipes(ValidationPipe)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('create')
    createUser(@Body() body: CreateUserDto, @Res() res: Response){
        console.log(body)
        res.send({statusCode: 200})
        // this.usersService.create(body); 
    }
} 
