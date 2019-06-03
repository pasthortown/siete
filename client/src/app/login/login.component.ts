import { ConsultorService } from './../services/negocio/consultor.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfilePictureService } from '../services/profile/profilepicture.service';
import { ProfilePicture } from '../models/profile/ProfilePicture';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: String = '';
  email: String = '';
  busy: Promise<any>;
  esperando: boolean;
  zonales = [];

  constructor(private consultorDataService: ConsultorService, private router: Router, private modalService: NgbModal, private authDataServise: AuthService, private profilePictureDataService: ProfilePictureService) {}

  ngOnInit() {
    this.email = '';
    this.password = '';
    this.esperando = false;
    this.getZonales();
  }

  getZonales() {
    this.consultorDataService.get_zonales().then( r => {
      this.zonales = r;
    }).catch( e => { console.log(e); });
  }

  login() {
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.authDataServise.login(this.email, this.password).then( r => {
        this.esperando = false;
        sessionStorage.setItem('api_token', r.token);
        sessionStorage.setItem('roles', JSON.stringify(r.roles));
        sessionStorage.setItem('isLoggedin', 'true');
        const userData = { id: r.id, name: r.name };
        sessionStorage.setItem('user', JSON.stringify(userData));
        this.router.navigate(['/main']);
      }).catch( e => {
        this.esperando = false;
        Swal.fire({
          title: 'Iniciar Sesión',
          text: 'Credenciales Incorrectos',
          type: 'error',
        })
        .then( response => {
          sessionStorage.clear();
          this.router.navigate(['/login']);
        });
      });
    }
  }

  password_recovery() {
    if ( !this.esperando ) {
      this.esperando = true;
      this.busy = this.authDataServise.password_recovery_request(this.email).then( r => {
        this.esperando = false;
        if ( r === 'Solicitud Procesada. Enviaremos la respuesta a tu correo electrónico en un momento.') {
          Swal.fire({
            title: 'Contraseña Recuperada',
            text: 'Para completar el proceso, revisa tu correo',
            type: 'success',
          })
          .then( response => {
            this.password = '';
            this.email = '';
          });
        } else {
          Swal.fire({
            title: 'Contraseña Recuperada',
            text: 'La dirección de correo proporcionada, no corresponde a cuenta alguna',
            type: 'error',
          })
          .then( response => {
            this.password = '';
            this.email = '';
          });
        }
      }).catch( e => {
        this.esperando = false;
        console.log(e);
      });
    }
  }

  openDialog(content) {
    this.modalService.open(content, { centered: true }).result.then(( response => {
       
    }), ( r => {}));
 }
}
