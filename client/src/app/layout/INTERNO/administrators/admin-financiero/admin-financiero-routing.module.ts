import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFinancieroComponent } from './admin-financiero.component';

const routes: Routes = [
   {
      path: '',
      component: AdminFinancieroComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AdminFinancieroComponentRoutingModule {}