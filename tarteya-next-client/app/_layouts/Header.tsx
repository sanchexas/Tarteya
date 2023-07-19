import Link from "next/link";

const Header = () =>{
    return(
        <header>
            <Link href='/about'>Agbout</Link>
            <Link href='/tarteya'>Tarteya</Link>
        </header>
    );
}

export default Header;