'use client'

import { useEffect, useState } from "react"
import { CountDownHookType } from "../_types/types";

export default function useCountDown(): CountDownHookType{

    const [secLeft, setSecLeft] = useState<number>(0);

    useEffect(()=>{
        if (secLeft <= 0) return;
        
        const timeout = setTimeout(()=>{
            setSecLeft(secLeft - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [secLeft]);

    const start = (sec: number)=>{
        setSecLeft(sec);
    }

    return {secLeft, start};
}