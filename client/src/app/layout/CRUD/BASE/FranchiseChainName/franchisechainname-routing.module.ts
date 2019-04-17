import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranchiseChainNameComponent } from './franchisechainname.component';

const routes: Routes = [
   {
      path: '',
      component: FranchiseChainNameComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class FranchiseChainNameRoutingModule {}
