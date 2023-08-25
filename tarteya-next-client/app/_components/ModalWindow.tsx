'use client'

import { CSSTransition } from 'react-transition-group';
import { useCustomContext } from '../_context/Context';
import { useEffect, useRef, useState } from 'react';
import Auth from './Auth';
import Cart from './Cart';

const ModalWindow = () =>{
    const {showWindow, setShowWindow} = useCustomContext();
    const [isWindow, setIsWindow] = useState<boolean>(false);
    const [windowComponent, setWindowComponent] = useState<JSX.Element>();
    const nodeRef = useRef(null);
    useEffect(()=>{
        switch(showWindow){
            case "auth":
                setIsWindow(true);
                setWindowComponent(<Auth/>);
                break;
            case "cart":
                setIsWindow(true);
                setWindowComponent(<Cart/>);
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