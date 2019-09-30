import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistroComponent } from './admin-registro.component';

const routes: Routes = [
   {
      path: '',
      component: AdminRegistroComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AdminRegistroRoutingModule {}