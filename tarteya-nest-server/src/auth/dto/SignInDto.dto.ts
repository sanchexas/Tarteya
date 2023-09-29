import { IsPhoneNumber, IsEmpty, IsNotEmpty } from "class-validator"

export class SignInDto{
    @IsPhoneNumber('RU', {message: "Некорректный номер телефона"})
    phone: string
    @IsNotEmpty({message: "Введите пароль"})
    password?: string
} 