import { InspectorReportAttachmentModule } from './inspectorreportattachment.module';

describe('InspectorReportAttachmentModule', () => {
   let blackPageModule: InspectorReportAttachmentModule;

   beforeEach(() => {
      blackPageModule = new InspectorReportAttachmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});