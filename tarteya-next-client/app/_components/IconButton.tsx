/* eslint-disable @next/next/no-img-element */
import { IconButtonType } from "../_types/types";

const IconButton = (props: IconButtonType) =>{
    return(
        <button className="icon__btn">
            {props.svgElement}
            <span>{props.title}</span>
        </button>
    )
}

export default IconButton;