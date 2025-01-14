import { Test, TestingModule } from '@nestjs/testing';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

describe('BoardsController', () => {
  let controller: BoardsController;
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsController],
      providers: [BoardsService]
    }).compile();

    controller = module.get<BoardsController>(BoardsController);
    service = await module.resolve(BoardsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    const createBoardDto = {
      id: 1,
      title: 'z'
    };
    controller.create(createBoardDto);
    expect(service.create).toHaveBeenCalled;
  });
});
