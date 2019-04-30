import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionFinancieroComponent } from './asignacion-financiero.component';

describe('AsignacionFinancieroComponent', () => {
  let component: AsignacionFinancieroComponent;
  let fixture: ComponentFixture<AsignacionFinancieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignacionFinancieroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
