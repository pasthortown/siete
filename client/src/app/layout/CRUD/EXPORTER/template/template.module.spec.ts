import { templateModule } from './template.module';

describe('templateModule', () => {
   let blackPageModule: templateModule;

   beforeEach(() => {
      blackPageModule = new templateModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});