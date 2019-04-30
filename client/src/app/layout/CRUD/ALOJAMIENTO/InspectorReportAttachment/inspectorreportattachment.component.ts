import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { InspectorReportAttachmentService } from './../../../../services/CRUD/ALOJAMIENTO/inspectorreportattachment.service';
import { InspectorReportAttachment } from './../../../../models/ALOJAMIENTO/InspectorReportAttachment';
import { InspectorReportService } from './../../../../services/CRUD/ALOJAMIENTO/inspectorreport.service';
import { InspectorReport } from './../../../../models/ALOJAMIENTO/InspectorReport';


@Component({
   selector: 'app-inspectorreportattachment',
   templateUrl: './inspectorreportattachment.component.html',
   styleUrls: ['./inspectorreportattachment.component.scss']
})
export class InspectorReportAttachmentComponent implements OnInit {
   inspector_report_attachments: InspectorReportAttachment[] = [];
   inspector_report_attachmentSelected: InspectorReportAttachment = new InspectorReportAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   inspector_reports: InspectorReport[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private inspector_reportDataService: InspectorReportService,
               private inspector_report_attachmentDataService: InspectorReportAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getInspectorReport();
   }

   CodeFileInspectorReportAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.inspector_report_attachmentSelected.inspector_report_attachment_file_name = file.name;
            this.inspector_report_attachmentSelected.inspector_report_attachment_file_type = file.type;
            this.inspector_report_attachmentSelected.inspector_report_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectInspectorReportAttachment(inspector_report_attachment: InspectorReportAttachment) {
      this.inspector_report_attachmentSelected = inspector_report_attachment;
   }

   getInspectorReport() {
      this.inspector_reports = [];
      this.inspector_reportDataService.get().then( r => {
         this.inspector_reports = r as InspectorReport[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getInspectorReportAttachments();
   }

   getInspectorReportAttachments() {
      this.inspector_report_attachments = [];
      this.inspector_report_attachmentSelected = new InspectorReportAttachment();
      this.inspector_report_attachmentSelected.inspector_report_id = 0;
      this.inspector_report_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.inspector_report_attachments = r.data as InspectorReportAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newInspectorReportAttachment(content) {
      this.inspector_report_attachmentSelected = new InspectorReportAttachment();
      this.inspector_report_attachmentSelected.inspector_report_id = 0;
      this.openDialog(content);
   }

   editInspectorReportAttachment(content) {
      if (typeof this.inspector_report_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteInspectorReportAttachment() {
      if (typeof this.inspector_report_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.inspector_report_attachmentDataService.delete(this.inspector_report_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getInspectorReportAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.inspector_report_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_InspectorReportAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.inspector_report_attachmentDataService.get().then( r => {
         const backupData = r as InspectorReportAttachment[];
         let output = 'id;inspector_report_attachment_file_type;inspector_report_attachment_file_name;inspector_report_attachment_file;inspector_report_id\n';
         backupData.forEach(element => {
            output += element.id; + element.inspector_report_attachment_file_type + ';' + element.inspector_report_attachment_file_name + ';' + element.inspector_report_attachment_file + ';' + element.inspector_report_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_InspectorReportAttachments.csv');
      }).catch( e => console.log(e) );
   }

   decodeUploadFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            const fileBytes = reader.result.toString().split(',')[1];
            const newData = JSON.parse(decodeURIComponent(escape(atob(fileBytes)))) as any[];
            this.inspector_report_attachmentDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   downloadFile(file: string, type: string, name: string) {
      const byteCharacters = atob(file);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: type});
      saveAs(blob, name);
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.inspector_report_attachmentSelected.id === 'undefined') {
               this.inspector_report_attachmentDataService.post(this.inspector_report_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getInspectorReportAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.inspector_report_attachmentDataService.put(this.inspector_report_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getInspectorReportAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}