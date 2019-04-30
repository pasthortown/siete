import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InspectorReportRoutingModule } from './inspectorreport-routing.module';
import { InspectorReportComponent } from './inspectorreport.component';
import { InspectorReportService } from './../../../../services/CRUD/ALOJAMIENTO/inspectorreport.service';
import { environment } from 'src/environments/environment';
import { InspectionAssigmentService } from './../../../../services/CRUD/ALOJAMIENTO/inspectionassigment.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             InspectorReportRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [InspectorReportComponent],
   providers: [
               NgbModal,
               InspectionAssigmentService,
               InspectorReportService
               ]
})
export class InspectorReportModule {}