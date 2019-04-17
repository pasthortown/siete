import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclarationRoutingModule } from './declaration-routing.module';
import { DeclarationComponent } from './declaration.component';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { environment } from 'src/environments/environment';
import { DeclarationItemService } from './../../../../services/CRUD/FINANCIERO/declarationitem.service';
import { ApprovalStateService } from './../../../../services/CRUD/FINANCIERO/approvalstate.service';

@NgModule({
   imports: [CommonModule,
             DeclarationRoutingModule,
             FormsModule],
   declarations: [DeclarationComponent],
   providers: [
               NgbModal,
               DeclarationItemService,
               ApprovalStateService,
               DeclarationService
               ]
})
export class DeclarationModule {}