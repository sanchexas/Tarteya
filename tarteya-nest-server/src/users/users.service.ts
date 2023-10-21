import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { CreateUserDto } from './_dto/CreateUser.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
      ) {}

    async create(body: CreateUserDto): Promise<void>{
        if(!body.role){
            body.role = 3;                      // сетим по умолчанию роль обычного пользователя
            await this.usersRepository.save(body);
        }
    }
    async findByPhone(phone: string): Promise<Users>{ 
        return await this.usersRepository.findByPhone(phone);
    }
}
