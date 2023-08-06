import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';
import { AuthUserDto } from './dto/AuthUserDto.dto';
import { Response } from 'express';

@Controller('users')
@UsePipes(ValidationPipe)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('create')
    createUser(@Body() body: CreateUserDto){
        this.usersService.create(body)
    }
    @Post('signin')
    findOne(@Body() body: AuthUserDto, @Res() res: Response){
        this.usersService.findOne(body.phone).then((result)=>{
            res.send(result[0])
        });
    }
}
