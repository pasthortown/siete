import { Router } from '@angular/router';
import { UserService } from './../services/profile/user.service';
import { Component, OnInit } from '@angular/core';
import { ProfilePictureService } from '../services/profile/profilepicture.service';
import { ProfilePicture } from '../models/profile/ProfilePicture';
import { User } from '../models/profile/User';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;
    
    constructor(public profilePictureDataService: ProfilePictureService, private userDataService: UserService, private router: Router) {}

    ngOnInit() {
        this.getProfilePicture();
        this.getUserInfo();
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
