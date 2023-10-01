import { Body, Controller, Post, Request,HttpCode, HttpStatus, UsePipes, ValidationPipe, Get, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './_dto/SignIn.dto';
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
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('generatetoken')
  loginByPhone(@Body() body: {phone: string}, @Res() res: Response){

    // ВНИМАНИЕ!!! ВСЮ ЛОГИКУ ПЕРЕМЕСТИТЬ В СЕРВИСЫ!!! 
    // ЗДЕСЬ ТОЛЬКО ПРИНЯТИЕ ЗАПРОСА И ПЕРЕДАЧА ДАННЫХ В СЕРВИСЫ!!!

    totp.options = { // настройка двойной аут.
      digits: 4,  // количество цифр в токене
      step: 120, // время в секундах, через которое токен будет не актуален
      window: 3, // одно window = step. Токен обновится но предыдущий будет актуален столько, сколько указано окон
    };
    const token = totp.generate(this.secret) // генерит токен на основе секрета фармата base32
    
    // ОТПРАВКА НА МОБИЛКУ
    const client = new SmsAero('sanchesperess@mail.ru', `${process.env.SMS_AERO_KEY}`);
    client.send(`${body.phone}`, `ТАРТЕЯ- ${token} -код подтверждения`).then((response)=>{
      res.send('ОТПРАВЛЕНО')
    })
  } 
  @HttpCode(HttpStatus.OK) 
  @Post('verifytoken')        // Если возвращает true то надо кинуть аксес токен
  verifyToken(@Body() body: {user_token: string}, @Res() res: Response){
    const verify = totp.verify({token: body.user_token, secret: this.secret})
    res.send(verify)
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}