import { Module } from '@nestjs/common';
import { ScrapController } from './scrap.controller';
import { ScrapService } from './scrap.service';
import { UsersModule } from 'src/users/users.module';
import { BoardsModule } from 'src/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScrapEntity } from './scrap.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ScrapEntity]),
    UsersModule,
    BoardsModule],
  controllers: [ScrapController],
  providers: [ScrapService]
})
export class ScrapModule { }
