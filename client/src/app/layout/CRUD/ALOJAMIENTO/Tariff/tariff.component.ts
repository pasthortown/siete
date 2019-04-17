import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { TariffService } from './../../../../services/CRUD/ALOJAMIENTO/tariff.service';
import { Tariff } from './../../../../models/ALOJAMIENTO/Tariff';
import { TariffTypeService } from './../../../../services/CRUD/ALOJAMIENTO/tarifftype.service';
import { TariffType } from './../../../../models/ALOJAMIENTO/TariffType';


@Component({
   selector: 'app-tariff',
   templateUrl: './tariff.component.html',
   styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {
   tariffs: Tariff[] = [];
   tariffSelected: Tariff = new Tariff();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   tariff_types: TariffType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private tariff_typeDataService: TariffTypeService,
               private tariffDataService: TariffService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getTariffType();
   }

   selectTariff(tariff: Tariff) {
      this.tariffSelected = tariff;
   }

   getTariffType() {
      this.tariff_types = [];
      this.tariff_typeDataService.get().then( r => {
         this.tariff_types = r as TariffType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getTariffs();
   }

   getTariffs() {
      this.tariffs = [];
      this.tariffSelected = new Tariff();
      this.tariffSelected.tariff_type_id = 0;
      this.tariffDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.tariffs = r.data as Tariff[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newTariff(content) {
      this.tariffSelected = new Tariff();
      this.tariffSelected.tariff_type_id = 0;
      this.openDialog(content);
   }

   editTariff(content) {
      if (typeof this.tariffSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteTariff() {
      if (typeof this.tariffSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.tariffDataService.delete(this.tariffSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getTariffs();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.tariffDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Tariffs.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.tariffDataService.get().then( r => {
         const backupData = r as Tariff[];
         let output = 'id;price;tariff_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.price + ';' + element.tariff_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Tariffs.csv');
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
            this.tariffDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.tariffSelected.id === 'undefined') {
               this.tariffDataService.post(this.tariffSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getTariffs();
               }).catch( e => console.log(e) );
            } else {
               this.tariffDataService.put(this.tariffSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getTariffs();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}