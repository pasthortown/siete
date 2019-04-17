import { UserService } from './../../../services/profile/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountAdminRoutingModule } from './account-admin-routing.module';
import { AccountAdminComponent } from './account-admin.component';

@NgModule({
  imports: [CommonModule, AccountAdminRoutingModule, FormsModule],
  declarations: [AccountAdminComponent],
  providers: [UserService]
})
export class AccountAdminModule {}
