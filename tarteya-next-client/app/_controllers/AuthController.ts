import Axios from 'axios'
export class AuthController{
    loginByPhone(phone: string){
        Axios.post('http://localhost:3005/auth/loginbyphone', {phone: phone}).then((response: any)=>{
                if(response.data === true){
                    
                }
                else{
                    console.log(response.data);
                }
            });
    }
}