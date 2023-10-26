import { BtnDefaultProps } from "../_types/types";

const ButtonDefault = (props: BtnDefaultProps) =>{
    return(
        <button 
            onClick={props.func} 
            className={!props.isDisabled ? "btn__default" : "btn__default disabled"} 
            style={{...props.styles, margin: props.margin}}
            type={props.isSubmit ? "submit" : "button"}
            disabled={props.isDisabled}
        >
            {props.content}
        </button>
    );
}

export default ButtonDefault;