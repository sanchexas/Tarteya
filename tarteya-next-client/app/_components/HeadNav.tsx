// import Link from "next/link";
import { Link } from "react-scroll";

const HeadNav = () =>{
    return(
        <nav className="header__nav">
            <Link activeClass="active__nav__item" to="1" spy={true} smooth={true} offset={-60} duration={500}>1</Link>
            <Link activeClass="active__nav__item" to="2" spy={true} smooth={true} offset={-60} duration={500}>2</Link>
            <Link activeClass="active__nav__item" to="3" spy={true} smooth={true} offset={-60} duration={500}>3</Link>
            <Link activeClass="active__nav__item" to="4" spy={true} smooth={true} offset={-60} duration={500}>4</Link>
            <Link activeClass="active__nav__item" to="5" spy={true} smooth={true} offset={-60} duration={500}>5</Link>
            <Link activeClass="active__nav__item" to="6" spy={true} smooth={true} offset={-60} duration={500}>6</Link>
            <Link activeClass="active__nav__item" to="7" spy={true} smooth={true} offset={-60} duration={500}>7</Link>
        </nav>
    );
}

export default HeadNav;