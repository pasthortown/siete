import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectionAssigmentComponent } from './inspectionassigment.component';

describe('InspectionAssigmentComponent', () => {
   let component: InspectionAssigmentComponent;
   let fixture: ComponentFixture<InspectionAssigmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [InspectionAssigmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(InspectionAssigmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});