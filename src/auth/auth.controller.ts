import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './security/passport.jwt';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  async singin(@Request() req){
    return this.authService.signin(req.user);
  }
}
