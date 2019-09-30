import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFinancieroComponent } from './admin-financiero.component';

describe('AdminFinancieroComponent', () => {
  let component: AdminFinancieroComponent;
  let fixture: ComponentFixture<AdminFinancieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFinancieroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
