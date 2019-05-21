import { EstablishmentOnRuc } from './../models/negocio/EstablishmentOnRuc';
import { User } from './../models/profile/User';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DinardapService } from '../services/negocio/dinardap.service';
import { Ruc } from '../models/BASE/Ruc';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  ruc: Ruc = new Ruc();
  busy: Promise<any>;
  esperando: Boolean;
  identificationValidated = false;
  consumoCedula = false;
  cedulaNombre = '';
  cedulaFechaNacimiento = 'porValidar';
  fechaNacimiento = '';
  identidadConfirmada = false;
  rucValidated = false;
  consumoRuc = false;
  rucData = '';
  emailContactValidated = false;
  CedulaData = '';
  REGCIVILOK = false;
  SRIOK = false;

  constructor(private router: Router,
    private authDataServise: AuthService,
    private toastr: ToastrManager,
    private dinardapDataService: DinardapService) {}

  ngOnInit() {
    this.user = new User();
    this.ruc = new Ruc();
    this.esperando = false;
  }

  registrar() {
     if(this.emailContactValidated && this.rucValidated && this.identidadConfirmada && !this.esperando){
      this.esperando = true;
      this.user.ruc = this.ruc.number;
      this.ruc.contact_user = this.user;
      this.busy = this.authDataServise.register(this.user).then( r => {
         this.esperando = false;
         if (r == 0 ) {
            Swal.fire({
               title: 'La información proporcionada no es correcta.',
               text: 'No es posible crear una nueva cuenta, con la información proporcionada.',
               type: 'error',
             })
             .then( response => {
               this.router.navigate(['/login']);
             });
         }
         Swal.fire({
           title: 'Te damos la bienvenida',
           text: 'Enviamos tu contraseña a tu correo',
           type: 'success',
         })
         .then( response => {
           this.user = new User();
           this.ruc = new Ruc();
           this.router.navigate(['/login']);
         });
       }).catch( e => {
         this.esperando = false;
         console.log(e);
       });
     } else {
      Swal.fire({
         title: 'Datos no confirmados',
         text: 'El registro no se pudo completar, los datos ingresados no se pudieron confirmar.',
         type: 'error',
       });
     }
  }
  
  checkCedula() {
    this.user.identification = this.user.identification.replace(/[^\d]/, '');
    if (this.user.identification.length !== 10) {
       this.identificationValidated = false;
       this.consumoCedula = false;
       this.fechaNacimiento = '';
       this.identidadConfirmada = false;
       return;
    }
    if (this.consumoCedula && this.REGCIVILOK) {
       return;
    }
    this.CedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
    if (!this.consumoCedula) {
       this.identificationValidated = true;
       this.consumoCedula = true;
       this.dinardapDataService.get_cedula(this.user.identification).then( r => {
          const registros = r.return.instituciones.datosPrincipales.registros;
          this.CedulaData = '';
          this.REGCIVILOK = true;
          registros.forEach(element => {
             if (element.campo === 'cedula') {
                if (element.valor === this.user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationValidated = true;
                } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationValidated = false;
                }
             }
             if (this.identificationValidated) {
                if (element.campo === 'nombre') {
                   this.user.name= element.valor;
                }
                if (element.campo === 'fechaNacimiento') {
                   this.cedulaFechaNacimiento = element.valor;
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
    this.ruc.number = this.ruc.number.replace(/[^\d]/, '');
    if (this.ruc.number.length !== 13) {
      this.rucValidated = false;
      this.consumoRuc = false;
      return;
    }
    if (this.consumoRuc && this.SRIOK) {
       return;
    }
    this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
    if (!this.consumoRuc && this.identificationValidated) {
      this.rucValidated = true;
      this.consumoRuc = true;
      this.dinardapDataService.get_RUC(this.ruc.number).then( r => {
         const registros = r.return.instituciones.datosPrincipales.registros;
         this.rucData = '';
         this.SRIOK = true;
         registros.forEach(element => {
            if (element.campo === 'numeroRuc') {
               if (element.valor === this.ruc.number) {
                  this.toastr.successToastr('El RUC ingresado es correcto.', 'SRI');
                  this.rucValidated = true;
               } else {
                  this.toastr.errorToastr('El RUC ingresado no es correcto.', 'SRI');
                  this.rucValidated = false;
               }
            }
            if (this.rucValidated) {
               if (element.campo === 'razonSocial') {
                  this.rucData = '<strong>Razón Social: </strong> ' + element.valor;
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

  checkEmail(): Boolean {
    const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email.toString());
    this.emailContactValidated = isOk;
    return this.emailContactValidated;
  }

   confirmarIdentidad() {
     if (this.fechaNacimiento == '' || this.cedulaFechaNacimiento == '') {
       return false;
     }
     if( this.cedulaFechaNacimiento == this.fechaNacimiento) {
       this.identidadConfirmada = true;
       return true;
     }
     this.identidadConfirmada = false;
     this.cedulaNombre = '';
     return false;
   }
}
