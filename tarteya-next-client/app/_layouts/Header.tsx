'use client'
import { useEffect, useState } from "react";
import HeadNav from "../_components/HeadNav";
import HeadNavActions from "../_components/HeadNavActions";

const Header = () =>{
    const [scroll, setScroll] = useState(window.screenY);
    const handleScroll = () => {
        setScroll(window.scrollY);
      };
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
    return(
        <header className={scroll > 75 ? 'header__shadow' : ''}>
            <div className="header__container">
                <HeadNav/>
                <HeadNavActions/>
            </div>
        </header>
    );
}

export default Header;