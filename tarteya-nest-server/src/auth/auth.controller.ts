import { Body, Controller, Post, Request,HttpCode, HttpStatus, UsePipes, ValidationPipe, Get, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInPhoneDto } from './_dto/SignPhone.dto';
import { AuthGuard } from '../_guards/auth.guard';
import { authenticator, totp, hotp } from 'otplib';
import { SmsAero, SmsAeroError, SmsAeroHTTPError  } from 'smsaero';
import { Response, response } from 'express';

@Controller('auth')
@UsePipes(ValidationPipe)
export class AuthController {
  private secret = 'AIIQ6BJHMU5TY7RI';
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInPhoneDto) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('loginbyphone')
  loginByPhone(@Body() body: SignInPhoneDto, @Res() res: Response){
    res.send(this.authService.loginByPhone(body));
  } 
  @HttpCode(HttpStatus.OK) 
  @Post('verifytoken')        // Если возвращает true то надо кинуть аксес токен
  verifyToken(@Body() body: {user_token: string}, @Res() res: Response){
    res.send(this.authService.verufyTokenTotp(body));
  } 

  // тестовый контроллер
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}