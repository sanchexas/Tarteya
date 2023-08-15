'use client'

import { CSSTransition } from 'react-transition-group';
import { useCustomContext } from '../_context/Context';
import { useEffect, useRef, useState } from 'react';

const ModalWindow = () =>{
    const {showWindow, setShowWindow} = useCustomContext();
    const [isWindow, setIsWindow] = useState<boolean>(false);
    const [windowComponent, setWindowComponent] = useState<JSX.Element>();
    const nodeRef = useRef(null);

    useEffect(()=>{
        switch(showWindow){
            case "signup":
                setIsWindow(true);
                setWindowComponent(<div>SIGNUP</div>);
                break;
            case "signin":
                setIsWindow(true);
                setWindowComponent(<div>SignINNN</div>);
                break;
            case "cart":
                setIsWindow(true);
                setWindowComponent(<div>CARTTTTT</div>);
                break;
            default:
                setIsWindow(false);
        }
    },[showWindow])
    return(
        <CSSTransition nodeRef={nodeRef} in={isWindow} timeout={300} classNames='modal' unmountOnExit>
            <div className='mdl__window__default' ref={nodeRef} onClick={()=> setShowWindow(false)}>
                <div className='mdl__content' onClick={(e)=> e.stopPropagation()}>
                    {windowComponent}
                </div>
            </div>
        </CSSTransition>
    );
}

export default ModalWindow;