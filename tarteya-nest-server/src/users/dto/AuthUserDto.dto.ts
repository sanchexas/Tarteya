import { IsEmpty, IsOptional, IsPhoneNumber } from "class-validator"

export class AuthUserDto{
    @IsPhoneNumber('RU', {message: "Некорректный номер телефона"})
    phone: string
    @IsOptional() // УБРАТЬ ПОЗЖЕ
    @IsEmpty({message: "Введите пароль"})
    password?: string
}