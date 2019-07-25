import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterService } from './../../../../services/CRUD/CATASTRO/register.service';
import { Register } from './../../../../models/CATASTRO/Register';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registers: Register[] = [];
   registerSelected: Register = new Register();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectRegister(register: Register) {
      this.registerSelected = register;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisters();
   }

   georeferenceEvent(event) {
      this.registerSelected.georeference_latitude = event.coords.lat;
      this.registerSelected.georeference_longitude = event.coords.lng;
   }

   getRegisters() {
      this.registers = [];
      this.registerSelected = new Register();
      this.registerDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.registers = r.data as Register[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegister(content) {
      this.registerSelected = new Register();
      this.openDialog(content);
   }

   editRegister(content) {
      if (typeof this.registerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegister() {
      if (typeof this.registerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.registerDataService.delete(this.registerSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisters();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.registerDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Registers.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.registerDataService.get().then( r => {
         const backupData = r as Register[];
         let output = 'id;ruc;comercial_name;register_code;as_turistic_date;activity;category;classification;legal_representant_name;legal_representant_identification;establishment_property_type;organization_type;ubication_main;ubication_sencond;ubication_third;address;main_phone_number;secondary_phone_number;email;web;system_source;georeference_latitude;georeference_longitude;establishment_ruc_code;max_capacity;max_areas;total_male;total_female;ruc_state\n';
         backupData.forEach(element => {
            output += element.id; + element.ruc + ';' + element.comercial_name + ';' + element.register_code + ';' + element.as_turistic_date + ';' + element.activity + ';' + element.category + ';' + element.classification + ';' + element.legal_representant_name + ';' + element.legal_representant_identification + ';' + element.establishment_property_type + ';' + element.organization_type + ';' + element.ubication_main + ';' + element.ubication_sencond + ';' + element.ubication_third + ';' + element.address + ';' + element.main_phone_number + ';' + element.secondary_phone_number + ';' + element.email + ';' + element.web + ';' + element.system_source + ';' + element.georeference_latitude + ';' + element.georeference_longitude + ';' + element.establishment_ruc_code + ';' + element.max_capacity + ';' + element.max_areas + ';' + element.total_male + ';' + element.total_female + ';' + element.ruc_state + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Registers.csv');
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
            this.registerDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.registerSelected.id === 'undefined') {
               this.registerDataService.post(this.registerSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisters();
               }).catch( e => console.log(e) );
            } else {
               this.registerDataService.put(this.registerSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisters();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}