import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { InspectorReportService } from './../../../../services/CRUD/ALOJAMIENTO/inspectorreport.service';
import { InspectorReport } from './../../../../models/ALOJAMIENTO/InspectorReport';
import { InspectionAssigmentService } from './../../../../services/CRUD/ALOJAMIENTO/inspectionassigment.service';
import { InspectionAssigment } from './../../../../models/ALOJAMIENTO/InspectionAssigment';


@Component({
   selector: 'app-inspectorreport',
   templateUrl: './inspectorreport.component.html',
   styleUrls: ['./inspectorreport.component.scss']
})
export class InspectorReportComponent implements OnInit {
   inspector_reports: InspectorReport[] = [];
   inspector_reportSelected: InspectorReport = new InspectorReport();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   inspection_assigments: InspectionAssigment[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private inspection_assigmentDataService: InspectionAssigmentService,
               private inspector_reportDataService: InspectorReportService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getInspectionAssigment();
   }

   selectInspectorReport(inspector_report: InspectorReport) {
      this.inspector_reportSelected = inspector_report;
   }

   getInspectionAssigment() {
      this.inspection_assigments = [];
      this.inspection_assigmentDataService.get().then( r => {
         this.inspection_assigments = r as InspectionAssigment[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getInspectorReports();
   }

   getInspectorReports() {
      this.inspector_reports = [];
      this.inspector_reportSelected = new InspectorReport();
      this.inspector_reportSelected.inspection_assigment_id = 0;
      this.inspector_reportDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.inspector_reports = r.data as InspectorReport[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newInspectorReport(content) {
      this.inspector_reportSelected = new InspectorReport();
      this.inspector_reportSelected.inspection_assigment_id = 0;
      this.openDialog(content);
   }

   editInspectorReport(content) {
      if (typeof this.inspector_reportSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteInspectorReport() {
      if (typeof this.inspector_reportSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.inspector_reportDataService.delete(this.inspector_reportSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getInspectorReports();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.inspector_reportDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_InspectorReports.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.inspector_reportDataService.get().then( r => {
         const backupData = r as InspectorReport[];
         let output = 'id;body;params;inspection_assigment_id\n';
         backupData.forEach(element => {
            output += element.id; + element.body + ';' + element.params + ';' + element.inspection_assigment_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_InspectorReports.csv');
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
            this.inspector_reportDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.inspector_reportSelected.id === 'undefined') {
               this.inspector_reportDataService.post(this.inspector_reportSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getInspectorReports();
               }).catch( e => console.log(e) );
            } else {
               this.inspector_reportDataService.put(this.inspector_reportSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getInspectorReports();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}