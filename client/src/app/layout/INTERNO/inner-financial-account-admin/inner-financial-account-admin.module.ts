import { UserService } from './../../../services/profile/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InnerFinancialAccountAdminRoutingModule } from './inner-financial-account-admin-routing.module';
import { InnerFinancialAccountAdminComponent } from './inner-financial-account-admin.component';

@NgModule({
  imports: [CommonModule, InnerFinancialAccountAdminRoutingModule, FormsModule],
  declarations: [InnerFinancialAccountAdminComponent],
  providers: [UserService]
})
export class InnerFinancialAccountAdminModule {}
