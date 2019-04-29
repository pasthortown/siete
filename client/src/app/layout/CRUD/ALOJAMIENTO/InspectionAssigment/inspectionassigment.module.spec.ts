import { InspectionAssigmentModule } from './inspectionassigment.module';

describe('InspectionAssigmentModule', () => {
   let blackPageModule: InspectionAssigmentModule;

   beforeEach(() => {
      blackPageModule = new InspectionAssigmentModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});