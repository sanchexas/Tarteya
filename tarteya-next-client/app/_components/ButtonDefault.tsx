'use client'

type BtnDefaultProps = {
    content: string
    func: () => void 
}

const ButtonDefault = ({content, func}: BtnDefaultProps) =>{
    return(
        <button onClick={func} className="btn__default MR">
            {content}
        </button>
    );
}

export default ButtonDefault;