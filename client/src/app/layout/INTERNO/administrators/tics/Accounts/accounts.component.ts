import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AccountRolAssigment } from 'src/app/models/AUTH/AccountRolAssigment';
import { AccountRol } from 'src/app/models/AUTH/AccountRol';
import { User } from 'src/app/models/profile/User';
import { AccountRolService } from 'src/app/services/CRUD/AUTH/accountrol.service';
import { UserService } from 'src/app/services/profile/user.service';
import { AccountRolAssigmentService } from 'src/app/services/CRUD/AUTH/accountrolassigment.service';
import { Ubication } from 'src/app/models/BASE/Ubication';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';

@Component({
   selector: 'app-accounts',
   templateUrl: './accounts.component.html',
   styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
   account_rol_assigments: AccountRolAssigment[] = [];
   account_rol_assigmentSelected: AccountRolAssigment = new AccountRolAssigment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   account_rols: AccountRol[] = [];
   users: User[] = [];
   ubications: Ubication[] = [];
   provincias: Ubication[] = [];
   cantones: Ubication[] = [];
   parroquias: Ubication[] = [];
   provincia_code_selected: string = '-';
   canton_code_selected: string = '-';
   new_user: User = new User();
   new_user_ubication: number = 0;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private account_rolDataService: AccountRolService,
               private ubicationDataService: UbicationService,
               private userDataService: UserService,
               private account_rol_assigmentDataService: AccountRolAssigmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getAccountRol();
      this.getUser();
      this.getUbications();
   }

   selectAccountRolAssigment(account_rol_assigment: AccountRolAssigment) {
      this.account_rol_assigmentSelected = account_rol_assigment;
   }

   getUbications() {
      this.provincias = [];
      this.cantones = [];
      this.parroquias = [];
      this.provincia_code_selected = '-';
      this.canton_code_selected = '-';
      this.new_user_ubication = 0;
      this.ubicationDataService.get().then( r => {
         this.ubications = r as Ubication[];
         this.ubications.forEach(ubication => {
            if (
               ubication.father_code == '1' ||
               ubication.father_code == '2' ||
               ubication.father_code == '3' ||
               ubication.father_code == '4' ||
               ubication.father_code == '5' ||
               ubication.father_code == '6' ||
               ubication.father_code == '7' ||
               ubication.father_code == '8') {
               this.provincias.push(ubication);
            }
         });
      }).catch( e => { console.log(e); });
   }

   getCantones() {
      this.cantones = [];
      this.parroquias = [];
      this.canton_code_selected = '-';
      this.new_user_ubication = 0;
      this.ubications.forEach(ubication => {
         if (ubication.father_code == this.provincia_code_selected) {
            this.cantones.push(ubication);
         }   
      });
   }

   getParroquias() {
      this.parroquias = [];
      this.new_user_ubication = 0;
      this.ubications.forEach(ubication => {
         if (ubication.father_code == this.canton_code_selected) {
            this.parroquias.push(ubication);
         }   
      });
   }

   getAccountRol() {
      this.account_rols = [];
      this.account_rolDataService.get().then( r => {
         this.account_rols = r as AccountRol[];
      }).catch( e => console.log(e) );
   }

   getUser() {
      this.users = [];
      this.userDataService.get().then( r => {
         this.users = r as User[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getAccountRolAssigments();
   }

   getAccountRolAssigments() {
      this.account_rol_assigments = [];
      this.account_rol_assigmentSelected = new AccountRolAssigment();
      this.account_rol_assigmentSelected.account_rol_id = 0;
      this.account_rol_assigmentSelected.user_id = 0;
      this.account_rol_assigmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.account_rol_assigments = r.data as AccountRolAssigment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newAccountRolAssigment(content) {
      this.account_rol_assigmentSelected = new AccountRolAssigment();
      this.account_rol_assigmentSelected.account_rol_id = 0;
      this.account_rol_assigmentSelected.user_id = 0;
      this.openDialog(content);
   }

   editAccountRolAssigment(content) {
      if (typeof this.account_rol_assigmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteAccountRolAssigment() {
      if (typeof this.account_rol_assigmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.account_rol_assigmentDataService.delete(this.account_rol_assigmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getAccountRolAssigments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.account_rol_assigmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AccountRolAssigments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.account_rol_assigmentDataService.get().then( r => {
         const backupData = r as AccountRolAssigment[];
         let output = 'id;account_rol_id;user_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.account_rol_id + ';' + element.user_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AccountRolAssigments.csv');
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
            this.account_rol_assigmentDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.account_rol_assigmentSelected.id === 'undefined') {
               this.account_rol_assigmentDataService.post(this.account_rol_assigmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getAccountRolAssigments();
               }).catch( e => console.log(e) );
            } else {
               this.account_rol_assigmentDataService.put(this.account_rol_assigmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getAccountRolAssigments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}