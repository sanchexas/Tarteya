import Axios, { AxiosError } from "axios";
import { CreateUserDto, ServerResponse } from "../_types/dtos";
import { API_PATH } from "../consts";
import { defaultAxiosHandler } from "../_utils/defaultAxiosHandler";

export class UserController{
    create(formData: CreateUserDto){
        return defaultAxiosHandler('/users/create', 'post', formData, {});
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