'use client'

import { useState } from "react";
import { ShowWindowType } from "../_types/types";
import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";
import { AuthController } from "../_controllers/AuthController";

const SignUp = (props: ShowWindowType) =>{
    const [errorMessages, setErrorMessages] = useState<JSX.Element[]>();
    const authController = new AuthController();
    return(
        <FormDefault 
            isMultipartData={false} 
            styles={{width: "80%", display: props.show ? "flex" : "none"}}
        >
            <InputDefault idForLabel="2" label="Номер телефона" type="tel"/>
            <InputDefault idForLabel="3" label="E-mail" type="text"/>
            <InputDefault idForLabel="4" label="Пароль" type="password"/>
            <InputDefault idForLabel="5" label="Повтор пароля" type="text"/>
            <ButtonDefault 
                content="Зарегистрироваться" 
                isSubmit={true} 
                func={()=> alert("fd")} 
                margin="10px"
            />
        </FormDefault>
    );
}

export default SignUp;