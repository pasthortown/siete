import { UserService } from './../../../services/profile/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InnerAccountAdminRoutingModule } from './inner-account-admin-routing.module';
import { InnerAccountAdminComponent } from './inner-account-admin.component';

@NgModule({
  imports: [CommonModule, InnerAccountAdminRoutingModule, FormsModule],
  declarations: [InnerAccountAdminComponent],
  providers: [UserService]
})
export class InnerAccountAdminModule {}
