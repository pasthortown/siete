import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FranchiseChainNameComponent } from './franchisechainname.component';

describe('FranchiseChainNameComponent', () => {
   let component: FranchiseChainNameComponent;
   let fixture: ComponentFixture<FranchiseChainNameComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [FranchiseChainNameComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(FranchiseChainNameComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});