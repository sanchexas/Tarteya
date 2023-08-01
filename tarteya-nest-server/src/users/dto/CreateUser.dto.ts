import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: "Введите имя"})
    name: string
    surname: string
    patronymic: string
}