import { Test, TestingModule } from '@nestjs/testing';
import { PastebinsController } from './pastebins.controller';
import { PastebinsService } from './pastebins.service';

describe('PastebinsController', () => {
  let controller: PastebinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PastebinsController],
      providers: [PastebinsService],
    }).compile();

    controller = module.get<PastebinsController>(PastebinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
