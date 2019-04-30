import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InspectorReportAttachmentComponent } from './inspectorreportattachment.component';

describe('InspectorReportAttachmentComponent', () => {
   let component: InspectorReportAttachmentComponent;
   let fixture: ComponentFixture<InspectorReportAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [InspectorReportAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(InspectorReportAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});