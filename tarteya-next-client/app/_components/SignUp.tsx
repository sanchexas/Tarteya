import ButtonDefault from "./ButtonDefault";
import FormDefault from "./FormDefault";
import InputDefault from "./InputDefault";

const SignUp = () =>{
    return(
        <FormDefault isMultipartData={false} title="Войти">
            <InputDefault label="Номер телефона" type="text"/>
            <InputDefault label="Пароль" type="text"/>
            <ButtonDefault 
                content="SignUp" 
                isSubmit={true} 
                func={()=> console.log("fd")} 
                margin="10px"
            />
        </FormDefault>
    );
}

export default SignUp;