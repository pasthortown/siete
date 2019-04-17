import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclarationItemValueRoutingModule } from './declarationitemvalue-routing.module';
import { DeclarationItemValueComponent } from './declarationitemvalue.component';
import { DeclarationItemValueService } from './../../../../services/CRUD/FINANCIERO/declarationitemvalue.service';
import { environment } from 'src/environments/environment';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { DeclarationItemService } from './../../../../services/CRUD/FINANCIERO/declarationitem.service';

@NgModule({
   imports: [CommonModule,
             DeclarationItemValueRoutingModule,
             FormsModule],
   declarations: [DeclarationItemValueComponent],
   providers: [
               NgbModal,
               DeclarationService,
               DeclarationItemService,
               DeclarationItemValueService
               ]
})
export class DeclarationItemValueModule {}