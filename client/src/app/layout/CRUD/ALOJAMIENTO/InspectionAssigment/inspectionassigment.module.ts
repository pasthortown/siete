import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InspectionAssigmentRoutingModule } from './inspectionassigment-routing.module';
import { InspectionAssigmentComponent } from './inspectionassigment.component';
import { InspectionAssigmentService } from './../../../../services/CRUD/ALOJAMIENTO/inspectionassigment.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';

@NgModule({
   imports: [CommonModule,
             InspectionAssigmentRoutingModule,
             FormsModule],
   declarations: [InspectionAssigmentComponent],
   providers: [
               NgbModal,
               RegisterService,
               InspectionAssigmentService
               ]
})
export class InspectionAssigmentModule {}