import { Body, Controller, Post,HttpCode, HttpStatus, UsePipes, ValidationPipe, Get, UseGuards, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInPhoneDto } from './_dto/SignPhone.dto';
import { AuthGuard } from '../_guards/auth.guard';
import { Request, Response } from 'express';

@Controller('auth')
@UsePipes(ValidationPipe)
export class AuthController {

  constructor(private authService: AuthService) {}
  // Авторизация по номеру телефона
  @HttpCode(HttpStatus.OK)
  @Post('loginbyphone')
  loginByPhone(@Body() body: SignInPhoneDto, @Res() res: Response){
    this.authService.loginByPhone(body).then(response=>{
      const phone = response.data?.tp;   // сделать проверку телефона на undefined !!!
      if(response.statusCode !== HttpStatus.BAD_REQUEST){
        return res.cookie('_tp', phone).json(response);
      }else{
        return res.json(response);
      }
    });
  }
  // Верификация токена
  @HttpCode(HttpStatus.OK) 
  @Post('verifytoken')        // Если возвращает true то надо кинуть аксес токен
  verifyToken(@Body() body: {user_token: string}, @Res() res: Response, @Req() req: Request){
    const tp: string = req.cookies['_tp'];
    console.log('cookie телефон - ' + tp);
    this.authService.verifyTokenTotp(body, tp).then((response)=>{
      return res.json(response);
    });
  } 
  // тестовый контроллер
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

}