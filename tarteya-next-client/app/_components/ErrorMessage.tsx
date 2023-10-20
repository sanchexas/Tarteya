import { ErrorMessageType } from "../_types/types"

export const ErrorMessage = (props: ErrorMessageType) =>{
    return(
        <div style={{color: "red",width: '300px'}} key={props.key}>
            {props.message}.
        </div>
    );
}