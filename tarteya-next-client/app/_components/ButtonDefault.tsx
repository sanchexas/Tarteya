'use client'

type BtnDefaultProps = {
    content: string
    func: () => void 
}

const ButtonDefault = ({content, func}: BtnDefaultProps) =>{
    return(
        <button onClick={func} className="brn__default">
            {content}
        </button>
    );
}

export default ButtonDefault;