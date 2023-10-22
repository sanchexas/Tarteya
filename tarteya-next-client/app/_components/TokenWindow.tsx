'use client'

import { ShowWindowType } from "../_types/types";
import InputDefault from "./InputDefault";
import { AuthController } from "../_controllers/AuthController";
import { useEffect, useState } from "react";

const TokenWindow = (props: ShowWindowType): JSX.Element =>{
    const [token, setToken] = useState<string>('');
    useEffect(()=>{
        let trimmedToken: string = token.replace(/\D/g, '');
        if(trimmedToken.length === 4){
            const authController: AuthController = new AuthController();
            authController.verifyToken(trimmedToken)

            // ДОДЕЛАТЬ !!!

        }
    }, [token]);
    return(
        <div className="token__window" style={{display: !props.show ? 'none': '', marginTop: "20px"}}>
            <InputDefault type="token" idForLabel="11" label="Введите код из СМС" 
                setChange={(e)=>setToken(e.target.value)}
            />
        </div>
    );
}

export default TokenWindow;