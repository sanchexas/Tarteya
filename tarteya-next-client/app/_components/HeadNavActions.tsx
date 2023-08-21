import { useCustomContext } from "../_context/Context";
import ButtonDefault from "./ButtonDefault";
import CartButton from "./CartButton";
import ModalWindow from "./ModalWindow";

const HeadNavActions = () =>{
    const {setShowWindow} = useCustomContext()

    return(
        <div className="header__nav__actions">
            <CartButton/>
            <ButtonDefault content="modalTest" func={()=> setShowWindow("cart")}/>
        </div>
    );
}

export default HeadNavActions;