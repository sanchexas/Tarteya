import ButtonDefault from "./ButtonDefault";
import CartButton from "./CartButton";
import ModalWindow from "./ModalWindow";

const HeadNavActions = () =>{
    return(
        <div className="header__nav__actions">
            <CartButton/>
            <ButtonDefault content="modalTest" func={()=> console.log("fdsds")}/>
            
        </div>
    );
}

export default HeadNavActions;