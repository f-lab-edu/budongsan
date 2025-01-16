import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsEntity } from './entities/boards.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardsEntity]),
    BoardsModule],
  exports: [BoardsService],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule { }
