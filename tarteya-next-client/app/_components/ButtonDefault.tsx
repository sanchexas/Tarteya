'use client'

import { BtnDefaultProps } from "../_types/types";

const ButtonDefault = (props: BtnDefaultProps) =>{
    return(
        <button 
            onClick={props.func} 
            className="btn__default MR" 
            style={{margin: props.margin}}
            type={props.isSubmit ? "submit" : "button"}
        >
            {props.content}
        </button>
    );
}

export default ButtonDefault;