import { Controller, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsEntity } from './entities/boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Post()
    create(createBoardDto: CreateBoardDto) {
        this.boardsService.create(createBoardDto);
    }
}
