'use client'
import { createContext, useContext, useState, useSyncExternalStore } from "react";
import { ShowWindow, ModalContextType, TokenWindowContextType } from "../_types/types";


export const ModalWindowContext = createContext<ModalContextType | null>(null);
export const TokenWindowContext = createContext<TokenWindowContextType | null>(null);

export default function ContextProvider({children}: any){

    const [showWindow, setShowWindow] = useState<ShowWindow>(false);
    const [showTokenWindow, setShowTokenWindow] = useState<boolean>(false);

    // В конструкции return можно оборачивать контекст-провайдеры друг в друга. 
    // Для каждого контекста необходимо писать свой кастомный хук. 
    return(
        <TokenWindowContext.Provider value={{
            showTokenWindow,
            setShowTokenWindow
        }}>
            <ModalWindowContext.Provider value={{
                showWindow,
                setShowWindow
            }}>
                {children}
            </ModalWindowContext.Provider>
        </TokenWindowContext.Provider>
    );
}
// Можно как-то оптимизировать...

export const useCustomWindowContext = (): ModalContextType =>{
    const context = useContext(ModalWindowContext);
    if(!context){
        throw new Error(
            "useCustomWindowContext может вызываться только внутри ContextProvider"
        );
    }
    return context;
}
export const useCustomTokenWindowContext = (): TokenWindowContextType =>{
    const context = useContext(TokenWindowContext);
    if(!context){
        throw new Error(
            "useCustomTokenWindowContext может вызываться только внутри ContextProvider"
        );
    }
    return context;
}