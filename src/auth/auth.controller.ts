import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './security/passport.jwt';
import { UserEntity } from 'src/users/entities/user.entity';
import { User } from 'src/users/user.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  async singin(@User() user: UserEntity) {
    return this.authService.signin(user);
  }
}
