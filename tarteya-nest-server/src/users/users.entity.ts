import { Roles } from '../roles/roles.entity';
import { Entity, Column, ManyToOne, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Users{
    @PrimaryColumn({length: 36})
    id_user: string
    @Column({length: 50, nullable: true})
    name: string
    @Column({length: 100, nullable: true})
    surname: string
    @Column({length: 60, nullable: true})
    patronymic: string
    @Column({length: 100})
    phone: string
    @Column({length: 150})
    email: string
    @Column({length: 300})
    password: string
    @ManyToOne(()=>Roles, (role)=> role.user, {nullable: false})
    @Index('role_id_idx')
    role: Roles | number
} 