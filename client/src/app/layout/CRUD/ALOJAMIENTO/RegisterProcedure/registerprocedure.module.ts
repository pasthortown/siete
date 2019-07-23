import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterProcedureRoutingModule } from './registerprocedure-routing.module';
import { RegisterProcedureComponent } from './registerprocedure.component';
import { RegisterProcedureService } from './../../../../services/CRUD/ALOJAMIENTO/registerprocedure.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { ProcedureJustificationService } from './../../../../services/CRUD/ALOJAMIENTO/procedurejustification.service';
import { ProcedureService } from './../../../../services/CRUD/ALOJAMIENTO/procedure.service';

@NgModule({
   imports: [CommonModule,
             RegisterProcedureRoutingModule,
             FormsModule],
   declarations: [RegisterProcedureComponent],
   providers: [
               NgbModal,
               RegisterService,
               ProcedureJustificationService,
               ProcedureService,
               RegisterProcedureService
               ]
})
export class RegisterProcedureModule {}