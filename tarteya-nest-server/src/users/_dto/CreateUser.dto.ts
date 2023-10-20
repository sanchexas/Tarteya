import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsEmail({}, {message: "Некорректный e-mail"})
    email?: string
    @IsPhoneNumber('RU', {message: "Некорректный номер телефона"})
    phone: string
    @IsNotEmpty()
    @MaxLength(300, {message: "Пароль не должен содержать больше 300 символов"})
    @MinLength(8, {message: "Пароль не должен быть менее 8 символов"})
    password: string
    @IsOptional()
    role: number
}