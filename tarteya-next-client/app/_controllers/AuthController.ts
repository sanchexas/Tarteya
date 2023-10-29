import { defaultAxiosHandler } from '../_utils/defaultAxiosHandler';
export class AuthController{
    
    loginByPhone(phone: string){
        return defaultAxiosHandler("/auth/loginbyphone", "post", {phone: phone}, {withCredentials: true});
    }
    verifyToken(token: string){
        return defaultAxiosHandler("/auth/verifytoken", "post" ,{user_token: token}, {withCredentials: true});
    }
    loginByEmail(){

    }
}