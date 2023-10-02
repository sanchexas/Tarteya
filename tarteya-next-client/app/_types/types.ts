import { ComponentPropsWithoutRef, LegacyRef, ReactElement, ReactNode, ReactSVG, ReactSVGElement, SVGProps } from "react";

export type ShowWindow = "auth" | "cart" | false;
export type ModalContextType = {
    showWindow: ShowWindow
    setShowWindow: React.Dispatch<React.SetStateAction<ShowWindow>>
}
export type TokenWindowContextType = {
    showTokenWindow: boolean
    setShowTokenWindow: React.Dispatch<React.SetStateAction<boolean>>
}
export type BtnDefaultProps = {
    content: string
    isSubmit: boolean 
    func?: (event?: React.MouseEvent<HTMLButtonElement>) => void
    margin?: string
}
export type InputDefaultType = {
    type: "tel" | "password" | "text" | "email"
    label: string
    idForLabel: string
    reff?: LegacyRef<HTMLInputElement>
    name?: string
    value?: string | number
    setChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    styles?: React.CSSProperties
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
export type ShowWindowType = {
    show: boolean
}
export type IconButtonType = {
    title: string
    svgElement: ReactElement<SVGElement>
    handler: (event?: React.MouseEvent<HTMLButtonElement>) => void
}