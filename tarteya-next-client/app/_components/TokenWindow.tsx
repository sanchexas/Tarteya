'use client'

import { ShowWindowType } from "../_types/types";

const TokenWindow = (props: ShowWindowType) =>{
    return(
        <div style={{display: !props.show ? 'none': ''}}>
            Token WIndow
        </div>
    );
}

export default TokenWindow;