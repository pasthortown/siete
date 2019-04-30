import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AsignacionFinancieroRoutingModule } from './asignacion-financiero-routing.module';
import { AsignacionFinancieroComponent } from './asignacion-financiero.component';

@NgModule({
  imports: [CommonModule, AsignacionFinancieroRoutingModule],
  declarations: [AsignacionFinancieroComponent]
})
export class AsignacionFinancieroModule {}
