'use client'

import { useState } from "react";
import { SignInType } from "../_types/types";
import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";

const SignIn = (props: SignInType) =>{
    const [isByEmail, setIsByEmail] = useState<boolean>(false);
    const btnHandler = () =>{
        if(!isByEmail){

        }else{

        }
    }
    return(
        <FormDefault 
            isMultipartData={false} 
            styles={{width: "80%", display: props.show ? "flex" : "none"}}
        >
            <span 
                style={{width: "100%", marginBottom: "30px", color: "gray"}}
            >
                Войти при помощи{" "}
                <span 
                    style={
                        {cursor: "pointer", color: "#F08A10", textDecoration: "underline"}
                    } 
                    onClick={()=> setIsByEmail(isByEmail ? false : true)}
                >
                    {!isByEmail ? "E-mail" : "Телефона"}
                </span>
            .</span> 
            {/* СДЕЛАТЬ INPUTDEFAULT для типа Телефон и Email! */}
            <InputDefault label={isByEmail ? "E-mail" : "Номер телефона"} type={isByEmail ? "email" : "tel"} idForLabel="0"/>
            <InputDefault idForLabel="1" label="Пароль" type="password" styles={{display: !isByEmail ? "none" : ""}}/>
            <ButtonDefault 
                content="Войти" 
                isSubmit={false} 
                func={()=>btnHandler()} 
                margin="10px"
            />
        </FormDefault>
    )
}

export default SignIn;