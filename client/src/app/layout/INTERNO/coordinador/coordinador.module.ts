import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoordinadorRoutingModule } from './coordinador-routing.module';
import { CoordinadorComponent } from './coordinador.component';

@NgModule({
  imports: [CommonModule, CoordinadorRoutingModule],
  declarations: [CoordinadorComponent]
})
export class CoordinadorModule {}
