import { Users } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Roles{
    @PrimaryGeneratedColumn()
    id_role: number
    @Column()
    title: string
    @OneToMany(()=>Users, (user)=>user.role)
    user: Users[] 
}