import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffRoutingModule } from './tariff-routing.module';
import { TariffComponent } from './tariff.component';
import { TariffService } from './../../../../services/CRUD/ALOJAMIENTO/tariff.service';
import { environment } from 'src/environments/environment';
import { TariffTypeService } from './../../../../services/CRUD/ALOJAMIENTO/tarifftype.service';

@NgModule({
   imports: [CommonModule,
             TariffRoutingModule,
             FormsModule],
   declarations: [TariffComponent],
   providers: [
               NgbModal,
               TariffTypeService,
               TariffService
               ]
})
export class TariffModule {}