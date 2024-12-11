import { Controller, Get, Post, Body, Patch, Param, Delete, 
    ConflictException, UseGuards, Req,ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthDTO } from 'src/auth/dto/auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/security/passport.jwt';

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

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getProfile(@Req() req: any){
    const user = req.user;
    return user;
  }
  

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/userNo')
  findOne(@Param('userNo', ParseIntPipe) userNo: number) {
    return this.usersService.findOne(userNo);
  }

  @Patch('/userNo')
  update(@Param('userNo', ParseIntPipe) userNo: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(userNo, updateUserDto);
  }

  @Delete('/id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
