import Link from "next/link";

const HeadNav = () =>{
    return(
        <nav className="header__nav">
            <Link href='/about'>Agbout</Link>
            <Link href='/tarteya'>Tarteya</Link>
        </nav>
    );
}

export default HeadNav;