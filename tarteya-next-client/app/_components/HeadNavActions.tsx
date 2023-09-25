import { useCustomContext } from "../_context/Context";
import ButtonDefault from "./ButtonDefault";
import CartButton from "./CartButton";
import IconButton from "./IconButton";

const HeadNavActions = () =>{
    const {setShowWindow} = useCustomContext();

    return(
        <div className="header__nav__actions">
            <CartButton/>
            <IconButton title="Test" svgElement={
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 8.75H23.4875C23.8368 8.75001 24.1822 8.82321 24.5014 8.96488C24.8207 9.10655 25.1067 9.31354 25.3411 9.57252C25.5754 9.83149 25.7529 10.1367 25.8621 10.4685C25.9713 10.8002 26.0098 11.1512 25.975 11.4988L25.225 18.9988C25.1633 19.6156 24.8746 20.1876 24.415 20.6036C23.9553 21.0196 23.3575 21.25 22.7375 21.25H10.8C10.2218 21.2502 9.66147 21.0501 9.21431 20.6836C8.76714 20.3171 8.46082 19.8069 8.3475 19.24L6.25 8.75Z" stroke="black" strokeWidth="1.3" strokeLinejoin="round"/>
                    <path d="M6.25 8.75L5.2375 4.69625C5.16979 4.42594 5.01369 4.18601 4.79401 4.01457C4.57433 3.84313 4.30366 3.75001 4.025 3.75H2.5M10 26.25H12.5M20 26.25H22.5" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }/>
            <ButtonDefault content="modalTest" func={()=> setShowWindow("auth")} isSubmit={false}/>
        </div>
    );
}

export default HeadNavActions;