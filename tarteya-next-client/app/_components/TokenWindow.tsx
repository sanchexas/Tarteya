'use client'

import { ShowWindowType } from "../_types/types";
import InputDefault from "./InputDefault";
import { AuthController } from "../_controllers/AuthController";
import { useEffect, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { TokenController } from "../_controllers/TokenController";
import ButtonDefault from "./ButtonDefault";
import useCountDown from "../_utils/useCountDown";
import { TOKEN_COUNT_DOWN_TIMER_SECONDS } from "../consts";
import Cookies from "universal-cookie";

const TokenWindow = (props: ShowWindowType): JSX.Element =>{
    const [token, setToken] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<JSX.Element[]>();
    const {secLeft, start} = useCountDown();
    const authController = new AuthController();
    const phoneCookie = new Cookies();

    useEffect(()=>{
        let trimmedToken: string = token.replace(/\D/g, '');
        if(trimmedToken.length === 4){
            const authController: AuthController = new AuthController();
            authController.verifyToken(trimmedToken).then((response)=>{
                if(response){
                    if(response.statusCode < 400){
                        const tokenController: TokenController = new TokenController();
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
            });
        }
    }, [token]);
    useEffect(()=>{
        start(TOKEN_COUNT_DOWN_TIMER_SECONDS);
    },[]);
    return(
        <div className="token__window" style={{display: !props.show ? 'none': '', marginTop: "20px"}}>
            <div style={{width: '100%', display: errorMessages ? "flex" : "none", flexDirection: "column", marginBottom: "30px"}}>
                {errorMessages}
            </div>
            <InputDefault type="token" idForLabel="11" label="Введите код из СМС" 
                setChange={(e)=>setToken(e.target.value)}
            />
            <ButtonDefault content={secLeft === 0 ? 'Отправить' : `Отправить ( ${secLeft} с. )`} isSubmit={false} func={()=>authController.loginByPhone(phoneCookie.get('_tp'))} isDisabled={secLeft === 0 ? false : true} styles={{width: '80%'}}/>
        </div>
    );
}

export default TokenWindow;