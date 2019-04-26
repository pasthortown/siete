import { AgendamientoInspeccionesModule } from './agendamiento-inspecciones.module';

describe('AgendamientoInspeccionesModule', () => {
  let blackPageModule: AgendamientoInspeccionesModule;

  beforeEach(() => {
    blackPageModule = new AgendamientoInspeccionesModule();
  });

  it('should create an instance', () => {
    expect(blackPageModule).toBeTruthy();
  });
});
