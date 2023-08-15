
export type ShowWindow = "signup" | "signin" | "cart" | false;
export type ModalContextType = {
    showWindow: ShowWindow
    setShowWindow: React.Dispatch<React.SetStateAction<ShowWindow>>
}