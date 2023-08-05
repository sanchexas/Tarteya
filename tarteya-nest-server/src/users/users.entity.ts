import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number
    @Column({length: 50})
    name: string
    @Column({length: 100})
    surname: string
    @Column({length: 100, nullable: true})
    patronymic: string
    @Column({length: 12})
    phone: string
    @Column({length: 150})
    email: string
    @Column({length: 500})
    password: string
}