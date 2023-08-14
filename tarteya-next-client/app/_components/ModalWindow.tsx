'use client'

import { CSSTransition } from 'react-transition-group';

type ModalWindowProps = {
    isActive: boolean
    children: React.ReactNode
}

const ModalWindow = ({isActive, children}: ModalWindowProps) =>{
    return(
        <CSSTransition in={isActive} timeout={300} unmountOnExit>
            <div className='mdl__window__default'>
                {children}
            </div>
        </CSSTransition>
        
    );
}

export default ModalWindow;