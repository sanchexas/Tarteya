'use client'

import { ShowWindowType } from "../_types/types";
import InputDefault from "./InputDefault";
import { AuthController } from "../_controllers/AuthController";
import { useEffect, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { TokenController } from "../_controllers/TokenController";

const TokenWindow = (props: ShowWindowType): JSX.Element =>{
    const [token, setToken] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<JSX.Element[]>();
    useEffect(()=>{
        let trimmedToken: string = token.replace(/\D/g, '');
        if(trimmedToken.length === 4){
            const authController: AuthController = new AuthController();
            authController.verifyToken(trimmedToken).then((response)=>{
                if(response){
                    if(response.statusCode < 400){
                        const tokenController = new TokenController();
                        tokenController.setLocalStorageToken(response.data);
                        document.location.reload();
                    }else{
                        setErrorMessages(response.message.map((err, i )=>{
                            return(
                                <ErrorMessage message={err} key={i}/>
                            );
                        }));
                    }
                }
            })

            // ДОДЕЛАТЬ !!!

        }
    }, [token]);
    return(
        <div className="token__window" style={{display: !props.show ? 'none': '', marginTop: "20px"}}>
            <div style={{width: '100%', display: errorMessages ? "flex" : "none", flexDirection: "column", marginBottom: "30px"}}>
                {errorMessages}
            </div>
            <InputDefault type="token" idForLabel="11" label="Введите код из СМС" 
                setChange={(e)=>setToken(e.target.value)}
            />
        </div>
    );
}

export default TokenWindow;