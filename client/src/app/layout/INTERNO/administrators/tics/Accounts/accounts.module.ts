import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { environment } from 'src/environments/environment';
import { AccountRolService } from 'src/app/services/CRUD/AUTH/accountrol.service';
import { UserService } from 'src/app/services/profile/user.service';
import { AccountRolAssigmentService } from 'src/app/services/CRUD/AUTH/accountrolassigment.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';

@NgModule({
   imports: [CommonModule,
             AccountsRoutingModule,
             FormsModule],
   declarations: [AccountsComponent],
   providers: [
               NgbModal,
               AccountRolService,
               UserService,
               UbicationService,
               AccountRolAssigmentService
               ]
})
export class AccountsModule {}