import { Controller, Post, Get, ParseIntPipe, Param, Body, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsEntity } from './entities/boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private readonly boardsService: BoardsService) { }

    @Post('/post')
    async create(@Body() createBoardDto: CreateBoardDto) {
        this.boardsService.create(createBoardDto);
    }

    @Get('/:boardId')
    async readOne(@Param('boardId', ParseIntPipe) boardId: number) {
        return this.boardsService.readOne(boardId);
    }

    @Get()
    readAll() {
        return this.boardsService.readAll();
    }

    @Post('/edit')
    edit(@Body() updateBoardDto: UpdateBoardDto) {
        this.boardsService.edit(updateBoardDto);
    }

    @Delete('/:boardId')
    remove(@Param('boardId', ParseIntPipe) boardId: number) {
        this.boardsService.remove(boardId);
    }
}
