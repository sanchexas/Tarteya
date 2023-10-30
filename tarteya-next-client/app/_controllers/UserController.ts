import { CreateUserDto } from "../_types/dtos";
import { defaultAxiosHandler } from "../_utils/defaultAxiosHandler";

export class UserController{
    create(formData: CreateUserDto){
        return defaultAxiosHandler('/users/create', 'post', formData, {withCredentials: true});
    }
    remove(){

    }
    update(){

    }
    getAll(){

    }
    getById(){
        
    }
}