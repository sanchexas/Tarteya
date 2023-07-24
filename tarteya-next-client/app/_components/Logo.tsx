import Link from "next/link";
import Image from "next/image";

const Logo = () =>{
    return(
        <div className="logo">
            <Link href='/'>
                <Image src='/tarteya_logo.svg' alt='tarteya-logo' width={200} height={40}/>
            </Link>
        </div>
        
    );
}

export default Logo;