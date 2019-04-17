import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { Declaration } from './../../../../models/FINANCIERO/Declaration';
import { DeclarationItemService } from './../../../../services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItem } from './../../../../models/FINANCIERO/DeclarationItem';

import { ApprovalStateService } from './../../../../services/CRUD/FINANCIERO/approvalstate.service';
import { ApprovalState } from './../../../../models/FINANCIERO/ApprovalState';


@Component({
   selector: 'app-declaration',
   templateUrl: './declaration.component.html',
   styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
   declarations: Declaration[] = [];
   declarationSelected: Declaration = new Declaration();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declaration_items: DeclarationItem[] = [];
   declaration_items_declarationSelectedId: number;
   approval_states: ApprovalState[] = [];
   approval_states_declarationSelectedId: number;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declaration_itemDataService: DeclarationItemService,
               private approval_stateDataService: ApprovalStateService,
               private declarationDataService: DeclarationService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclarationItem();
      this.getApprovalState();
   }

   selectDeclaration(declaration: Declaration) {
      this.declarationSelected = declaration;
   }

   getDeclarationItem() {
      this.declaration_items = [];
      this.declaration_itemDataService.get().then( r => {
         this.declaration_items = r as DeclarationItem[];
      }).catch( e => console.log(e) );
   }

   getDeclarationItemsOnDeclaration() {
      this.declarationSelected.declaration_items_on_declaration = [];
      this.declarationDataService.get(this.declarationSelected.id).then( r => {
         this.declarationSelected.declaration_items_on_declaration = r.attach[0].declaration_items_on_declaration as DeclarationItem[];
      }).catch( e => console.log(e) );
   }

   getApprovalState() {
      this.approval_states = [];
      this.approval_stateDataService.get().then( r => {
         this.approval_states = r as ApprovalState[];
      }).catch( e => console.log(e) );
   }

   getApprovalStatesOnDeclaration() {
      this.declarationSelected.approval_states_on_declaration = [];
      this.declarationDataService.get(this.declarationSelected.id).then( r => {
         this.declarationSelected.approval_states_on_declaration = r.attach[0].approval_states_on_declaration as ApprovalState[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDeclarations();
   }

   getDeclarations() {
      this.declarations = [];
      this.declarationSelected = new Declaration();
      this.declaration_items_declarationSelectedId = 0;
      this.approval_states_declarationSelectedId = 0;
      this.declarationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.declarations = r.data as Declaration[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDeclaration(content) {
      this.declarationSelected = new Declaration();
      this.declaration_items_declarationSelectedId = 0;
      this.approval_states_declarationSelectedId = 0;
      this.openDialog(content);
   }

   editDeclaration(content) {
      if ( typeof this.declarationSelected.declaration_items_on_declaration === 'undefined' ) {
         this.declarationSelected.declaration_items_on_declaration = [];
      }
      if ( typeof this.declarationSelected.approval_states_on_declaration === 'undefined' ) {
         this.declarationSelected.approval_states_on_declaration = [];
      }
      if (typeof this.declarationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.getDeclarationItemsOnDeclaration();
      this.declaration_items_declarationSelectedId = 0;
      this.getApprovalStatesOnDeclaration();
      this.approval_states_declarationSelectedId = 0;
      this.openDialog(content);
   }

   deleteDeclaration() {
      if (typeof this.declarationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.declarationDataService.delete(this.declarationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDeclarations();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.declarationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Declarations.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.declarationDataService.get().then( r => {
         const backupData = r as Declaration[];
         let output = 'id;establishment_id;declaration_date;year;max_date_to_pay\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.establishment_id + ';' + element.declaration_date + ';' + element.year + ';' + element.max_date_to_pay + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Declarations.csv');
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
            this.declarationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   selectDeclarationItem(declaration_item: DeclarationItem) {
      this.declaration_items_declarationSelectedId = declaration_item.id;
   }

   addDeclarationItem() {
      if (this.declaration_items_declarationSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.declaration_items.forEach(declaration_item => {
         if (declaration_item.id == this.declaration_items_declarationSelectedId) {
            let existe = false;
            this.declarationSelected.declaration_items_on_declaration.forEach(element => {
               if (element.id == declaration_item.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.declarationSelected.declaration_items_on_declaration.push(declaration_item);
               this.declaration_items_declarationSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeDeclarationItem() {
      if (this.declaration_items_declarationSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newDeclarationItems: DeclarationItem[] = [];
      let eliminado = false;
      this.declarationSelected.declaration_items_on_declaration.forEach(declaration_item => {
         if (declaration_item.id !== this.declaration_items_declarationSelectedId) {
            newDeclarationItems.push(declaration_item);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.declarationSelected.declaration_items_on_declaration = newDeclarationItems;
      this.declaration_items_declarationSelectedId = 0;
   }

   selectApprovalState(approval_state: ApprovalState) {
      this.approval_states_declarationSelectedId = approval_state.id;
   }

   addApprovalState() {
      if (this.approval_states_declarationSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.approval_states.forEach(approval_state => {
         if (approval_state.id == this.approval_states_declarationSelectedId) {
            let existe = false;
            this.declarationSelected.approval_states_on_declaration.forEach(element => {
               if (element.id == approval_state.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.declarationSelected.approval_states_on_declaration.push(approval_state);
               this.approval_states_declarationSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeApprovalState() {
      if (this.approval_states_declarationSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newApprovalStates: ApprovalState[] = [];
      let eliminado = false;
      this.declarationSelected.approval_states_on_declaration.forEach(approval_state => {
         if (approval_state.id !== this.approval_states_declarationSelectedId) {
            newApprovalStates.push(approval_state);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.declarationSelected.approval_states_on_declaration = newApprovalStates;
      this.approval_states_declarationSelectedId = 0;
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.declarationSelected.id === 'undefined') {
               this.declarationDataService.post(this.declarationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDeclarations();
               }).catch( e => console.log(e) );
            } else {
               this.declarationDataService.put(this.declarationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDeclarations();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}