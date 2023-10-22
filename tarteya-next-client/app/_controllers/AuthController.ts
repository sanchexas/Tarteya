import Axios, { AxiosError } from 'axios'
import { ServerResponse } from '../_types/dtos';
export class AuthController{
    loginByPhone(phone: string){
        const res = Axios.post<ServerResponse>('http://localhost:3005/auth/loginbyphone', { phone: phone }, {withCredentials: true})
            .then((response) => {
                console.log(response.data)
                return response.data
            }).catch((error: AxiosError<ServerResponse>) => {
                let e = error.response
                if (e) {
                    console.log(e.data)
                    return e.data
                }
            });
        return res;
    }
    verifyToken(token: string){

    }
    loginByEmail(){

    }
}