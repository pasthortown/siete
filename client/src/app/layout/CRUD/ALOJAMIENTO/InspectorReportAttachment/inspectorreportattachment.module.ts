import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InspectorReportAttachmentRoutingModule } from './inspectorreportattachment-routing.module';
import { InspectorReportAttachmentComponent } from './inspectorreportattachment.component';
import { InspectorReportAttachmentService } from './../../../../services/CRUD/ALOJAMIENTO/inspectorreportattachment.service';
import { environment } from 'src/environments/environment';
import { InspectorReportService } from './../../../../services/CRUD/ALOJAMIENTO/inspectorreport.service';

@NgModule({
   imports: [CommonModule,
             InspectorReportAttachmentRoutingModule,
             FormsModule],
   declarations: [InspectorReportAttachmentComponent],
   providers: [
               NgbModal,
               InspectorReportService,
               InspectorReportAttachmentService
               ]
})
export class InspectorReportAttachmentModule {}