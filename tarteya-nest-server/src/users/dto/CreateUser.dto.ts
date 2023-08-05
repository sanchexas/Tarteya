import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "Введите имя"})
    @MaxLength(50, {message: "Имя не должно превышать 50 символов"})
    @MinLength(2, {message: "Имя не должно быть менее 2-х символов"})
    name: string
    @IsNotEmpty({message: "Введите фамилию"})
    @MaxLength(100, {message: "Фамилия не должна превышать 100 символов"})
    @MinLength(2, {message: "Фамилия не должна быть менее 2-х символов"})
    surname: string
    @IsOptional()
    @MaxLength(60, {message: "Отчество не должно превышать 60 символов"})
    @MinLength(2, {message: "Отчество не должно быть менее 2-х символов"})
    patronymic?: string
    @IsEmail({}, {message: "Некорректный e-mail"})
    email: string
    @IsPhoneNumber('RU', {message: "Некорректный номер телефона"})
    phone: string
    @IsNotEmpty()
    @MaxLength(300, {message: "Пароль не должен содержать больше 300 символов"})
    @MinLength(8, {message: "Пароль не должен быть менее 8 символов"})
    password: string
}