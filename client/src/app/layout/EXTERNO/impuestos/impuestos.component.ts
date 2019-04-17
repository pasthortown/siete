import { Pay } from './../../../models/FINANCIERO/Pay';
import { DeclarationItemCategory } from './../../../models/FINANCIERO/DeclarationItemCategory';
import { DeclarationItemService } from 'src/app/services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItemCategoryService } from 'src/app/services/CRUD/FINANCIERO/declarationitemcategory.service';
import { Establishment } from 'src/app/models/BASE/Establishment';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { RegistroDataCarrier } from 'src/app/models/negocio/RegistroDataCarrier';
import { Declaration } from 'src/app/models/FINANCIERO/Declaration';
import { DeclarationItem } from 'src/app/models/FINANCIERO/DeclarationItem';
import { DeclarationItemValue } from 'src/app/models/FINANCIERO/DeclarationItemValue';

@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.scss']
})
export class ImpuestosComponent implements OnInit {
  currentPage = 1;
  lastPage = 1;
  recordsByPage = 5;
  mostrarData = true;
  rucData = 'Datos Interconectados del Ruc';
  
  currentPageEstablishment = 1;
  lastPageEstablishment = 1;
  recordsByPageEstablishment = 5;
  mostrarDataEstablishment = true;
  rucs_registrados: RegistroDataCarrier[] = [];
  ruc_registro_selected: RegistroDataCarrier = new RegistroDataCarrier();
  establishment_selected: Establishment = new Establishment();
  
  mostrarDataDeclaracion = true;
  declarationSelected: Declaration = new Declaration();
  payDeclarationSelected: Pay = new Pay();
  declarationItemsToShow: any[] = [];
  declarationItemsCategories: DeclarationItemCategory[] = [];
  declarationItems: DeclarationItem[] = [];

  constructor(
    private toastr: ToastrManager,
    private declarationItemCategoryDataService: DeclarationItemCategoryService,
    private declarationItemDataService: DeclarationItemService,
    ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getDeclarationCategories();
    this.getDeclarationItems();
    this.declarationSelected.max_date_to_pay = new Date('2019-05-08');
    this.declarationSelected.year = 2019;
    this.payDeclarationSelected.amount_payed = 298.45;
    this.payDeclarationSelected.amount_to_pay = 298.45;
    this.payDeclarationSelected.pay_date = new Date();
  }

  checkAmount() {
    this.payDeclarationSelected.amount_to_pay = 0;
    let total = 0;
    console.log(this.declarationItemsToShow);
    this.declarationItemsToShow.forEach(element => {
      element.items.forEach(item => {
        total += item.declarationItem.factor * item.valueItem.value;
      });
    });
    this.payDeclarationSelected.amount_to_pay = total / 1000;
  }

  goToPage(page: number) {
    if ( page < 1 || page > this.lastPage ) {
       this.toastr.errorToastr('La página solicitada no existe.', 'Error');
       return;
    }
    this.currentPage = page;
  }

  goToPageEstablishment(page: number) {
    if ( page < 1 || page > this.lastPageEstablishment ) {
       this.toastr.errorToastr('La página solicitada no existe.', 'Error');
       return;
    }
    this.currentPageEstablishment = page;
  }

  selectRegisterEstablishment(establishment) {
    this.establishment_selected = establishment;
    this.mostrarDataEstablishment = true;
  }


  buildDeclarationItemsToShow() {
    this.declarationItemsToShow = [];
    this.declarationItemsCategories.forEach(category => {
      const items = [];
      this.declarationItems.forEach(item => {
        if(item.declaration_item_category_id == category.id) {
          items.push({declarationItem: item, valueItem: new DeclarationItemValue()});
        }
      });
      this.declarationItemsToShow.push({CategoryName: category.name, items: items});
    });
  }

  getDeclarationCategories() {
    this.declarationItemCategoryDataService.get().then( r => {
      this.declarationItemsCategories = r as DeclarationItemCategory[];
    }).catch( e => { console.log(e); });
  }

  getDeclarationItems() {
    this.declarationItemDataService.get().then( r => {
      this.declarationItems = r as DeclarationItem[];
    }).catch( e => { console.log(e); });
  }
}
