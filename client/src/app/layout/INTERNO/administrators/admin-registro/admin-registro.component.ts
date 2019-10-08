import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AccountRolAssigment } from 'src/app/models/AUTH/AccountRolAssigment';
import { AccountRol } from 'src/app/models/AUTH/AccountRol';
import { User } from 'src/app/models/profile/User';
import { AccountRolService } from 'src/app/services/CRUD/AUTH/accountrol.service';

@Component({
  selector: 'app-admin-registro',
  templateUrl: './admin-registro.component.html',
  styleUrls: ['./admin-registro.component.scss']
})
export class AdminRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
