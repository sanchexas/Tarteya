import { Contains, IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "Введите имя"})
    @MaxLength(50, {message: "Имя не должно превышать 50 символов"})
    @MinLength(2, {message: "Имя не должно быть менее 2-х символов"})
    name: string
    
    surname: string

    patronymic?: string

    @IsEmail()

    email: string
    phone: string
    password: string
}