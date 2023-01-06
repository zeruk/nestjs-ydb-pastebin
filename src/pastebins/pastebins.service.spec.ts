import { Test, TestingModule } from '@nestjs/testing';
import { PastebinsService } from './pastebins.service';

describe('PastebinsService', () => {
  let service: PastebinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PastebinsService],
    }).compile();

    service = module.get<PastebinsService>(PastebinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
