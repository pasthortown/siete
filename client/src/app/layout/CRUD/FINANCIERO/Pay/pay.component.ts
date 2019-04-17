import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayService } from './../../../../services/CRUD/FINANCIERO/pay.service';
import { Pay } from './../../../../models/FINANCIERO/Pay';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { Declaration } from './../../../../models/FINANCIERO/Declaration';


@Component({
   selector: 'app-pay',
   templateUrl: './pay.component.html',
   styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
   pays: Pay[] = [];
   paySelected: Pay = new Pay();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declarations: Declaration[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declarationDataService: DeclarationService,
               private payDataService: PayService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclaration();
   }

   selectPay(pay: Pay) {
      this.paySelected = pay;
   }

   getDeclaration() {
      this.declarations = [];
      this.declarationDataService.get().then( r => {
         this.declarations = r as Declaration[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPays();
   }

   getPays() {
      this.pays = [];
      this.paySelected = new Pay();
      this.paySelected.declaration_id = 0;
      this.payDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.pays = r.data as Pay[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPay(content) {
      this.paySelected = new Pay();
      this.paySelected.declaration_id = 0;
      this.openDialog(content);
   }

   editPay(content) {
      if (typeof this.paySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePay() {
      if (typeof this.paySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.payDataService.delete(this.paySelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPays();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.payDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Pays.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.payDataService.get().then( r => {
         const backupData = r as Pay[];
         let output = 'id;amount_payed;amount_to_pay;pay_date;annotation;declaration_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.amount_payed + ';' + element.amount_to_pay + ';' + element.pay_date + ';' + element.annotation + ';' + element.declaration_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Pays.csv');
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
            this.payDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.paySelected.id === 'undefined') {
               this.payDataService.post(this.paySelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPays();
               }).catch( e => console.log(e) );
            } else {
               this.payDataService.put(this.paySelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPays();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}