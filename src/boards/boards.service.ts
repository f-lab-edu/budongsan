import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    create(createBoardDto: CreateBoardDto) {
        return 'pass?';
    }
}
