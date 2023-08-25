'use client'

import { useState } from "react";
import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";

const Auth = () =>{
    const [isSignIn, setIsSignIn] = useState<boolean>(true);
    return(
        <div className="auth__window">
            <div className="auth__nav">
                <button 
                    style={
                        {
                            boxShadow: isSignIn ? "0px 4px 0px rgb(255, 149, 0)" : "",
                            color: !isSignIn ? "rgb(164, 164, 164)" : "" 
                        }}
                    onClick={()=>setIsSignIn(true)}
                >
                    Вход
                </button>
                <button 
                    style={
                        {
                            boxShadow: !isSignIn ? "0px 4px 0px rgb(255, 149, 0)" : "",
                            color: isSignIn ? "rgb(164, 164, 164)" : ""
                        }}
                    onClick={()=>setIsSignIn(false)}
                >
                    Регистрация
                </button>
            </div>
            <FormDefault 
                isMultipartData={false} 
                styles={{width: "80%", display: isSignIn ? "block" : "none"}}
            >
                <InputDefault label="Номер телефона" type="phone" idForLabel="0"/>
                <InputDefault idForLabel="1" label="Пароль" type="password"/>
                <ButtonDefault 
                    content="Войти" 
                    isSubmit={true} 
                    func={()=> alert("fd")} 
                    margin="10px"
                />
            </FormDefault>
            <FormDefault 
                isMultipartData={false} 
                styles={{width: "80%", display: !isSignIn ? "block" : "none"}}
            >
                <InputDefault idForLabel="2" label="Номер телефона" type="text"/>
                <InputDefault idForLabel="3" label="Пароль" type="password"/>
                <InputDefault idForLabel="4" label="Повтор пароля" type="text"/>
                <ButtonDefault 
                    content="Зарегистрироваться" 
                    isSubmit={true} 
                    func={()=> alert("fd")} 
                    margin="10px"
                />
            </FormDefault>
        </div>
    );
}

export default Auth;