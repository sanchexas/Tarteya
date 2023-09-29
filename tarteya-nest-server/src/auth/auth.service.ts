import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/SignInDto.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService, 
        private jwtService: JwtService
    ){}

    async signIn(data: SignInDto){
        const user = await this.userService.findByPhone(data.phone)
        if(user && user.password === data.password && user.phone === data.phone){
            const payload = { id: user.id_user, phone: user.phone };
            return {
                access_token: await this.jwtService.signAsync(payload),
                refresh_token: await this.jwtService.signAsync(payload, {expiresIn: "1d"})
            };
        }else{
            throw new UnauthorizedException({message: "Неверный телефон или пароль"});
        }
    }
}
