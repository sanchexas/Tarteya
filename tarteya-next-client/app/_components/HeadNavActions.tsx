'use client'

import { useCustomWindowContext } from "../_context/Context";
import IconButton from "./IconButton";

const HeadNavActions = () =>{
    const {setShowWindow} = useCustomWindowContext();

    return(
        <div className="header__nav__actions">
            <IconButton title="Корзина" handler={()=> setShowWindow("cart")} svgElement={
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 8.75H23.4875C23.8368 8.75001 24.1822 8.82321 24.5014 8.96488C24.8207 9.10655 25.1067 9.31354 25.3411 9.57252C25.5754 9.83149 25.7529 10.1367 25.8621 10.4685C25.9713 10.8002 26.0098 11.1512 25.975 11.4988L25.225 18.9988C25.1633 19.6156 24.8746 20.1876 24.415 20.6036C23.9553 21.0196 23.3575 21.25 22.7375 21.25H10.8C10.2218 21.2502 9.66147 21.0501 9.21431 20.6836C8.76714 20.3171 8.46082 19.8069 8.3475 19.24L6.25 8.75Z" stroke="black" strokeWidth="1.3" strokeLinejoin="round"/>
                    <path d="M6.25 8.75L5.2375 4.69625C5.16979 4.42594 5.01369 4.18601 4.79401 4.01457C4.57433 3.84313 4.30366 3.75001 4.025 3.75H2.5M10 26.25H12.5M20 26.25H22.5" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }/>
            <IconButton title="Профиль" handler={()=> setShowWindow("auth")} svgElement={
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z" stroke="black" strokeWidth="1.3"/>
                    <path d="M21.2501 17.5H21.6901C22.6039 17.5003 23.4862 17.8342 24.1712 18.4391C24.8562 19.044 25.2968 19.8782 25.4101 20.785L25.8988 24.69C25.9428 25.0418 25.9114 25.3989 25.8068 25.7376C25.7022 26.0764 25.5268 26.389 25.2921 26.6547C25.0575 26.9205 24.769 27.1333 24.4458 27.279C24.1226 27.4248 23.7721 27.5001 23.4176 27.5H6.58258C6.22805 27.5001 5.87757 27.4248 5.55438 27.279C5.2312 27.1333 4.9427 26.9205 4.70805 26.6547C4.47339 26.389 4.29794 26.0764 4.19333 25.7376C4.08873 25.3989 4.05737 25.0418 4.10133 24.69L4.58883 20.785C4.7022 19.8778 5.1431 19.0432 5.82862 18.4383C6.51414 17.8333 7.39705 17.4996 8.31133 17.5H8.75008" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }/>
        </div>
    );
}

export default HeadNavActions;