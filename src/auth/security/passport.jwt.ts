import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { AuthGuard } from "@nestjs/passport";

import { AuthService } from "../auth.service";
import { jwtConstants } from "jwt.config";

@Injectable()
export class JwtLocalStrategy extends PassportStrategy(LocalStrategy, 'local') {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'userId',
            passwordField: 'password'
        })
    }

    async validate(userId: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(userId, password);
        if (!user) {
            return new UnauthorizedException({ message: '회원 정보가 존재하지 않습니다.' });
        }
        return user;

    }
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret,
            ignoreException: false,
            algorithms: ['HS256'],
        })
    }

    async validate(payload: any) {
        return { ...payload };
    }
}


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { }