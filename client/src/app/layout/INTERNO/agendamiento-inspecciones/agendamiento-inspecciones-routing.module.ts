import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendamientoInspeccionesComponent } from './agendamiento-inspecciones.component';

const routes: Routes = [
  {
    path: '',
    component: AgendamientoInspeccionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamientoInspeccionesRoutingModule {}
