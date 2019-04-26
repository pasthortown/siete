import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamientoInspeccionesComponent } from './agendamiento-inspecciones.component';

describe('AgendamientoInspeccionesComponent', () => {
  let component: AgendamientoInspeccionesComponent;
  let fixture: ComponentFixture<AgendamientoInspeccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamientoInspeccionesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamientoInspeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
