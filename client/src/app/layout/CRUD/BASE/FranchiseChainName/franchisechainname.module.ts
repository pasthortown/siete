import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FranchiseChainNameRoutingModule } from './franchisechainname-routing.module';
import { FranchiseChainNameComponent } from './franchisechainname.component';
import { FranchiseChainNameService } from './../../../../services/CRUD/BASE/franchisechainname.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             FranchiseChainNameRoutingModule,
             FormsModule],
   declarations: [FranchiseChainNameComponent],
   providers: [
               NgbModal,
               FranchiseChainNameService
               ]
})
export class FranchiseChainNameModule {}