import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BoardsEntity } from './entities/boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardsEntity)
        private boardsRepository: Repository<BoardsEntity>
    ) { }

    async create(createBoardDto: CreateBoardDto) {
        const boardEntity = await this.boardsRepository.create(createBoardDto);

        return await this.boardsRepository.save(boardEntity);
    }

    async readOne(boardId: number) {
        return await this.boardsRepository.findOne({
            where: {
                boardId
            }
        })
    }

    readAll() {
        return this.boardsRepository.find();
    }

    edit(updateBoardDto: UpdateBoardDto) {
        const boardId = updateBoardDto.boardId;
        return this.boardsRepository.update(boardId, updateBoardDto);
    }

    remove(boardId: number) {
        return this.boardsRepository.softDelete(boardId);
    }
}
