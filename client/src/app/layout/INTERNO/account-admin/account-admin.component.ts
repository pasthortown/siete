import { UserService } from 'src/app/services/profile/user.service';
import { User } from './../../../models/profile/User';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-account-admin',
  templateUrl: './account-admin.component.html',
  styleUrls: ['./account-admin.component.scss']
})
export class AccountAdminComponent implements OnInit {

  account_rucs: User[] = [];
  account_rucSelected: User = new User();
  currentPage = 1;
  lastPage = 1;
  recordsByPage = 5;
  ruc = '';

  constructor(private modalService: NgbModal,
              private toastr: ToastrManager,
              private userDataService: UserService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.account_rucSelected = new User();
    this.goToPage(this.currentPage);
  }

  goToPage(page: number) {
    if ( page < 1 || page > this.lastPage ) {
       this.toastr.errorToastr('La página solicitada no existe.', 'Error');
       return;
    }
    this.currentPage = page;
    this.getAccountRucs();
  }

  getAccountRucs() {
    let filtro = this.ruc;
    if (this.ruc === '') {
      filtro = 'all';
    }
    this.userDataService.get_filtered_by_rol(this.recordsByPage, this.currentPage, '2', filtro).then( r => {
      this.account_rucs = r.data as User[];
      this.lastPage = r.last_page;
    }).catch( e => { console.log(e); });
  }

  selectAccountRuc(accountRuc) {
    this.account_rucSelected = accountRuc;
  }

  newAccountRuc(content) {
    this.account_rucSelected = new User();
    this.openDialog(content);
  }

  editAccountRuc(content) {
    if (typeof this.account_rucSelected.id === 'undefined') {
      this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
      return;
    }
    this.openDialog(content);
  }
  
  deleteAccountRuc() {
    if (typeof this.account_rucSelected.id === 'undefined') {
      this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
      return;
   }
   this.userDataService.delete_account_by_rol(this.account_rucSelected.id).then( r => {
      this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
      this.getAccountRucs();
   }).catch( e => console.log(e) );
  }

  filtrar(filter: String) {
    alert(filter);
  }

  openDialog(content) {
    this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
       if ( response === 'Guardar click' ) {
          if (typeof this.account_rucSelected.id === 'undefined') {
             this.userDataService.create_account_by_rol(this.account_rucSelected).then( r => {
               this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
               this.refresh();
              }).catch( e => { console.log(e); });
          } else {
            this.userDataService.update_account_by_rol(this.account_rucSelected).then( r => {
              this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
              this.refresh();
            }).catch( e => console.log(e) );
          }
       }
    }), ( r => {}));
  }
}
