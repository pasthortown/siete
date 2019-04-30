import { InspectorReportModule } from './inspectorreport.module';

describe('InspectorReportModule', () => {
   let blackPageModule: InspectorReportModule;

   beforeEach(() => {
      blackPageModule = new InspectorReportModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});