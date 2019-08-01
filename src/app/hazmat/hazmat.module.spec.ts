import { HazMatModule } from './hazmat.module';

describe('HazmatModule', () => {
  let hazmatModule: HazMatModule;

  beforeEach(() => {
    hazmatModule = new HazMatModule();
  });

  it('should create an instance', () => {
    expect(hazmatModule).toBeTruthy();
  });
});
