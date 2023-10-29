import { ErrorMessage } from "../_components/ErrorMessage";

export const ErrorMapper = (msgs: string[]): JSX.Element[] =>{
    return msgs.map((err, i )=>{
        return(
            <ErrorMessage message={err} key={i}/>
        );
    });
}