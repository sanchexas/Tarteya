'use client'
import { createContext, useContext, useState } from "react";
import { ShowWindow, ModalContextType } from "../_types/types";


export const ModalWindowContext = createContext<ModalContextType | null>(null);

export default function ContextProvider({children}: any){
const [showWindow, setShowWindow] = useState<ShowWindow>(false);

/**
 *  В конструкции return можно оборачивать контекст-провайдеры друг в друга. 
 *  Для каждого контекста необходимо писать свой кастомный хук. 
 */
    return(
        <ModalWindowContext.Provider value={{
            showWindow,
            setShowWindow
        }}>
            {children}
        </ModalWindowContext.Provider>
    );
}

// Можно как-то оптимизировать не только под модальные окна.

export function useCustomContext(){
    const context = useContext(ModalWindowContext);
    if(!context){
        throw new Error(
            "useCustomContext может вызываться только внутри ContextProvider"
        );
    }
    return context;
}