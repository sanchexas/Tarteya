'use client'

import { InputDefaultType } from "../_types/types";
import InputMask from "react-input-mask";
/**
 * При вызове компонента InputDefault необходимо обязательно указать idForLabel (любое уникальное значение). Параметр idForLabel создан для избежания ошибок, связанных с несовпадающими id элемента label и input.
 */
const InputDefault = (props: InputDefaultType) =>{
    if(props.type === 'tel'){
        return(
            <div className="form__default__item" style={{width: `${props.widthPercents}%`, ...props.styles}}>
                <label htmlFor={`#${props.idForLabel}`}>{props.label}</label>
                <div>
                    <InputMask
                        mask='+7 999 999 99 99' 
                        value={props.value} 
                        onChange={props.setChange}
                        alwaysShowMask
                        maskPlaceholder={" "}
                    >
                        <input type="tel" id={`#${props.idForLabel}`}/>
                    </InputMask>
                </div>
            </div>
        );
    }
    return(
        <div className="form__default__item" style={{width: `${props.widthPercents}%`, ...props.styles}}>
            <label htmlFor={`#${props.idForLabel}`}>{props.label}</label>
            <div>
                <input
                    id={`#${props.idForLabel}`}
                    value={props.value}
                    name={props.name} 
                    type={props.type} 
                    onChange={props.setChange} 
                    placeholder={props.placeholder} 
                    ref={props.reff}
                />
            </div>
        </div>
    );
}

export default InputDefault;