import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Role{
    @PrimaryGeneratedColumn()
    id_role: string
    @Column()
    title: string
    @OneToMany(()=>User, (user)=>user.role)
    user: User[]
}