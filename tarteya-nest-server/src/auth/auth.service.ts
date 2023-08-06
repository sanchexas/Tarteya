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
        const user = await this.userService.findOne(data.phone);
        if (user?.password !== data.password) {
            throw new UnauthorizedException({}, "Неверные данные (от auth.service.ts)");
        }
        const payload = { sub: user.id_user, phone: user.phone };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
