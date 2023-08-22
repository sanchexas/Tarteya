import { FormDefaultType } from "../_types/types";

const FormDefault = (props: FormDefaultType) =>{
    return(
        <form 
            className="form__default" 
            method={props.method} 
            encType={props.isMultipartData ? 'multipart/form-data' : ''}
        >
            <h3>{props.title}</h3>
            {props.children}
        </form>
    );
}

export default FormDefault;
