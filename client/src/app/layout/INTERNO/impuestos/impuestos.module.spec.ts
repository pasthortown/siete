import { ImpuestosModule } from './impuestos.module';

describe('ImpuestosModule', () => {
  let blackPageModule: ImpuestosModule;

  beforeEach(() => {
    blackPageModule = new ImpuestosModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
