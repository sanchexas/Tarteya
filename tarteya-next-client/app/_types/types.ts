
export type ShowWindow = "signup" | "signin" | "cart" | false;
export type ModalContextType = {
    showWindow: ShowWindow
    setShowWindow: React.Dispatch<React.SetStateAction<ShowWindow>>
}
export type BtnDefaultProps = {
    content: string
    isSubmit: boolean 
    func?: (event?: React.MouseEvent<HTMLButtonElement>) => void
    margin?: string
}
export type InputDefaultType = {
    type: string
    setChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string
    placeholder?: string
    widthPercents?: number
}
export type FormDefaultType = {
    children: React.ReactNode
    isMultipartData: boolean
    title?: string
    method?: string
    setSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}