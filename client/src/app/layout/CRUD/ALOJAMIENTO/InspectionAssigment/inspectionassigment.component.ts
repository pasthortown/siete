import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { InspectionAssigmentService } from './../../../../services/CRUD/ALOJAMIENTO/inspectionassigment.service';
import { InspectionAssigment } from './../../../../models/ALOJAMIENTO/InspectionAssigment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { Register } from './../../../../models/ALOJAMIENTO/Register';


@Component({
   selector: 'app-inspectionassigment',
   templateUrl: './inspectionassigment.component.html',
   styleUrls: ['./inspectionassigment.component.scss']
})
export class InspectionAssigmentComponent implements OnInit {
   inspection_assigments: InspectionAssigment[] = [];
   inspection_assigmentSelected: InspectionAssigment = new InspectionAssigment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private inspection_assigmentDataService: InspectionAssigmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
   }

   selectInspectionAssigment(inspection_assigment: InspectionAssigment) {
      this.inspection_assigmentSelected = inspection_assigment;
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getInspectionAssigments();
   }

   getInspectionAssigments() {
      this.inspection_assigments = [];
      this.inspection_assigmentSelected = new InspectionAssigment();
      this.inspection_assigmentSelected.register_id = 0;
      this.inspection_assigmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.inspection_assigments = r.data as InspectionAssigment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newInspectionAssigment(content) {
      this.inspection_assigmentSelected = new InspectionAssigment();
      this.inspection_assigmentSelected.register_id = 0;
      this.openDialog(content);
   }

   editInspectionAssigment(content) {
      if (typeof this.inspection_assigmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteInspectionAssigment() {
      if (typeof this.inspection_assigmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.inspection_assigmentDataService.delete(this.inspection_assigmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getInspectionAssigments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.inspection_assigmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_InspectionAssigments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.inspection_assigmentDataService.get().then( r => {
         const backupData = r as InspectionAssigment[];
         let output = 'id;id_user_inspector;date_assigment;date_inspection;register_id\n';
         backupData.forEach(element => {
            output += element.id; + element.id_user_inspector + ';' + element.date_assigment + ';' + element.date_inspection + ';' + element.register_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_InspectionAssigments.csv');
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
            this.inspection_assigmentDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.inspection_assigmentSelected.id === 'undefined') {
               this.inspection_assigmentDataService.post(this.inspection_assigmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getInspectionAssigments();
               }).catch( e => console.log(e) );
            } else {
               this.inspection_assigmentDataService.put(this.inspection_assigmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getInspectionAssigments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}