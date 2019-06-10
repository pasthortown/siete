import { Router } from '@angular/router';
import { UserService } from './../services/profile/user.service';
import { Component, OnInit } from '@angular/core';
import { ProfilePictureService } from '../services/profile/profilepicture.service';
import { ProfilePicture } from '../models/profile/ProfilePicture';
import { User } from '../models/profile/User';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;
    half = false;
    two = false;
    three = false;
    bye = false;
    constructor(private toastr: ToastrManager, public profilePictureDataService: ProfilePictureService, private userDataService: UserService, private router: Router) {}

    ngOnInit() {
        this.half = false;
        this.two = false;
        this.three = false;
        this.bye = false;
        this.getProfilePicture();
        this.getUserInfo();
        this.checkSessionTime();
    }

    getProfilePicture() {
        this.profilePictureDataService.get().then( r2 => {
            if ( typeof r2 !== 'undefined') {
                if ( typeof r2.error === 'undefined' ) {
                    sessionStorage.setItem('profilePicture', JSON.stringify(r2 as ProfilePicture));
                }
            }
        }).catch( e => {
        });
    }

    checkSessionTime() {
        const session_time = JSON.parse(sessionStorage.getItem('session_time'));
        const endTime = new Date(session_time.endTime);
        const now = new Date();
        const oneHalf = new Date(session_time.startTime);
        const twoHalf = new Date(session_time.startTime);
        const threeHalf = new Date(session_time.startTime);
        oneHalf.setMinutes(oneHalf.getMinutes() + 30);
        twoHalf.setHours(twoHalf.getHours() + 1);
        threeHalf.setMinutes(threeHalf.getMinutes() + 30);
        threeHalf.setHours(threeHalf.getHours() + 1);
        const diffDates = endTime.getTime() - now.getTime();
        const minutosRestantes = Math.round(((diffDates % 86400000) % 3600000) / 60000);
        const horasRestantes = Math.floor((diffDates % 86400000) / 3600000);

        if (now >= endTime && !this.bye) {
            this.toastr.errorToastr('Su sesión a caducado', 'Sesión');
            sessionStorage.clear();
            this.half = true;
            this.two = true;
            this.three = true;
            this.bye = true;
            this.router.navigate(['/login']);
        } else {
            if (now >= threeHalf && !this.three) {
                this.toastr.warningToastr('Su sesión está próxima a caducar. Tiempo restante: ' + horasRestantes + ' horas ' + minutosRestantes + ' minutos', 'Sesión');
                this.three = true;
                this.half = true;
                this.two = true;
            } else {
                if (now >= twoHalf && !this.two) {
                    this.toastr.infoToastr('Tiempo restante: ' + horasRestantes + ' horas ' + minutosRestantes + ' minutos', 'Sesión');
                    this.two = true;
                    this.half = true;
                } else {
                    if (now >= oneHalf && !this.half) {
                        this.toastr.infoToastr('Tiempo restante: ' + horasRestantes + ' horas ' + minutosRestantes + ' minutos', 'Sesión');
                        this.half = true;
                    }
                }
            }
        }
        setTimeout(() => {
            this.checkSessionTime();
        }, 5000);
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    getUserInfo() {
        const userData = JSON.parse(sessionStorage.getItem('user'));
        this.userDataService.get(userData.id).then( r => {
          const user = r as User;
          let redirigirProfile = false;
          if(user.main_phone_number == '' || typeof user.main_phone_number == 'undefined') {
            redirigirProfile = true;
          }
          if (redirigirProfile) {
            this.router.navigate(['/profile']);
          }
        }).catch( e => { console.log(e); });
    }
}
