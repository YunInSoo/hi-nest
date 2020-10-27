import { Test, TestingModule } from '@nestjs/testing';
import { MoviceService } from './movice.service';

describe('MoviceService', () => {
  let service: MoviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviceService],
    }).compile();

    service = module.get<MoviceService>(MoviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
