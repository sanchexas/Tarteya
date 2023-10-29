'use client'

import { ShowWindowType } from "../_types/types";
import InputDefault from "./InputDefault";
import { AuthController } from "../_controllers/AuthController";
import { useEffect, useRef, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { TokenController } from "../_controllers/TokenController";
import ButtonDefault from "./ButtonDefault";
import useCountDown from "../_utils/useCountDown";
import { TOKEN_COUNT_DOWN_TIMER_SECONDS } from "../consts";
import Cookies from "universal-cookie";
import { ErrorMapper } from "../_utils/ErrorMapper";
/** 
 *  Компонент TokenWindow отображает окно с полем для введения токена (кода), который пришел пользователю на телефон по СМС
 */
const TokenWindow = (props: ShowWindowType): JSX.Element =>{
    const [token, setToken] = useState<string>('');
    const [errorMessages, setErrorMessages] = useState<JSX.Element[]>();
    const {secLeft, start} = useCountDown();
    const authController: AuthController = new AuthController();
    const phoneCookie = new Cookies();
    const tokenInputRef = useRef<HTMLInputElement>(null);
    
    const buttonHandler = (): void =>{
        authController.loginByPhone(phoneCookie.get('_tp')).then((response)=>{
            if(response){
                if(response.statusCode < 400){
                    start(TOKEN_COUNT_DOWN_TIMER_SECONDS);
                }else{
                    setErrorMessages(ErrorMapper(response.message));
                }
            }
        });
    }
    useEffect(()=>{
        let trimmedToken: string = token.replace(/\D/g, '');
        if(trimmedToken.length === 4){
            authController.verifyToken(trimmedToken).then((response):void=>{
                if(response){
                    if(response.statusCode < 400){
                        const tokenController: TokenController = new TokenController();
                        tokenController.setLocalStorageToken(response.data);
                        document.location.reload();
                    }else{ 
                        setErrorMessages(ErrorMapper(response.message));
                    }
                }
            });
        }
    }, [token]);
    useEffect(()=>{
        if(props.show === true){
            start(TOKEN_COUNT_DOWN_TIMER_SECONDS);
            tokenInputRef.current?.focus();
        }
    },[props.show]);
    return(
        <div className="token__window" style={{display: !props.show ? 'none': '', marginTop: "20px"}}>
            <div style={{width: '100%', display: errorMessages ? "flex" : "none", flexDirection: "column", marginBottom: "30px"}}>
                {errorMessages}
            </div>
            <InputDefault 
                type="token"
                idForLabel="11"
                label="Введите код из СМС"
                setChange={(e)=>setToken(e.target.value)}
                reff={tokenInputRef}
            />
            <ButtonDefault 
                content={secLeft === 0 ? 'Отправить' : `Отправить ( ${secLeft} с. )`} 
                isSubmit={false} 
                func={()=>buttonHandler()} 
                isDisabled={secLeft === 0 && props.show === true ? false : true} 
                styles={{width: '80%'}}/>
        </div>
    );
}

export default TokenWindow;