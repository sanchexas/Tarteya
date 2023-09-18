'use client'

import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
            <SignIn show={isSignIn}/>
            <SignUp show={!isSignIn}/>
        </div>
    );
}

export default Auth;