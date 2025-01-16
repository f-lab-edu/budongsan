import { Controller, Post, UseGuards, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ScrapService } from './scrap.service';
import { ScrapEntity } from './scrap.entity';
import { User } from 'src/users/user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/security/passport.jwt';

@Controller('scrap')
export class ScrapController {
    constructor(private readonly scrapService: ScrapService) { }

    @UseGuards(JwtAuthGuard)
    @Post(':boardId')
    async createScrap(@User() user: UserEntity,
        @Param('boardId', ParseIntPipe) boardId: number) {
        return this.scrapService.createScrap(user, boardId);
    }

    @Delete(':boardId')
    async deleteScrap(@User() user: UserEntity,
        @Param('boardId', ParseIntPipe) boardId: number) {
        return this.scrapService.deleteScrap(user, boardId);
    }
}
