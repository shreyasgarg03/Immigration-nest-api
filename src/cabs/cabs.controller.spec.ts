import { Test, TestingModule } from '@nestjs/testing';
import { CabsController } from './cabs.controller';

describe('CabsController', () => {
  let controller: CabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabsController],
    }).compile();

    controller = module.get<CabsController>(CabsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
