'use client'

import { useState } from "react";
import { ShowWindowType } from "../_types/types";
import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";
import { AuthController } from '../_controllers/AuthController';
import { useCustomTokenWindowContext } from "../_context/Context";
import { ErrorMessage } from "./ErrorMessage";

const SignIn = (props: ShowWindowType) =>{
    const [isByEmail, setIsByEmail] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {showTokenWindow,setShowTokenWindow} = useCustomTokenWindowContext();
    const [errorMessages, setErrorMessages] = useState<JSX.Element[]>();
    const authController = new AuthController();
    
    const btnHandler = () =>{
        if(!isByEmail){
            authController.loginByPhone(phone)
            .then((response)=>{
                if(response){
                    if(response.statusCode < 400){
                        setShowTokenWindow(true);
                    }else{
                        setErrorMessages(response.message.map((err, i)=>{
                            return(
                                <ErrorMessage message={err} key={i}/>
                            );
                        }));
                    }
                }
            });
        }else{
            console.log(email);
            console.log(password);
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
            <div style={{width: '100%', display: errorMessages ? "flex" : "none", flexDirection: "column", marginBottom: "30px"}}>
                {errorMessages}
            </div>
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