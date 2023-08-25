import { FormDefaultType } from "../_types/types";

const FormDefault = (props: FormDefaultType) =>{
    return(
        <form 
            className="form__default" 
            method={props.method} 
            encType={props.isMultipartData ? 'multipart/form-data' : ''}
            style={props.styles}
        >
            <h2 className="form__title__default">{props.title}</h2>
            {props.children}
        </form>
    );
}

export default FormDefault;
