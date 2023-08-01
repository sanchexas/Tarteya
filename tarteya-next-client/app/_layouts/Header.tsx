'use client'
import { useEffect, useState } from "react";
import HeadNav from "../_components/HeadNav";
import { Link } from "react-scroll";
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
            <Link to="logo" duration={300} smooth={true} spy={true} offset={-10} className={scroll > 75 ? 'headlogo headlogo__active' : 'headlogo'}><Image  alt="" width={100} height={20} src="/tarteya_logo.svg" /></Link>
            <div className="header__container">
                <HeadNav/>
                <HeadNavActions/>
            </div>
        </header>
    );
}

export default Header;