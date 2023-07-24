import Link from "next/link";

const HeadNav = () =>{
    return(
        <nav className="header__nav">
            <Link href={{pathname: '', hash: "1"}}>1</Link>
            <Link href={{pathname: '', hash: "2"}}>2</Link>
            <Link href={{pathname: '', hash: "3"}}>3</Link>
            <Link href={{pathname: '', hash: "4"}}>4</Link>
            <Link href={{pathname: '', hash: "5"}}>5</Link>
            <Link href={{pathname: '', hash: "6"}}>6</Link>
            <Link href={{pathname: '', hash: "7"}}>7</Link>
        </nav>
    );
}

export default HeadNav;