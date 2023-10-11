import { Body, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInPhoneDto } from './_dto/SignPhone.dto';
import { totp } from 'otplib';
import { SmsAero, SmsAeroError, SmsAeroHTTPError  } from 'smsaero';
import { GlobalResponseDto } from 'src/_dto/GlobalResponse.dto';

@Injectable()
export class AuthService {
    private secret = 'AIIQ6BJHMU5TY7RI';
    constructor(
        private userService: UsersService, 
        private jwtService: JwtService
    ){}

    async signIn(data: SignInPhoneDto){
        const user = await this.userService.findByPhone(data.phone)
        if(user && user.phone === data.phone){
            const payload = { id: user.id_user, phone: user.phone };
            return {
                access_token: await this.jwtService.signAsync(payload),
                refresh_token: await this.jwtService.signAsync(payload, {expiresIn: "1d"})
            };
        }else{
            throw new UnauthorizedException({
                message: ["Неверные данные"], 
                statusCode: HttpStatus.BAD_REQUEST
            }
)       }
    }
    /**
     *  1) проверка на существование телефона в базе userService
     *  2) генерация токена
     *  3) отправка смс
     */
    async loginByPhone(data: SignInPhoneDto): Promise<GlobalResponseDto>{
        const tp = this.trimPhone(data.phone);
        console.log(tp)
        const userExist = await this.userService.findByPhone(tp);
        if(userExist){
            // const token = this.generateTokenTotp();
            // this.sendSmsWithToken(token, tp);
            return {
                statusCode: HttpStatus.ACCEPTED
            }
        }
        return {
            message: ["Пользователя с таким номером телефона не существует"],
            statusCode: HttpStatus.BAD_REQUEST
        }
        
            
    }
    async loginByEmail(){

    } 
    private generateTokenTotp(): string{
        totp.options = { // настройка двойной аут.
            digits: 4,  // количество цифр в токене
            step: 120, // время в секундах, через которое сгенерится новый токен
            window: 3, // одно window = step. Токен обновится но предыдущий будет актуален столько, сколько указано окон
        }; // В целом токен живет 6 минут, но новый генерится каждые 120 секунд
        return totp.generate(this.secret);
    }
    verufyTokenTotp(@Body() body: {user_token: string}): GlobalResponseDto{
        const verify = totp.verify({token: body.user_token, secret: this.secret});
        if(verify){
            return {
                statusCode: HttpStatus.ACCEPTED
            }
        }else{
            return {
                message: ["Неверный код, попробуйте ввести снова"],
                statusCode: HttpStatus.BAD_REQUEST
            };
        }
    }
    private sendSmsWithToken(token: string, phone: string){
        const client = new SmsAero('sanchesperess@mail.ru', `${process.env.SMS_AERO_KEY}`);
        client.send(`${phone}`, `ТАРТЕЯ- ${token} -код подтверждения`).then(()=>{
            console.log('СМС отправлено');
        });
    }
    // Превращает '+7 000 000-00-00' в '+70000000000'
    private trimPhone(phone: string): string{
        return phone.replace(/[-\s]/gi, '');
    }
}
