import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { AuthDTO } from 'src/auth/dto/auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) { }

  async createUser(authDTO: AuthDTO.SignUp) {
    const userEntity = await this.userRepository.create(authDTO);

    return await this.userRepository.save(userEntity);
  }

  async findbyId(userId: string) {
    return await this.userRepository.findOne({
      where: {
        userId,
      }
    })
  }

  async findbyUserNo(userNo: number) {
    return await this.userRepository.findOne({
      where: {
        userNo,
      }
    })
  }

  findAll() {
    throw new Error('Not implemented yet')
  }

  findOne(userNo: number) {
    return this.userRepository.findOne({
      where: {
        userNo,
      }
    })
  }
  //TODOs
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
