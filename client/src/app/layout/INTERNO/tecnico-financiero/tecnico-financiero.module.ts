import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TecnicoFinancieroRoutingModule } from './tecnico-financiero-routing.module';
import { TecnicoFinancieroComponent } from './tecnico-financiero.component';

@NgModule({
  imports: [CommonModule, TecnicoFinancieroRoutingModule],
  declarations: [TecnicoFinancieroComponent]
})
export class TecnicoFinancieroModule {}
