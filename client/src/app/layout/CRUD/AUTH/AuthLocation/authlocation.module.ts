import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthLocationRoutingModule } from './authlocation-routing.module';
import { AuthLocationComponent } from './authlocation.component';
import { AuthLocationService } from './../../../../services/CRUD/AUTH/authlocation.service';
import { environment } from 'src/environments/environment';
import { AccountRolService } from './../../../../services/CRUD/AUTH/accountrol.service';

@NgModule({
   imports: [CommonModule,
             AuthLocationRoutingModule,
             FormsModule],
   declarations: [AuthLocationComponent],
   providers: [
               NgbModal,
               AccountRolService,
               AuthLocationService
               ]
})
export class AuthLocationModule {}