import { IconButtonType } from "../_types/types";

const IconButton = (props: IconButtonType) =>{
    return(
        <button className="icon__btn" onClick={props.handler}>
            {props.svgElement}
            <span>{props.title}</span>
        </button>
    );
}

export default IconButton;