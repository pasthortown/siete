import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgendamientoInspeccionesRoutingModule } from './agendamiento-inspecciones-routing.module';
import { AgendamientoInspeccionesComponent } from './agendamiento-inspecciones.component';

@NgModule({
  imports: [CommonModule, AgendamientoInspeccionesRoutingModule],
  declarations: [AgendamientoInspeccionesComponent]
})
export class AgendamientoInspeccionesModule {}
