import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { templateComponent } from './template.component';

const routes: Routes = [
   {
      path: '',
      component: templateComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class templateRoutingModule {}
