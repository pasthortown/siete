import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { templateRoutingModule } from './template-routing.module';
import { templateComponent } from './template.component';
import { templateService } from './../../../../services/CRUD/EXPORTER/template.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';
import { ExporterService } from 'src/app/services/negocio/exporter.service';


@NgModule({
   imports: [CommonModule,
             templateRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [templateComponent],
   providers: [
               NgbModal,
               templateService,
               ExporterService
               ]
})
export class templateModule {}