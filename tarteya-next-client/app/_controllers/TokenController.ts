import { TokenResponse } from "../_types/dtos";

export class TokenController{
    setLocalStorageToken(tokenObj: TokenResponse): void{
        localStorage.setItem('_at', tokenObj.access_token);
        localStorage.setItem('_rt', tokenObj.refresh_token);
    }
}