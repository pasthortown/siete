import { UserService } from 'src/app/services/profile/user.service';
import { User } from './../../../models/profile/User';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DinardapService } from './../../../services/negocio/dinardap.service';

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
  CedulaData = '';
  identificationPersonValidated = false;
  consumoCedula = false;
  REGCIVILOK = false;
  rucData = '';
  rucValidated = false;
  consumoRuc = false;
  SRIOK = false;

  constructor(private modalService: NgbModal,
              private toastr: ToastrManager,
              private dinardapDataService: DinardapService,
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
    this.CedulaData = '';
    this.identificationPersonValidated = false;
    this.consumoCedula = false;
    this.REGCIVILOK = false;
    this.rucData = '';
    this.rucValidated = false;
    this.consumoRuc = false;
    this.SRIOK = false;
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
   this.userDataService.delete_account_by_rol(this.account_rucSelected.id, 2).then( r => {
      this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
      this.getAccountRucs();
   }).catch( e => console.log(e) );
  }

  filtrar(filter: String) {
    alert(filter);
  }

  openDialog(content) {
    this.checkIdentification();
    this.checkRuc();
    this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
       if ( response === 'Guardar click' ) {
          if (typeof this.account_rucSelected.id === 'undefined') {
             this.userDataService.create_account_by_rol(this.account_rucSelected, 2).then( r => {
               this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
               this.refresh();
              }).catch( e => { console.log(e); });
          } else {
            this.userDataService.update_account_by_rol(this.account_rucSelected, 2).then( r => {
              this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
              this.refresh();
            }).catch( e => console.log(e) );
          }
       }
    }), ( r => {}));
  }

  checkIdentification() {
    this.account_rucSelected.identification = this.account_rucSelected.identification.replace(/[^\d]/, '');
    if (this.account_rucSelected.identification.length !== 10) {
       this.identificationPersonValidated = false;
       this.consumoCedula = false;
       this.account_rucSelected.name = '';
      return;
    }
    if (this.consumoCedula && this.REGCIVILOK) {
       return;
    }
    this.CedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
    if (!this.consumoCedula) {
       this.identificationPersonValidated = true;
       this.consumoCedula = true;
       this.dinardapDataService.get_cedula(this.account_rucSelected.identification).then( r => {
          const registros = r.return.instituciones.datosPrincipales.registros;
          this.CedulaData = '';
          this.REGCIVILOK = true;
          registros.forEach(element => {
             if (element.campo === 'cedula') {
                if (element.valor === this.account_rucSelected.identification) {
                   this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                   this.identificationPersonValidated = true;
                } else {
                   this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                   this.identificationPersonValidated = false;
                }
             }
             if (this.identificationPersonValidated) {
                if (element.campo === 'nombre') {
                   this.CedulaData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
                   this.account_rucSelected.name = element.valor;
                }
                if (element.campo === 'fechaNacimiento') {
                   this.CedulaData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
                }
                if (element.campo === 'nacionalidad') {
                   this.CedulaData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
                }
             }
          });
       }).catch( e => {
          this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
          this.CedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
          this.REGCIVILOK = false;
          this.consumoCedula = false;
       });
    }
   }

   checkRuc() {
    this.account_rucSelected.ruc = this.account_rucSelected.ruc.replace(/[^\d]/, '');
    if (this.account_rucSelected.ruc.length !== 13) {
       this.rucValidated = false;
       this.consumoRuc = false;
      return;
    }
    if (this.consumoRuc && this.SRIOK) {
       return;
    }
    this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
    if (!this.consumoRuc) {
       this.rucValidated = true;
       this.consumoRuc = true;
       this.dinardapDataService.get_RUC(this.account_rucSelected.ruc).then( r => {
          const registros = r.return.instituciones.datosPrincipales.registros;
          this.rucData = '';
          this.SRIOK = true;
          registros.forEach(element => {
            if (element.campo === 'numeroRuc') {
              if (element.valor === this.account_rucSelected.ruc) {
                 this.toastr.successToastr('El RUC ingresado es correcto.', 'SRI');
                 this.rucValidated = true;
              } else {
                 this.toastr.errorToastr('El RUC ingresado no es correcto.', 'SRI');
                 this.rucValidated = false;
              }
           }
           if (this.rucValidated) {
              if (element.campo === 'razonSocial') {
                 this.rucData += '<strong>Razón Social: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'fechaInicioActividades') {
                 this.rucData += '<strong>Fecha de Inicio de Actividades: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'fechaActualizacion') {
                 this.rucData += '<strong>Fecha de Actualización: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'obligado') {
                 if (element.valor === 'N') {
                    this.rucData += '<strong>Obligado a Llevar Contabilidad: </strong> NO<br/>';
                 } else {
                    this.rucData += '<strong>Obligado a Llevar Contabilidad: </strong> SI<br/>';
                 }
              }
              if (element.campo === 'tipoContribuyente') {
                 this.rucData += '<strong>Tipo de Contribuyente: </strong> ' + element.valor + '<br/>';
              }
           }
          });
       }).catch( e => {
          this.toastr.errorToastr('El RUC ingresado no es correcto.', 'SRI');
          this.rucData = '<div class="alert alert-danger" role="alert">El SRI, no respondió. Vuelva a intentarlo.</div>';
          this.consumoRuc = false;
          this.SRIOK = false;
       });
    }
   }
}
