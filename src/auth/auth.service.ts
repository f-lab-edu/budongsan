import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenDto } from './dto/token.dto';
import { jwtConstants } from 'jwt.config';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService) { }

    async validateUser(userId: string, password: string): Promise<UserEntity> {
        const user = await this.userService.findbyId(userId);
        if (!user) {
            throw new UnauthorizedException('아이디 혹은 비밀번호를 확인하세요.');
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('아이디 혹은 비밀번호를 확인히세요.');
        } else {
            delete user.password
        }

        return user;
    }

    async signin(user: UserEntity) {
        return this.createToken(user);
    }

    async createToken(user: UserEntity) {
        const tokenUserNo = user.userNo;
        const tokenDto = new JwtTokenDto();
        tokenDto.accessToken = await this.createAccessToken(user);
        tokenDto.refreshToken = await this.createRefreshToken(tokenUserNo);

        return tokenDto;
    }

    async createAccessToken(user: UserEntity): Promise<string> {
        const payload = { userNo: user.userNo, userId: user.userId }
        return this.jwtService.sign({ payload },
            {
                secret: jwtConstants.secret,
                expiresIn: jwtConstants.expiresIn
            })
    }

    async createRefreshToken(userNo: number): Promise<string> {
        return this.jwtService.sign({ userNo },
            {
                secret: jwtConstants.secret,
                expiresIn: jwtConstants.expiresInRefresh
            })
    }

}
