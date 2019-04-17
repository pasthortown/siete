import { FranchiseChainNameModule } from './franchisechainname.module';

describe('FranchiseChainNameModule', () => {
   let blackPageModule: FranchiseChainNameModule;

   beforeEach(() => {
      blackPageModule = new FranchiseChainNameModule();   });

   it('should create an instance', () => {
      expect(blackPageModule).toBeTruthy();
   });
});