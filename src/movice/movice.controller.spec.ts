import { Test, TestingModule } from '@nestjs/testing';
import { MoviceController } from './movice.controller';

describe('MoviceController', () => {
  let controller: MoviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviceController],
    }).compile();

    controller = module.get<MoviceController>(MoviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
