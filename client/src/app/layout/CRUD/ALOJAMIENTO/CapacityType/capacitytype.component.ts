import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { CapacityTypeService } from './../../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { CapacityType } from './../../../../models/ALOJAMIENTO/CapacityType';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { RegisterType } from './../../../../models/ALOJAMIENTO/RegisterType';


@Component({
   selector: 'app-capacitytype',
   templateUrl: './capacitytype.component.html',
   styleUrls: ['./capacitytype.component.scss']
})
export class CapacityTypeComponent implements OnInit {
   capacity_types: CapacityType[] = [];
   capacity_typeSelected: CapacityType = new CapacityType();
   register_type_categories: RegisterType[] = [];
   all_register_types: RegisterType[] = [];
   toShow_register_types: any[] = [];
   register_type_category_selected: String = '-';

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   register_types: RegisterType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private register_typeDataService: RegisterTypeService,
               private capacity_typeDataService: CapacityTypeService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegisterTypeCategories();
      this.getAllRegisterTypes();
   }

   getAllRegisterTypes() {
      this.all_register_types = [];
      this.register_typeDataService.get().then( r => {
         this.all_register_types = r as RegisterType[];
         this.toShow_register_types = [];
         this.all_register_types.forEach(element => {
            if(element.father_code == '-') {
               this.all_register_types.forEach(elementChild => {
                  if(elementChild.father_code == element.code) {
                     this.toShow_register_types.push({id: elementChild.id, toShow: element.name + ' - ' + elementChild.name});
                  }
               });
            }
         });
      }).catch( e => {console.log(e);});
   }

   getRegisterTypeCategoryByChildId(id: number) {
      this.all_register_types.forEach(element => {
         let fatherCode: String = '';
         if(element.id == id) {
            fatherCode = element.father_code;
         }
         this.all_register_types.forEach(element1 => {
            if(element1.code == fatherCode) {
               this.register_type_category_selected = element1.code;
               this.getRegisterType();
            }
         });
      });
   }
   
   selectCapacityType(capacity_type: CapacityType) {
      this.capacity_typeSelected = capacity_type;
   }

   getRegisterTypeCategories() {
      this.register_type_categories = [];
      this.register_typeDataService.get_filtered('-').then( r => {
         this.register_type_categories = r as RegisterType[];
      }).catch( e => console.log(e) );
   }
   
   getRegisterType() {
      this.register_types = [];
      this.register_typeDataService.get().then( r => {
         this.register_types = r as RegisterType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getCapacityTypes();
   }

   getCapacityTypes() {
      this.capacity_types = [];
      this.capacity_typeSelected = new CapacityType();
      this.capacity_typeSelected.register_type_id = 0;
      this.register_type_category_selected = '-';
      this.capacity_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.capacity_types = r.data as CapacityType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newCapacityType(content) {
      this.capacity_typeSelected = new CapacityType();
      this.capacity_typeSelected.register_type_id = 0;
      this.register_type_category_selected = '-';
      this.openDialog(content);
   }

   editCapacityType(content) {
      if (typeof this.capacity_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteCapacityType() {
      if (typeof this.capacity_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.capacity_typeDataService.delete(this.capacity_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getCapacityTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.capacity_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_CapacityTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.capacity_typeDataService.get().then( r => {
         const backupData = r as CapacityType[];
         let output = 'id;name;description;register_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + ';' + element.register_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_CapacityTypes.csv');
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
            this.capacity_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.capacity_typeSelected.id === 'undefined') {
               this.capacity_typeDataService.post(this.capacity_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getCapacityTypes();
               }).catch( e => console.log(e) );
            } else {
               this.capacity_typeDataService.put(this.capacity_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getCapacityTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}