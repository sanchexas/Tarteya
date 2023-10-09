'use client'

import { useRef, useState } from "react";
import { ShowWindowType } from "../_types/types";
import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";
import { AuthController } from "../_controllers/AuthController";
import { useCustomTokenWindowContext } from "../_context/Context";

const SignIn = (props: ShowWindowType) =>{
    const [isByEmail, setIsByEmail] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {showTokenWindow,setShowTokenWindow} = useCustomTokenWindowContext();
    const authController = new AuthController();
    
    const btnHandler = () =>{
        // ДАННУЮ ЛОГИКУ ВЫНЕСТИ В КОНТРОЛЛЕРЫ !!!
        if(!isByEmail){
            
        }else{
            console.log(email)
            console.log(password)
        }
    }
    if(showTokenWindow){
        props.show = false;
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
            <InputDefault 
                label={isByEmail ? "E-mail" : "Номер телефона"} 
                type={isByEmail ? "email" : "tel"}
                setChange={(e)=>{
                    isByEmail ? setEmail(e.target.value) : setPhone(e.target.value)
                }} 
                idForLabel="0"/>
            <InputDefault 
                idForLabel="1" 
                label="Пароль" 
                type="password" 
                setChange={(e)=>setPassword(e.target.value)}
                styles={{display: !isByEmail ? "none" : ""}} />
            <ButtonDefault 
                content="Войти" 
                isSubmit={false} 
                func={()=>btnHandler()} 
                margin="10px"
            />
        </FormDefault>
    );
}

export default SignIn;