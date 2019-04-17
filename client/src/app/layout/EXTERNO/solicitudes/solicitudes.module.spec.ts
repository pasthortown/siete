import { SolicitudesModule } from './solicitudes.module';

describe('SolicitudesModule', () => {
  let blackPageModule: SolicitudesModule;

  beforeEach(() => {
    blackPageModule = new SolicitudesModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
