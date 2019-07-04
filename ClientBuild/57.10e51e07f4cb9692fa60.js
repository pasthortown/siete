(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"/2LX":function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("Ip0R"),a=t("gIcY"),r=t("XgrQ"),c=t("+o/m"),d=t("JEAp"),s=t("rYF7"),p=function(){return function(){}}(),g=t("7q7Q"),h=function(){function l(l,n,t,e){this.modalService=l,this.toastr=n,this.declaration_item_categoryDataService=t,this.declaration_itemDataService=e,this.declaration_items=[],this.declaration_itemSelected=new p,this.currentPage=1,this.lastPage=1,this.showDialog=!1,this.recordsByPage=5,this.declaration_item_categories=[]}return l.prototype.ngOnInit=function(){this.goToPage(1),this.getDeclarationItemCategory()},l.prototype.selectDeclarationItem=function(l){this.declaration_itemSelected=l},l.prototype.getDeclarationItemCategory=function(){var l=this;this.declaration_item_categories=[],this.declaration_item_categoryDataService.get().then(function(n){l.declaration_item_categories=n}).catch(function(l){return console.log(l)})},l.prototype.goToPage=function(l){l<1||l>this.lastPage?this.toastr.errorToastr("La p\xe1gina solicitada no existe.","Error"):(this.currentPage=l,this.getDeclarationItems())},l.prototype.getDeclarationItems=function(){var l=this;this.declaration_items=[],this.declaration_itemSelected=new p,this.declaration_itemSelected.declaration_item_category_id=0,this.declaration_itemDataService.get_paginate(this.recordsByPage,this.currentPage).then(function(n){l.declaration_items=n.data,l.lastPage=n.last_page}).catch(function(l){return console.log(l)})},l.prototype.newDeclarationItem=function(l){this.declaration_itemSelected=new p,this.declaration_itemSelected.declaration_item_category_id=0,this.openDialog(l)},l.prototype.editDeclarationItem=function(l){void 0!==this.declaration_itemSelected.id?this.openDialog(l):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},l.prototype.deleteDeclarationItem=function(){var l=this;void 0!==this.declaration_itemSelected.id?this.declaration_itemDataService.delete(this.declaration_itemSelected.id).then(function(n){l.toastr.successToastr("Registro Borrado satisfactoriamente.","Borrar"),l.getDeclarationItems()}).catch(function(l){return console.log(l)}):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},l.prototype.backup=function(){this.declaration_itemDataService.getBackUp().then(function(l){var n=new Blob([JSON.stringify(l)],{type:"text/plain"}),t=new Date;Object(d.saveAs)(n,t.toLocaleDateString()+"_DeclarationItems.json")}).catch(function(l){return console.log(l)})},l.prototype.toCSV=function(){this.declaration_itemDataService.get().then(function(l){var n="id;name;description;factor;year;tax_payer_type_id;declaration_item_category_id\n";l.forEach(function(l){n+=l.id+";"+l.name+";"+l.description+";"+l.factor+";"+l.year+";"+l.tax_payer_type_id+";"+l.declaration_item_category_id+"\n"});var t=new Blob([n],{type:"text/plain"}),e=new Date;Object(d.saveAs)(t,e.toLocaleDateString()+"_DeclarationItems.csv")}).catch(function(l){return console.log(l)})},l.prototype.decodeUploadFile=function(l){var n=this,t=new FileReader;l.target.files&&l.target.files.length>0&&(t.readAsDataURL(l.target.files[0]),t.onload=function(){var l=t.result.toString().split(",")[1],e=JSON.parse(decodeURIComponent(escape(atob(l))));n.declaration_itemDataService.masiveLoad(e).then(function(l){n.goToPage(n.currentPage)}).catch(function(l){return console.log(l)})})},l.prototype.openDialog=function(l){var n=this;this.modalService.open(l,{centered:!0,size:"lg"}).result.then(function(l){"Guardar click"===l&&(void 0===n.declaration_itemSelected.id?n.declaration_itemDataService.post(n.declaration_itemSelected).then(function(l){n.toastr.successToastr("Datos guardados satisfactoriamente.","Nuevo"),n.getDeclarationItems()}).catch(function(l){return console.log(l)}):n.declaration_itemDataService.put(n.declaration_itemSelected).then(function(l){n.toastr.successToastr("Registro actualizado satisfactoriamente.","Actualizar"),n.getDeclarationItems()}).catch(function(l){return console.log(l)}))},function(l){})},l}(),m=t("4GxJ"),f=t("3EpR"),v=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","far fa-hand-point-right"]],null,null,null,null,null))],null,null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"tr",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectDeclarationItem(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](3,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,["",""])),(l()(),e["\u0275eld"](12,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""]))],function(l,n){l(n,3,0,n.component.declaration_itemSelected===n.context.$implicit)},function(l,n){l(n,5,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.description),l(n,9,0,n.context.$implicit.factor),l(n,11,0,n.context.$implicit.year),l(n,13,0,n.context.$implicit.tax_payer_type_id)})}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","Primera P\xe1gina"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","Primera P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goToPage(1)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Anterior"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(1*u.currentPage-1)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,1*n.component.currentPage-1)})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Siguiente"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(1*u.currentPage+1)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,1*n.component.currentPage+1)})}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","\xdaltima P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(u.lastPage)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","\xdaltima P\xe1gina"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,a.n,[e.ElementRef,e.Renderer2,[2,a.o]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,a.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))},function(l,n){l(n,3,0,n.context.$implicit.id)})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Datos:"])),(l()(),e["\u0275eld"](3,0,null,null,2,"button",[["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.dismiss("Cross click")&&e),e},null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xd7"])),(l()(),e["\u0275eld"](6,0,null,null,71,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,70,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,69,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,9,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["name"])),(l()(),e["\u0275eld"](12,0,null,null,6,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,5,"input",[["class","form-control"],["id","name"],["name","name"],["placeholder","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,14)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,14).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,14)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,14)._compositionEnd(t.target.value)&&u),"ngModelChange"===n&&(u=!1!==(o.declaration_itemSelected.name=t)&&u),u},null,null)),e["\u0275did"](14,16384,null,0,a.d,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275prd"](1024,null,a.h,function(l){return[l]},[a.d]),e["\u0275did"](16,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.i,null,[a.m]),e["\u0275did"](18,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),e["\u0275eld"](19,0,null,null,9,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["description"])),(l()(),e["\u0275eld"](22,0,null,null,6,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,5,"ck-editor",[["id","description"],["name","description"],["skin","moono-lisa"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,t){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.declaration_itemSelected.description=t)&&e),e},r.b,r.a)),e["\u0275did"](24,9158656,null,0,c.a,[e.NgZone,e.ElementRef],{skin:[0,"skin"],id:[1,"id"]},null),e["\u0275prd"](1024,null,a.h,function(l){return[l]},[c.a]),e["\u0275did"](26,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.i,null,[a.m]),e["\u0275did"](28,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),e["\u0275eld"](29,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","factor"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["factor"])),(l()(),e["\u0275eld"](32,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,6,"input",[["class","form-control"],["id","factor"],["name","factor"],["placeholder","factor"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,34)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,34).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,34)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,34)._compositionEnd(t.target.value)&&u),"change"===n&&(u=!1!==e["\u0275nov"](l,35).onChange(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,35).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,35).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declaration_itemSelected.factor=t)&&u),u},null,null)),e["\u0275did"](34,16384,null,0,a.d,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](35,16384,null,0,a.q,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,a.h,function(l,n){return[l,n]},[a.d,a.q]),e["\u0275did"](37,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.i,null,[a.m]),e["\u0275did"](39,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),e["\u0275eld"](40,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","year"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["year"])),(l()(),e["\u0275eld"](43,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,6,"input",[["class","form-control"],["id","year"],["name","year"],["placeholder","year"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,45)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,45).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,45)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,45)._compositionEnd(t.target.value)&&u),"change"===n&&(u=!1!==e["\u0275nov"](l,46).onChange(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,46).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,46).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declaration_itemSelected.year=t)&&u),u},null,null)),e["\u0275did"](45,16384,null,0,a.d,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](46,16384,null,0,a.q,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,a.h,function(l,n){return[l,n]},[a.d,a.q]),e["\u0275did"](48,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.i,null,[a.m]),e["\u0275did"](50,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),e["\u0275eld"](51,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","tax_payer_type_id"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["tax_payer_type_id"])),(l()(),e["\u0275eld"](54,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,6,"input",[["class","form-control"],["id","tax_payer_type_id"],["name","tax_payer_type_id"],["placeholder","taxPayerTypeId"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,56)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,56).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,56)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,56)._compositionEnd(t.target.value)&&u),"change"===n&&(u=!1!==e["\u0275nov"](l,57).onChange(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,57).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,57).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declaration_itemSelected.tax_payer_type_id=t)&&u),u},null,null)),e["\u0275did"](56,16384,null,0,a.d,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](57,16384,null,0,a.q,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,a.h,function(l,n){return[l,n]},[a.d,a.q]),e["\u0275did"](59,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.i,null,[a.m]),e["\u0275did"](61,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),e["\u0275eld"](62,0,null,null,15,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","declaration_item_category_id"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["DeclarationItemCategory"])),(l()(),e["\u0275eld"](65,0,null,null,12,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,11,"select",[["class","form-control"],["id","declaration_item_category_id"],["name","declaration_item_category_id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,t){var u=!0,o=l.component;return"change"===n&&(u=!1!==e["\u0275nov"](l,67).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,67).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declaration_itemSelected.declaration_item_category_id=t)&&u),u},null,null)),e["\u0275did"](67,16384,null,0,a.o,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,a.h,function(l){return[l]},[a.o]),e["\u0275did"](69,671744,null,0,a.m,[[8,null],[8,null],[8,null],[6,a.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,a.i,null,[a.m]),e["\u0275did"](71,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),e["\u0275eld"](72,0,null,null,3,"option",[["selected",""],["value","0"]],null,null,null,null,null)),e["\u0275did"](73,147456,null,0,a.n,[e.ElementRef,e.Renderer2,[2,a.o]],{value:[0,"value"]},null),e["\u0275did"](74,147456,null,0,a.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Seleccione..."])),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](77,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](78,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](79,0,null,null,1,"button",[["class","btn btn-outline-success"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.close("Guardar click")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Guardar"])),(l()(),e["\u0275eld"](81,0,null,null,1,"button",[["class","btn btn-outline-danger"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.close("Cancelar click")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Cancelar"]))],function(l,n){var t=n.component;l(n,16,0,"name",t.declaration_itemSelected.name),l(n,24,0,"moono-lisa","description"),l(n,26,0,"description",t.declaration_itemSelected.description),l(n,37,0,"factor",t.declaration_itemSelected.factor),l(n,48,0,"year",t.declaration_itemSelected.year),l(n,59,0,"tax_payer_type_id",t.declaration_itemSelected.tax_payer_type_id),l(n,69,0,"declaration_item_category_id",t.declaration_itemSelected.declaration_item_category_id),l(n,73,0,"0"),l(n,74,0,"0"),l(n,77,0,t.declaration_item_categories)},function(l,n){l(n,13,0,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,23,0,e["\u0275nov"](n,28).ngClassUntouched,e["\u0275nov"](n,28).ngClassTouched,e["\u0275nov"](n,28).ngClassPristine,e["\u0275nov"](n,28).ngClassDirty,e["\u0275nov"](n,28).ngClassValid,e["\u0275nov"](n,28).ngClassInvalid,e["\u0275nov"](n,28).ngClassPending),l(n,33,0,e["\u0275nov"](n,39).ngClassUntouched,e["\u0275nov"](n,39).ngClassTouched,e["\u0275nov"](n,39).ngClassPristine,e["\u0275nov"](n,39).ngClassDirty,e["\u0275nov"](n,39).ngClassValid,e["\u0275nov"](n,39).ngClassInvalid,e["\u0275nov"](n,39).ngClassPending),l(n,44,0,e["\u0275nov"](n,50).ngClassUntouched,e["\u0275nov"](n,50).ngClassTouched,e["\u0275nov"](n,50).ngClassPristine,e["\u0275nov"](n,50).ngClassDirty,e["\u0275nov"](n,50).ngClassValid,e["\u0275nov"](n,50).ngClassInvalid,e["\u0275nov"](n,50).ngClassPending),l(n,55,0,e["\u0275nov"](n,61).ngClassUntouched,e["\u0275nov"](n,61).ngClassTouched,e["\u0275nov"](n,61).ngClassPristine,e["\u0275nov"](n,61).ngClassDirty,e["\u0275nov"](n,61).ngClassValid,e["\u0275nov"](n,61).ngClassInvalid,e["\u0275nov"](n,61).ngClassPending),l(n,66,0,e["\u0275nov"](n,71).ngClassUntouched,e["\u0275nov"](n,71).ngClassTouched,e["\u0275nov"](n,71).ngClassPristine,e["\u0275nov"](n,71).ngClassDirty,e["\u0275nov"](n,71).ngClassValid,e["\u0275nov"](n,71).ngClassInvalid,e["\u0275nov"](n,71).ngClassPending)})}function j(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h1",[["class","col-12 text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" DeclarationItem "])),(l()(),e["\u0275eld"](3,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,19,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary"],["title","Actualizar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(u.currentPage)&&e),e},null,null)),(l()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","fas fa-sync"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-success"],["title","Nuevo"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.newDeclarationItem(e["\u0275nov"](l,68))&&u),u},null,null)),(l()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","fas fa-file"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-warning"],["title","Editar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.editDeclarationItem(e["\u0275nov"](l,68))&&u),u},null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"i",[["class","fas fa-edit"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-danger"],["title","Eliminar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.deleteDeclarationItem()&&e),e},null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"i",[["class","fas fa-trash"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,7,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"button",[["class","btn btn-dark"],["title","BackUp"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.backup()&&e),e},null,null)),(l()(),e["\u0275eld"](19,0,null,null,0,"i",[["class","fas fa-download"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,1,"button",[["class","btn btn-dark"],["title","Exportar CSV"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toCSV()&&e),e},null,null)),(l()(),e["\u0275eld"](21,0,null,null,0,"i",[["class","fas fa-file-csv"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-dark"],["title","Cargar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,24).click()&&u),u},null,null)),(l()(),e["\u0275eld"](23,0,null,null,0,"i",[["class","fas fa-upload"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,[["uploadInput",1]],null,0,"input",[["accept",".json"],["class","form-control"],["type","file"]],[[8,"hidden",0]],[[null,"change"]],function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.decodeUploadFile(t)&&e),e},null,null)),(l()(),e["\u0275eld"](25,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,18,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,17,"table",[["class","table table-hover mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Seleccionado"])),(l()(),e["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["name"])),(l()(),e["\u0275eld"](34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["description"])),(l()(),e["\u0275eld"](36,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["factor"])),(l()(),e["\u0275eld"](38,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["year"])),(l()(),e["\u0275eld"](40,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["tax_payer_type_id"])),(l()(),e["\u0275eld"](42,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](44,278528,null,0,i.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](45,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,21,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,20,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,14,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](50,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](52,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](54,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](55,0,null,null,1,"button",[["class","btn btn-primary"],["title","P\xe1gina Actual"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](56,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](58,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](60,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](62,16384,null,0,i.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](63,0,null,null,4,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e["\u0275eld"](65,0,null,null,1,"button",[["class","input-group-text btn btn-success"],["title","Ir a la P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToPage(e["\u0275nov"](l,67).value)&&u),u},null,null)),(l()(),e["\u0275ted"](-1,null,["Ir a"])),(l()(),e["\u0275eld"](67,0,[["goToPageNumber",1]],null,0,"input",[["class","form-control"],["placeholder","Ir a la P\xe1gina"],["type","number"]],[[8,"min",0],[8,"max",0]],null,null,null,null)),(l()(),e["\u0275and"](0,[["content",2]],null,0,null,D))],function(l,n){var t=n.component;l(n,44,0,t.declaration_items),l(n,50,0,1===t.currentPage),l(n,52,0,1!==t.currentPage),l(n,54,0,t.currentPage>1),l(n,58,0,t.currentPage<t.lastPage),l(n,60,0,t.currentPage!==t.lastPage),l(n,62,0,t.currentPage===t.lastPage)},function(l,n){var t=n.component;l(n,24,0,!0),l(n,56,0,t.currentPage),l(n,67,0,e["\u0275inlineInterpolate"](1,"",1,""),e["\u0275inlineInterpolate"](1,"",t.lastPage,""))})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-declarationitem",[],null,null,null,j,v)),e["\u0275did"](1,114688,null,0,h,[m.y,f.a,g.a,s.a],null,null)],function(l,n){l(n,1,0)},null)}var w=e["\u0275ccf"]("app-declarationitem",h,E,{},{},[]),T=t("sE5F"),x=t("ZYCi"),N=function(){return function(){}}();t.d(n,"DeclarationItemModuleNgFactory",function(){return M});var M=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,w]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i.NgLocalization,i.NgLocaleLocalization,[e.LOCALE_ID,[2,i["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,a.s,a.s,[]),e["\u0275mpd"](4608,m.y,m.y,[e.ComponentFactoryResolver,e.Injector,m.tb,m.z]),e["\u0275mpd"](4608,g.a,g.a,[T.e,x.l]),e["\u0275mpd"](4608,s.a,s.a,[T.e,x.l]),e["\u0275mpd"](1073742336,i.CommonModule,i.CommonModule,[]),e["\u0275mpd"](1073742336,x.o,x.o,[[2,x.u],[2,x.l]]),e["\u0275mpd"](1073742336,N,N,[]),e["\u0275mpd"](1073742336,a.p,a.p,[]),e["\u0275mpd"](1073742336,a.e,a.e,[]),e["\u0275mpd"](1073742336,c.b,c.b,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,x.j,function(){return[[{path:"",component:h}]]},[])])})},"7q7Q":function(l,n,t){"use strict";t.d(n,"a",function(){return a});var e=t("sE5F"),u=t("AytR"),o=t("CcnG"),i=t("ZYCi"),a=function(){function l(l,n){this.http=l,this.router=n,this.url=u.a.api_financiero+"declarationitemcategory/",this.options=new e.g,this.options.headers=new e.d,this.options.headers.append("api_token",sessionStorage.getItem("api_token"))}return l.prototype.get=function(l){var n=this;return void 0===l?this.http.get(this.url,this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())}):this.http.get(this.url+"?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.get_paginate=function(l,n){var t=this;return this.http.get(this.url+"paginate?size="+l.toString()+"&page="+n.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){t.handledError(l.json())})},l.prototype.delete=function(l){var n=this;return this.http.delete(this.url+"?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.getBackUp=function(){var l=this;return this.http.get(this.url+"backup",this.options).toPromise().then(function(l){return l.json()}).catch(function(n){l.handledError(n.json())})},l.prototype.post=function(l){var n=this;return this.http.post(this.url,JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.put=function(l){var n=this;return this.http.put(this.url,JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.masiveLoad=function(l){var n=this;return this.http.post(this.url+"masive_load",JSON.stringify({data:l}),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.handledError=function(l){console.log(l),sessionStorage.clear(),this.router.navigate(["/login"])},l.ngInjectableDef=o.defineInjectable({factory:function(){return new l(o.inject(e.e),o.inject(i.l))},token:l,providedIn:"root"}),l}()},XgrQ:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return o});var e=t("CcnG"),u=(t("+o/m"),t("gIcY"),e["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function o(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{textareaRef:0}),(l()(),e["\u0275eld"](1,0,[[1,0],["textarea",1]],null,0,"textarea",[],null,null,null,null,null))],null,null)}},rYF7:function(l,n,t){"use strict";t.d(n,"a",function(){return a});var e=t("sE5F"),u=t("AytR"),o=t("CcnG"),i=t("ZYCi"),a=function(){function l(l,n){this.http=l,this.router=n,this.url=u.a.api_financiero+"declarationitem/",this.options=new e.g,this.options.headers=new e.d,this.options.headers.append("api_token",sessionStorage.getItem("api_token"))}return l.prototype.get=function(l){var n=this;return void 0===l?this.http.get(this.url,this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())}):this.http.get(this.url+"?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.get_paginate=function(l,n){var t=this;return this.http.get(this.url+"paginate?size="+l.toString()+"&page="+n.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){t.handledError(l.json())})},l.prototype.delete=function(l){var n=this;return this.http.delete(this.url+"?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.getBackUp=function(){var l=this;return this.http.get(this.url+"backup",this.options).toPromise().then(function(l){return l.json()}).catch(function(n){l.handledError(n.json())})},l.prototype.post=function(l){var n=this;return this.http.post(this.url,JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.put=function(l){var n=this;return this.http.put(this.url,JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.masiveLoad=function(l){var n=this;return this.http.post(this.url+"masive_load",JSON.stringify({data:l}),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.handledError=function(l){console.log(l),sessionStorage.clear(),this.router.navigate(["/login"])},l.ngInjectableDef=o.defineInjectable({factory:function(){return new l(o.inject(e.e),o.inject(i.l))},token:l,providedIn:"root"}),l}()}}]);