import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';
import { Response } from 'express';
import { SmsAero, SmsAeroError, SmsAeroHTTPError  } from 'smsaero';

@Controller('users')
@UsePipes(ValidationPipe)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('create')
    createUser(@Body() body: CreateUserDto){
        this.usersService.create(body)
    }
    @Post('sms')
    sendSms(@Body() body: {phone: string}){ // SMS-шлюз
        const client = new SmsAero('sanchesperess@mail.ru', `${process.env.SMS_AERO_KEY}`);
        client.send(`${body.phone}`, 'Тартея - код подтверждения: 3298').then((response: any)=>{
            console.log(response)
        })  
    }
} 
