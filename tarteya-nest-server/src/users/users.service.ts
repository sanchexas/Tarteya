import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/CreateUser.dto';
import { AuthUserDto } from './dto/AuthUserDto.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async create(body: CreateUserDto): Promise<void>{
        await this.usersRepository.save(body);
    }
    async findOne(phone: string): Promise<User>{ // change later
        return this.usersRepository.findOne({
            select: ['id_user'], where: {'phone': phone}
        })
    }
}
