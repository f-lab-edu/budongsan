import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthDTO } from 'src/auth/dto/auth.dto';
import { userDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  //TODO
  //가입, 로그인, 탈퇴, 수정, 아이디 패스워드 찾기, 이메일 인증?

  @Post('/signup')
  async signup (@Body() authDto: AuthDTO.SignUp) {
    const {userId, userName, email, password} = authDto;
    
    const hasUserId = await this.usersService.findbyId(userId);
    if(hasUserId){
      throw new ConflictException('이미 사용중인 아이디 입니다.');
    }

    const userEntity = this.usersService.createUser(authDto);

    return '회원가입성공';
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
