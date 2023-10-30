'use client'
import { createContext, useContext, useState } from "react";
import { ShowWindow, ModalContextType, TokenWindowContextType, IsSignInContextType } from "../_types/types";


export const ModalWindowContext = createContext<ModalContextType | null>(null);
export const TokenWindowContext = createContext<TokenWindowContextType | null>(null);
export const IsSignInContext = createContext<IsSignInContextType | null>(null);

export default function ContextProvider({children}: any){

    const [showWindow, setShowWindow] = useState<ShowWindow>(false);
    const [showTokenWindow, setShowTokenWindow] = useState<boolean>(false);
    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    // В конструкции return можно оборачивать контекст-провайдеры друг в друга. 
    // Для каждого контекста необходимо писать свой кастомный хук. 
    return(
        <IsSignInContext.Provider value={{
            isSignIn,
            setIsSignIn
        }}>
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
        </IsSignInContext.Provider>
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
export const useCustomIsSignInContext = () =>{
    const context = useContext(IsSignInContext);
    if(!context){
        throw new Error(
            "useCustomIsSignInContext может вызываться только внутри ContextProvider"
        );
    }
    return context;
}