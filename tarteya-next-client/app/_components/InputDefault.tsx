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
                        name={props.name}
                    >
                        <input type="tel" id={`#${props.idForLabel}`}/>
                    </InputMask>
                </div>
            </div>
        );
    }else if(props.type === 'token'){
        return(
            <div className="form__default__item" style={{width: `${props.widthPercents}%`, ...props.styles}}>
                <label htmlFor={`#${props.idForLabel}`}>{props.label}</label>
                <br />
                <div style={{border: "none"}}>
                    <InputMask
                        mask='9 9 9 9'
                        value={props.value}
                        onChange={props.setChange}
                        alwaysShowMask
                        maskPlaceholder={"_"}
                    >
                        <input type="text" ref={props.reff} id={`#${props.idForLabel}`} style={{textAlign: 'center',fontSize: '30px', fontFamily: "MB", color: "#F08A10", letterSpacing: "10px"}}/>
                    </InputMask>
                </div>
            </div>
        );
    }else if(props.type === 'checkbox'){

        // ДОДЕЛАТЬ СОГЛАШЕНИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ!!!

        return(
            <>  
            <input type="checkbox"/><label htmlFor={`#${props.idForLabel}`}>{props.label}</label> 
            </>
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