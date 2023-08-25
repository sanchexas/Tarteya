
export type ShowWindow = "auth" | "cart" | false;
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
    label: string
    idForLabel: string
    name?: string
    value?: string | number
    setChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    widthPercents?: number
}
export type FormDefaultType = {
    children: React.ReactNode
    isMultipartData: boolean
    title?: string
    method?: string
    setSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    styles?: React.CSSProperties
}