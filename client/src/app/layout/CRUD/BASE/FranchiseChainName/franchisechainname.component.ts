import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { FranchiseChainNameService } from './../../../../services/CRUD/BASE/franchisechainname.service';
import { FranchiseChainName } from './../../../../models/BASE/FranchiseChainName';

@Component({
   selector: 'app-franchisechainname',
   templateUrl: './franchisechainname.component.html',
   styleUrls: ['./franchisechainname.component.scss']
})
export class FranchiseChainNameComponent implements OnInit {
   franchise_chain_names: FranchiseChainName[] = [];
   franchise_chain_nameSelected: FranchiseChainName = new FranchiseChainName();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private franchise_chain_nameDataService: FranchiseChainNameService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectFranchiseChainName(franchise_chain_name: FranchiseChainName) {
      this.franchise_chain_nameSelected = franchise_chain_name;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getFranchiseChainNames();
   }

   getFranchiseChainNames() {
      this.franchise_chain_names = [];
      this.franchise_chain_nameSelected = new FranchiseChainName();
      this.franchise_chain_nameDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.franchise_chain_names = r.data as FranchiseChainName[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newFranchiseChainName(content) {
      this.franchise_chain_nameSelected = new FranchiseChainName();
      this.openDialog(content);
   }

   editFranchiseChainName(content) {
      if (typeof this.franchise_chain_nameSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteFranchiseChainName() {
      if (typeof this.franchise_chain_nameSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.franchise_chain_nameDataService.delete(this.franchise_chain_nameSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getFranchiseChainNames();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.franchise_chain_nameDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_FranchiseChainNames.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.franchise_chain_nameDataService.get().then( r => {
         const backupData = r as FranchiseChainName[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_FranchiseChainNames.csv');
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
            this.franchise_chain_nameDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.franchise_chain_nameSelected.id === 'undefined') {
               this.franchise_chain_nameDataService.post(this.franchise_chain_nameSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getFranchiseChainNames();
               }).catch( e => console.log(e) );
            } else {
               this.franchise_chain_nameDataService.put(this.franchise_chain_nameSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getFranchiseChainNames();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}