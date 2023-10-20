import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/roles.entity';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: + process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Users, Roles],
    synchronize: process.env.SYNCHRONIZE === '1',
}), UsersModule, AuthModule, RolesModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
