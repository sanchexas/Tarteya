import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/CreateUser.dto';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async create(body: CreateUserDto): Promise<void>{
        if(!body.role){
            body.role = 3;                      // сетим по умолчанию роль обычного пользователя
            await this.usersRepository.save(body);
        }
    }
    async findByPhone(phone: string): Promise<User>{
        return await this.usersRepository.findOne({
            select: [], where: {'phone': phone}
        });
    }
}
