import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectorReportComponent } from './inspectorreport.component';

describe('InspectorReportComponent', () => {
   let component: InspectorReportComponent;
   let fixture: ComponentFixture<InspectorReportComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [InspectorReportComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(InspectorReportComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});