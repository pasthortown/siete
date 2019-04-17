import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalStateRoutingModule } from './approvalstate-routing.module';
import { ApprovalStateComponent } from './approvalstate.component';
import { ApprovalStateService } from './../../../../services/CRUD/FINANCIERO/approvalstate.service';
import { environment } from 'src/environments/environment';
import { ApprovalService } from './../../../../services/CRUD/FINANCIERO/approval.service';

@NgModule({
   imports: [CommonModule,
             ApprovalStateRoutingModule,
             FormsModule],
   declarations: [ApprovalStateComponent],
   providers: [
               NgbModal,
               ApprovalService,
               ApprovalStateService
               ]
})
export class ApprovalStateModule {}