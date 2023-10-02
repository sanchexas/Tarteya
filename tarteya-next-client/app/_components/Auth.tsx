'use client'

import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import TokenWindow from "./TokenWindow";
import { useCustomTokenWindowContext } from "../_context/Context";

const Auth = () =>{
    const [isSignIn, setIsSignIn] = useState<boolean>(true);
    const {showTokenWindow} = useCustomTokenWindowContext()
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
                    disabled={showTokenWindow}
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
                    disabled={showTokenWindow}
                >
                    Регистрация
                </button>
            </div>
            <div style={{width: "100%", display: !showTokenWindow ? "flex" : "none", flexDirection: "column", alignItems: "center"}}>
                <SignIn show={isSignIn}/>
                <SignUp show={!isSignIn}/>
            </div>
            <TokenWindow show={showTokenWindow}/>
        </div>
    );
}

export default Auth;