import Link from "next/link";
import Image from "next/image";

const Logo = () =>{
    return(
        <Link href='/'>
            <Image src='/tarteya_logo.svg' alt='tarteya-logo' width={200} height={30}/>
        </Link>
    );
}

export default Logo;