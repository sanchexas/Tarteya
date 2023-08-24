'use client'
import { InputDefaultType } from "../_types/types";

const InputDefault = (props: InputDefaultType) =>{
    return(
        <div className="form__default__item">
            <label htmlFor="">{props.label}</label>
            <input 
                type={props.type} 
                onChange={props.setChange} 
                placeholder={props.placeholder} 
                style={{width: `${props.widthPercents}%`}}
            />
        </div>
    );
}

export default InputDefault;