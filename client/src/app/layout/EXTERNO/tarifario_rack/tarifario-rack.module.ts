import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { TarifarioRackRoutingModule } from './tarifario-rack-routing.module';
import { TarifarioRackComponent } from './tarifario-rack.component';
import { UserService } from 'src/app/services/profile/user.service';
import { CapacityTypeService } from './../../../services/CRUD/ALOJAMIENTO/capacitytype.service';

@NgModule({
  imports: [CommonModule, TarifarioRackRoutingModule, FormsModule],
  declarations: [TarifarioRackComponent],
  providers: [RegisterService, UserService, CapacityTypeService]
})
export class TarifarioRackModule {}
