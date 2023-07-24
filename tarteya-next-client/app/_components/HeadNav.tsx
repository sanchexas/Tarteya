// import Link from "next/link";
import { Link } from "react-scroll";

const HeadNav = () =>{
    return(
        <nav className="header__nav">
            <Link activeClass="active__nav__item" to="1" spy={true} smooth={true} offset={-200} duration={500}>Новинки</Link>
            <Link activeClass="active__nav__item" to="2" spy={true} smooth={true} offset={-200} duration={500}>Тартеи</Link>
            <Link activeClass="active__nav__item" to="3" spy={true} smooth={true} offset={-200} duration={500}>Напитки</Link>
        </nav>
    );
}

export default HeadNav;