import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesComponent } from './solicitudes.component';

@NgModule({
  imports: [CommonModule, SolicitudesRoutingModule],
  declarations: [SolicitudesComponent]
})
export class SolicitudesModule {}
