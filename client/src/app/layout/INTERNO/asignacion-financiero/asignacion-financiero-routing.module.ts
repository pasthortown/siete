import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsignacionFinancieroComponent } from './asignacion-financiero.component';

const routes: Routes = [
  {
    path: '',
    component: AsignacionFinancieroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionFinancieroRoutingModule {}
