import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarifarioRackRoutingModule } from './tarifario-rack-routing.module';
import { TarifarioRackComponent } from './tarifario-rack.component';

@NgModule({
  imports: [CommonModule, TarifarioRackRoutingModule, FormsModule],
  declarations: [TarifarioRackComponent]
})
export class TarifarioRackModule {}
