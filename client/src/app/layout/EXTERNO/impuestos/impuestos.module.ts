import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImpuestosRoutingModule } from './impuestos-routing.module';
import { ImpuestosComponent } from './impuestos.component';
import { DeclarationItemService } from 'src/app/services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItemCategoryService } from 'src/app/services/CRUD/FINANCIERO/declarationitemcategory.service';

@NgModule({
  imports: [
    CommonModule,
    ImpuestosRoutingModule,
    FormsModule
  ],
  declarations: [ImpuestosComponent],
  providers: [DeclarationItemService, DeclarationItemCategoryService],
})
export class ImpuestosModule {}
