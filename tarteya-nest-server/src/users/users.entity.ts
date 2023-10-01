import { Role } from 'src/roles/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id_user: number
    @Column({length: 50})
    name: string
    @Column({length: 100})
    surname: string
    @Column({length: 60, nullable: true})
    patronymic: string
    @Column({length: 12})
    phone: string
    @Column({length: 150, nullable: true})
    email: string
    @Column({length: 300})
    password: string
    @ManyToOne(()=>Role, (role)=> role.user, {nullable: false})
    @Index('role_id_idx')
    role: Role | number
}