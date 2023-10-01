import { IsPhoneNumber, IsEmpty, IsNotEmpty } from "class-validator"

export class SignInPhoneDto{
    @IsPhoneNumber('RU', {message: "Некорректный номер телефона"})
    @IsNotEmpty({message: "Введите номер телефона"})
    phone: string
} 