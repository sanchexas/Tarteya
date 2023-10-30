'use client'

import { useState } from "react";
import { ShowWindowType } from "../_types/types";
import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";
import { UserController } from "../_controllers/UserController";
import { ErrorMapper } from "../_utils/ErrorMapper";
import { useCustomIsSignInContext } from "../_context/Context";

const SignUp = (props: ShowWindowType) =>{
    const [errorMessages, setErrorMessages] = useState<JSX.Element[]>();
    const {setIsSignIn} = useCustomIsSignInContext();
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [reppassword, setReppassword] = useState<string>('');
    const userController = new UserController();

    const submit = (): void =>{
        userController.create({
            phone: phone,
            email: email,
            password: password,
            reppassword: reppassword
        }).then((response):void=>{
            if(response){
                if(response.statusCode < 400){
                    setPhone('');
                    setEmail('');
                    setPassword('');
                    setReppassword('');
                    setErrorMessages([]);
                    setIsSignIn(true);
                }else{
                    setErrorMessages(ErrorMapper(response.message));
                }
            }
        });
    }
    return(
        <FormDefault 
            isMultipartData={false} 
            styles={{width: "80%", display: props.show ? "flex" : "none"}}
        >
            {errorMessages}
            <InputDefault idForLabel="2" label="Номер телефона" type="tel" value={phone} setChange={(e)=>setPhone(e.target.value)}/>
            <InputDefault idForLabel="3" label="E-mail" type="text" value={email} setChange={(e)=>setEmail(e.target.value)}/>
            <InputDefault idForLabel="4" label="Пароль" type="password" value={password} setChange={(e)=>setPassword(e.target.value)}/>
            <InputDefault idForLabel="5" label="Повтор пароля" type="password" value={reppassword} setChange={(e)=>setReppassword(e.target.value)}/>
            <InputDefault idForLabel="121" label="AAAA" type="checkbox"/>
            <ButtonDefault 
                content="Зарегистрироваться" 
                isSubmit={false} 
                margin="10px"
                func={()=>submit()}
                isDisabled={phone && email && password && reppassword ? false : true} // Это превосходно
            />
        </FormDefault>
    );
}

export default SignUp;