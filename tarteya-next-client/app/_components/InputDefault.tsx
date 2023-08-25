'use client'
import { InputDefaultType } from "../_types/types";
/**
 * При вызове компонента InputDefault необходимо обязательно указать idForLabel (любое уникальное значение). Параметр idForLabel создан для избежания ошибок, связанных с несовпадающими id элемента label и input.
 */
const InputDefault = (props: InputDefaultType) =>{
    return(
        <div className="form__default__item" style={{width: `${props.widthPercents}%`}}>
            <label htmlFor={`#${props.idForLabel}`}>{props.label}</label>
            <div>
                <input
                    id={`#${props.idForLabel}`}
                    value={props.value}
                    name={props.name} 
                    type={props.type} 
                    onChange={props.setChange} 
                    placeholder={props.placeholder} 
                />
            </div>
        </div>
    );
}

export default InputDefault;