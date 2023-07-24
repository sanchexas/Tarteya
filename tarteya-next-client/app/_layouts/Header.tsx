'use client' // удалить!
import ButtonDefault from "../_components/ButtonDefault";
import HeadNav from "../_components/HeadNav";
import Logo from "../_components/Logo";

const Header = () =>{
    
    return(
        <header>
            <div className="header__container">
                <HeadNav/>
            </div>
        </header>
    );
}

export default Header;