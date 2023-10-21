import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

export class UsersRepository extends Repository<Users> {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) {
        super(usersRepository.target, usersRepository.manager, usersRepository.queryRunner);
    }
    async findByPhone(phone: string): Promise<Users> {
        return await this.usersRepository.findOne({
            select: [], where: {'phone': phone}
        });
    }
    
}