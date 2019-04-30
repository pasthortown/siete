import { AsignacionFinancieroModule } from './asignacion-financiero.module';

describe('AsignacionFinancieroModule', () => {
  let blackPageModule: AsignacionFinancieroModule;

  beforeEach(() => {
    blackPageModule = new AsignacionFinancieroModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
