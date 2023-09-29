import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh-jwt'){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
            ignoreExpiration: false,
            secretOrKey: `${process.env.JWT_SECRET}`  
        });
    }
}