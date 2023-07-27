'use client'
import { useEffect, useState } from "react";
import HeadNav from "../_components/HeadNav";
import Image from "next/image";
import HeadNavActions from "../_components/HeadNavActions";

const Header = () =>{
    const [scroll, setScroll] = useState(typeof window === "undefined" ? 0 : window.scrollY);
    const handleScroll = () => {
        setScroll(typeof window === "undefined" ? 0 : window.scrollY);
    };
    useEffect(()=>{
        if(typeof window !== "undefined"){
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    });
    return(
        <header className={scroll > 75 ? 'header__shadow' : ''}>
            <Image alt="" width={100} height={20} src="/tarteya_logo.svg" className={scroll > 75 ? 'testspan testspanactive' : 'testspan'}/>
            <div className="header__container">
                <HeadNav/>
                <HeadNavActions/>
            </div>
        </header>
    );
}

export default Header;