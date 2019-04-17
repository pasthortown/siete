import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UbicationRoutingModule } from './ubication-routing.module';
import { UbicationComponent } from './ubication.component';
import { UbicationService } from './../../../../services/CRUD/BASE/ubication.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             UbicationRoutingModule,
             FormsModule],
   declarations: [UbicationComponent],
   providers: [
               NgbModal,
               UbicationService
               ]
})
export class UbicationModule {}