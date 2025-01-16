import { Injectable } from '@nestjs/common';
import { ScrapEntity } from './scrap.entity';
import { UsersService } from 'src/users/users.service';
import { BoardsService } from 'src/boards/boards.service';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { BoardsEntity } from 'src/boards/entities/boards.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScrapService {
    constructor(private readonly dataSource: DataSource,
        @InjectRepository(ScrapEntity)
        private scrapRepository: Repository<ScrapEntity>) { }

    async createScrap(user, postId) {
        const userNo = user.payload.userNo;
        const userForSave = new UserEntity;
        userForSave.userNo = userNo;

        await this.dataSource.manager.save(userForSave);

        const board = new BoardsEntity;
        board.boardId = postId;

        await this.dataSource.manager.save(board);

        const scrap = new ScrapEntity;
        scrap.userNo = userNo;
        scrap.boardId = postId;

        await this.dataSource.manager.save(scrap);

        return '스크랩 되었습니다.';
    }

    async deleteScrap(user, boardId) {
        const scrap = new ScrapEntity;
        scrap.userNo = user.payload.userNo;
        scrap.boardId = boardId;

        await this.scrapRepository.remove(scrap);
    }

    //TODO scrap read
}
