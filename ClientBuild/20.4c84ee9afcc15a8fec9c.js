(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{ALPY:function(l,n,t){"use strict";t.d(n,"a",function(){return i});var e=t("sE5F"),u=t("AytR"),o=t("CcnG"),a=t("ZYCi"),i=function(){function l(l,n){this.http=l,this.router=n,this.url=u.a.api_financiero+"declaration/",this.options=new e.g,this.options.headers=new e.d,this.options.headers.append("api_token",sessionStorage.getItem("api_token"))}return l.prototype.get=function(l){var n=this;return void 0===l?this.http.get(this.url,this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())}):this.http.get(this.url+"?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.get_by_establishment=function(l){var n=this;return this.http.get(this.url+"by_establishment?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.register_data=function(l){var n=this;return this.http.post(this.url+"register_data",JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.get_paginate=function(l,n){var t=this;return this.http.get(this.url+"paginate?size="+l.toString()+"&page="+n.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){t.handledError(l.json())})},l.prototype.delete=function(l){var n=this;return this.http.delete(this.url+"?id="+l.toString(),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.getBackUp=function(){var l=this;return this.http.get(this.url+"backup",this.options).toPromise().then(function(l){return l.json()}).catch(function(n){l.handledError(n.json())})},l.prototype.post=function(l){var n=this;return this.http.post(this.url,JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.put=function(l){var n=this;return this.http.put(this.url,JSON.stringify(l),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.masiveLoad=function(l){var n=this;return this.http.post(this.url+"masive_load",JSON.stringify({data:l}),this.options).toPromise().then(function(l){return l.json()}).catch(function(l){n.handledError(l.json())})},l.prototype.handledError=function(l){console.log(l),sessionStorage.clear(),this.router.navigate(["/login"])},l.ngInjectableDef=o.defineInjectable({factory:function(){return new l(o.inject(e.e),o.inject(a.l))},token:l,providedIn:"root"}),l}()},B9Yq:function(l,n){l.exports=function(){throw new Error("define cannot be used indirect")}},Hd40:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),a=t("Ip0R"),i=t("gIcY"),r=t("JEAp"),c=t("ALPY"),d=t("JPpP"),s=t("skdo"),p=function(){function l(l,n,t,e){this.modalService=l,this.toastr=n,this.declaration_item_valueDataService=t,this.declarationDataService=e,this.declarations=[],this.declarationSelected=new d.a,this.currentPage=1,this.lastPage=1,this.showDialog=!1,this.recordsByPage=5,this.declaration_item_values=[]}return l.prototype.ngOnInit=function(){this.goToPage(1),this.getDeclarationItemValue()},l.prototype.selectDeclaration=function(l){this.declarationSelected=l},l.prototype.getDeclarationItemValue=function(){var l=this;this.declaration_item_values=[],this.declaration_item_valueDataService.get().then(function(n){l.declaration_item_values=n}).catch(function(l){return console.log(l)})},l.prototype.getDeclarationItemValuesOnDeclaration=function(){var l=this;this.declarationSelected.declaration_item_values_on_declaration=[],this.declarationDataService.get(this.declarationSelected.id).then(function(n){l.declarationSelected.declaration_item_values_on_declaration=n.attach[0].declaration_item_values_on_declaration}).catch(function(l){return console.log(l)})},l.prototype.goToPage=function(l){l<1||l>this.lastPage?this.toastr.errorToastr("La p\xe1gina solicitada no existe.","Error"):(this.currentPage=l,this.getDeclarations())},l.prototype.getDeclarations=function(){var l=this;this.declarations=[],this.declarationSelected=new d.a,this.declaration_item_values_declarationSelectedId=0,this.declarationDataService.get_paginate(this.recordsByPage,this.currentPage).then(function(n){l.declarations=n.data,l.lastPage=n.last_page}).catch(function(l){return console.log(l)})},l.prototype.newDeclaration=function(l){this.declarationSelected=new d.a,this.declaration_item_values_declarationSelectedId=0,this.openDialog(l)},l.prototype.editDeclaration=function(l){void 0===this.declarationSelected.declaration_item_values_on_declaration&&(this.declarationSelected.declaration_item_values_on_declaration=[]),void 0!==this.declarationSelected.id?(this.getDeclarationItemValuesOnDeclaration(),this.declaration_item_values_declarationSelectedId=0,this.openDialog(l)):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},l.prototype.deleteDeclaration=function(){var l=this;void 0!==this.declarationSelected.id?this.declarationDataService.delete(this.declarationSelected.id).then(function(n){l.toastr.successToastr("Registro Borrado satisfactoriamente.","Borrar"),l.getDeclarations()}).catch(function(l){return console.log(l)}):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},l.prototype.backup=function(){this.declarationDataService.getBackUp().then(function(l){var n=new Blob([JSON.stringify(l)],{type:"text/plain"}),t=new Date;Object(r.saveAs)(n,t.toLocaleDateString()+"_Declarations.json")}).catch(function(l){return console.log(l)})},l.prototype.toCSV=function(){this.declarationDataService.get().then(function(l){var n="id;establishment_id;declaration_date;year;max_date_to_pay\n";l.forEach(function(l){n+=l.id+";"+l.establishment_id+";"+l.declaration_date+";"+l.year+";"+l.max_date_to_pay+"\n"});var t=new Blob([n],{type:"text/plain"}),e=new Date;Object(r.saveAs)(t,e.toLocaleDateString()+"_Declarations.csv")}).catch(function(l){return console.log(l)})},l.prototype.decodeUploadFile=function(l){var n=this,t=new FileReader;l.target.files&&l.target.files.length>0&&(t.readAsDataURL(l.target.files[0]),t.onload=function(){var l=t.result.toString().split(",")[1],e=JSON.parse(decodeURIComponent(escape(atob(l))));n.declarationDataService.masiveLoad(e).then(function(l){n.goToPage(n.currentPage)}).catch(function(l){return console.log(l)})})},l.prototype.selectDeclarationItemValue=function(l){this.declaration_item_values_declarationSelectedId=l.id},l.prototype.addDeclarationItemValue=function(){var l=this;0!==this.declaration_item_values_declarationSelectedId?this.declaration_item_values.forEach(function(n){if(n.id==l.declaration_item_values_declarationSelectedId){var t=!1;l.declarationSelected.declaration_item_values_on_declaration.forEach(function(l){l.id==n.id&&(t=!0)}),t?l.toastr.errorToastr("El registro ya existe.","Error"):(l.declarationSelected.declaration_item_values_on_declaration.push(n),l.declaration_item_values_declarationSelectedId=0)}}):this.toastr.errorToastr("Seleccione un registro.","Error")},l.prototype.removeDeclarationItemValue=function(){var l=this;if(0!==this.declaration_item_values_declarationSelectedId){var n=[],t=!1;this.declarationSelected.declaration_item_values_on_declaration.forEach(function(e){e.id!==l.declaration_item_values_declarationSelectedId?n.push(e):t=!0}),t?(this.declarationSelected.declaration_item_values_on_declaration=n,this.declaration_item_values_declarationSelectedId=0):this.toastr.errorToastr("Registro no encontrado.","Error")}else this.toastr.errorToastr("Seleccione un registro.","Error")},l.prototype.openDialog=function(l){var n=this;this.modalService.open(l,{centered:!0}).result.then(function(l){"Guardar click"===l&&(void 0===n.declarationSelected.id?n.declarationDataService.post(n.declarationSelected).then(function(l){n.toastr.successToastr("Datos guardados satisfactoriamente.","Nuevo"),n.getDeclarations()}).catch(function(l){return console.log(l)}):n.declarationDataService.put(n.declarationSelected).then(function(l){n.toastr.successToastr("Registro actualizado satisfactoriamente.","Actualizar"),n.getDeclarations()}).catch(function(l){return console.log(l)}))},function(l){})},l}(),g=t("4GxJ"),f=t("3EpR"),h=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","far fa-hand-point-right"]],null,null,null,null,null))],null,null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,11,"tr",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectDeclaration(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](3,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""])),(l()(),e["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275eld"](8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275eld"](10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](11,null,["",""]))],function(l,n){l(n,3,0,n.component.declarationSelected===n.context.$implicit)},function(l,n){l(n,5,0,n.context.$implicit.establishment_id),l(n,7,0,n.context.$implicit.declaration_date),l(n,9,0,n.context.$implicit.year),l(n,11,0,n.context.$implicit.max_date_to_pay)})}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","Primera P\xe1gina"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","Primera P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goToPage(1)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Anterior"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(1*u.currentPage-1)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,1*n.component.currentPage-1)})}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Siguiente"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(1*u.currentPage+1)&&e),e},null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,1*n.component.currentPage+1)})}function I(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","\xdaltima P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(u.lastPage)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","\xdaltima P\xe1gina"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,i.n,[e.ElementRef,e.Renderer2,[2,i.o]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,i.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,[" "," "]))],function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,"")),l(n,2,0,e["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))},function(l,n){l(n,3,0,n.context.$implicit.id)})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","far fa-hand-point-right"]],null,null,null,null,null))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"tr",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectDeclarationItemValue(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"td",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](3,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["",""]))],function(l,n){l(n,3,0,n.component.declaration_item_values_declarationSelectedId===n.context.$implicit.id)},function(l,n){l(n,5,0,n.context.$implicit.id)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Datos:"])),(l()(),e["\u0275eld"](3,0,null,null,2,"button",[["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.dismiss("Cross click")&&e),e},null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xd7"])),(l()(),e["\u0275eld"](6,0,null,null,77,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,76,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,75,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","establishment_id"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["establishment_id"])),(l()(),e["\u0275eld"](12,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,6,"input",[["class","form-control"],["id","establishment_id"],["name","establishment_id"],["placeholder","establishmentId"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,14)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,14).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,14)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,14)._compositionEnd(t.target.value)&&u),"change"===n&&(u=!1!==e["\u0275nov"](l,15).onChange(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,15).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,15).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declarationSelected.establishment_id=t)&&u),u},null,null)),e["\u0275did"](14,16384,null,0,i.d,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275did"](15,16384,null,0,i.q,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,i.h,function(l,n){return[l,n]},[i.d,i.q]),e["\u0275did"](17,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,i.i,null,[i.m]),e["\u0275did"](19,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),e["\u0275eld"](20,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","declaration_date"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["declaration_date"])),(l()(),e["\u0275eld"](23,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,6,"input",[["class","form-control"],["id","declaration_date"],["name","declaration_date"],["placeholder","declarationDate"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,25)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,25).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,25)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,25)._compositionEnd(t.target.value)&&u),"ngModelChange"===n&&(u=!1!==(o.declarationSelected.declaration_date=t)&&u),u},null,null)),e["\u0275did"](25,16384,null,0,i.d,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275prd"](1024,null,i.h,function(l){return[l]},[i.d]),e["\u0275did"](27,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275ppd"](28,2),e["\u0275prd"](2048,null,i.i,null,[i.m]),e["\u0275did"](30,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),e["\u0275eld"](31,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","year"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["year"])),(l()(),e["\u0275eld"](34,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](35,0,null,null,6,"input",[["class","form-control"],["id","year"],["name","year"],["placeholder","year"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,36)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,36).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,36)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,36)._compositionEnd(t.target.value)&&u),"change"===n&&(u=!1!==e["\u0275nov"](l,37).onChange(t.target.value)&&u),"input"===n&&(u=!1!==e["\u0275nov"](l,37).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,37).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declarationSelected.year=t)&&u),u},null,null)),e["\u0275did"](36,16384,null,0,i.d,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275did"](37,16384,null,0,i.q,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,i.h,function(l,n){return[l,n]},[i.d,i.q]),e["\u0275did"](39,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,i.i,null,[i.m]),e["\u0275did"](41,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),e["\u0275eld"](42,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","max_date_to_pay"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["max_date_to_pay"])),(l()(),e["\u0275eld"](45,0,null,null,7,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,6,"input",[["class","form-control"],["id","max_date_to_pay"],["name","max_date_to_pay"],["placeholder","maxDateToPay"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,47)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,47).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,47)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,47)._compositionEnd(t.target.value)&&u),"ngModelChange"===n&&(u=!1!==(o.declarationSelected.max_date_to_pay=t)&&u),u},null,null)),e["\u0275did"](47,16384,null,0,i.d,[e.Renderer2,e.ElementRef,[2,i.a]],null,null),e["\u0275prd"](1024,null,i.h,function(l){return[l]},[i.d]),e["\u0275did"](49,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275ppd"](50,2),e["\u0275prd"](2048,null,i.i,null,[i.m]),e["\u0275did"](52,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),e["\u0275eld"](53,0,null,null,30,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,2,"label",[["class","col-12 col-form-label mb-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["DeclarationItemValues"])),(l()(),e["\u0275eld"](57,0,null,null,1,"label",[["class","col-4 col-form-label"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["DeclarationItemValue"])),(l()(),e["\u0275eld"](59,0,null,null,18,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,17,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](61,0,null,null,4,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,1,"button",[["class","btn btn-danger"],["title","Eliminar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.removeDeclarationItemValue()&&e),e},null,null)),(l()(),e["\u0275eld"](63,0,null,null,0,"i",[["class","fas fa-trash"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,1,"button",[["class","btn btn-success"],["title","Agregar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addDeclarationItemValue()&&e),e},null,null)),(l()(),e["\u0275eld"](65,0,null,null,0,"i",[["class","fas fa-plus-circle"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,11,"select",[["class","form-control"],["id","declaration_item_value_id"],["name","declaration_item_value_id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,t){var u=!0,o=l.component;return"change"===n&&(u=!1!==e["\u0275nov"](l,67).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,67).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(o.declaration_item_values_declarationSelectedId=t)&&u),u},null,null)),e["\u0275did"](67,16384,null,0,i.o,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,i.h,function(l){return[l]},[i.o]),e["\u0275did"](69,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,i.i,null,[i.m]),e["\u0275did"](71,16384,null,0,i.j,[[4,i.i]],null,null),(l()(),e["\u0275eld"](72,0,null,null,3,"option",[["selected",""],["value","0"]],null,null,null,null,null)),e["\u0275did"](73,147456,null,0,i.n,[e.ElementRef,e.Renderer2,[2,i.o]],{value:[0,"value"]},null),e["\u0275did"](74,147456,null,0,i.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Seleccione..."])),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](77,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](78,0,null,null,0,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](79,0,null,null,4,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](80,0,null,null,3,"table",[["class","table table-hover mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](83,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](84,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,1,"button",[["class","btn btn-outline-success"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.close("Guardar click")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Guardar"])),(l()(),e["\u0275eld"](87,0,null,null,1,"button",[["class","btn btn-outline-danger"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.context.$implicit.close("Cancelar click")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Cancelar"]))],function(l,n){var t=n.component;l(n,17,0,"establishment_id",t.declarationSelected.establishment_id);var u=e["\u0275unv"](n,27,1,l(n,28,0,e["\u0275nov"](n.parent,0),t.declarationSelected.declaration_date,"y-MM-dd"));l(n,27,0,"declaration_date",u),l(n,39,0,"year",t.declarationSelected.year);var o=e["\u0275unv"](n,49,1,l(n,50,0,e["\u0275nov"](n.parent,0),t.declarationSelected.max_date_to_pay,"y-MM-dd"));l(n,49,0,"max_date_to_pay",o),l(n,69,0,"declaration_item_value_id",t.declaration_item_values_declarationSelectedId),l(n,73,0,"0"),l(n,74,0,"0"),l(n,77,0,t.declaration_item_values),l(n,83,0,t.declarationSelected.declaration_item_values_on_declaration)},function(l,n){l(n,13,0,e["\u0275nov"](n,19).ngClassUntouched,e["\u0275nov"](n,19).ngClassTouched,e["\u0275nov"](n,19).ngClassPristine,e["\u0275nov"](n,19).ngClassDirty,e["\u0275nov"](n,19).ngClassValid,e["\u0275nov"](n,19).ngClassInvalid,e["\u0275nov"](n,19).ngClassPending),l(n,24,0,e["\u0275nov"](n,30).ngClassUntouched,e["\u0275nov"](n,30).ngClassTouched,e["\u0275nov"](n,30).ngClassPristine,e["\u0275nov"](n,30).ngClassDirty,e["\u0275nov"](n,30).ngClassValid,e["\u0275nov"](n,30).ngClassInvalid,e["\u0275nov"](n,30).ngClassPending),l(n,35,0,e["\u0275nov"](n,41).ngClassUntouched,e["\u0275nov"](n,41).ngClassTouched,e["\u0275nov"](n,41).ngClassPristine,e["\u0275nov"](n,41).ngClassDirty,e["\u0275nov"](n,41).ngClassValid,e["\u0275nov"](n,41).ngClassInvalid,e["\u0275nov"](n,41).ngClassPending),l(n,46,0,e["\u0275nov"](n,52).ngClassUntouched,e["\u0275nov"](n,52).ngClassTouched,e["\u0275nov"](n,52).ngClassPristine,e["\u0275nov"](n,52).ngClassDirty,e["\u0275nov"](n,52).ngClassValid,e["\u0275nov"](n,52).ngClassInvalid,e["\u0275nov"](n,52).ngClassPending),l(n,66,0,e["\u0275nov"](n,71).ngClassUntouched,e["\u0275nov"](n,71).ngClassTouched,e["\u0275nov"](n,71).ngClassPristine,e["\u0275nov"](n,71).ngClassDirty,e["\u0275nov"](n,71).ngClassValid,e["\u0275nov"](n,71).ngClassInvalid,e["\u0275nov"](n,71).ngClassPending)})}function k(l){return e["\u0275vid"](0,[e["\u0275pid"](0,a.DatePipe,[e.LOCALE_ID]),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h1",[["class","col-12 text-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Declaration "])),(l()(),e["\u0275eld"](4,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,19,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary"],["title","Actualizar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.goToPage(u.currentPage)&&e),e},null,null)),(l()(),e["\u0275eld"](9,0,null,null,0,"i",[["class","fas fa-sync"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,4,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"button",[["class","btn btn-success"],["title","Nuevo"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.newDeclaration(e["\u0275nov"](l,67))&&u),u},null,null)),(l()(),e["\u0275eld"](12,0,null,null,0,"i",[["class","fas fa-file"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,1,"button",[["class","btn btn-warning"],["title","Editar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.editDeclaration(e["\u0275nov"](l,67))&&u),u},null,null)),(l()(),e["\u0275eld"](14,0,null,null,0,"i",[["class","fas fa-edit"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"button",[["class","btn btn-danger"],["title","Eliminar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.deleteDeclaration()&&e),e},null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"i",[["class","fas fa-trash"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,7,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,1,"button",[["class","btn btn-dark"],["title","BackUp"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.backup()&&e),e},null,null)),(l()(),e["\u0275eld"](20,0,null,null,0,"i",[["class","fas fa-download"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"button",[["class","btn btn-dark"],["title","Exportar CSV"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toCSV()&&e),e},null,null)),(l()(),e["\u0275eld"](22,0,null,null,0,"i",[["class","fas fa-file-csv"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"button",[["class","btn btn-dark"],["title","Cargar"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,25).click()&&u),u},null,null)),(l()(),e["\u0275eld"](24,0,null,null,0,"i",[["class","fas fa-upload"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,[["uploadInput",1]],null,0,"input",[["accept",".json"],["class","form-control"],["type","file"]],[[8,"hidden",0]],[[null,"change"]],function(l,n,t){var e=!0;return"change"===n&&(e=!1!==l.component.decodeUploadFile(t)&&e),e},null,null)),(l()(),e["\u0275eld"](26,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,16,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,15,"table",[["class","table table-hover mt-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](31,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Seleccionado"])),(l()(),e["\u0275eld"](33,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["establishment_id"])),(l()(),e["\u0275eld"](35,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["declaration_date"])),(l()(),e["\u0275eld"](37,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["year"])),(l()(),e["\u0275eld"](39,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["max_date_to_pay"])),(l()(),e["\u0275eld"](41,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](43,278528,null,0,a.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](44,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,21,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,20,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,14,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](49,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](51,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](53,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](54,0,null,null,1,"button",[["class","btn btn-primary"],["title","P\xe1gina Actual"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](55,null,["",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](57,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,I)),e["\u0275did"](59,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](61,16384,null,0,a.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](62,0,null,null,4,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(l()(),e["\u0275eld"](64,0,null,null,1,"button",[["class","input-group-text btn btn-success"],["title","Ir a la P\xe1gina"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToPage(e["\u0275nov"](l,66).value)&&u),u},null,null)),(l()(),e["\u0275ted"](-1,null,["Ir a"])),(l()(),e["\u0275eld"](66,0,[["goToPageNumber",1]],null,0,"input",[["class","form-control"],["placeholder","Ir a la P\xe1gina"],["type","number"]],[[8,"min",0],[8,"max",0]],null,null,null,null)),(l()(),e["\u0275and"](0,[["content",2]],null,0,null,R))],function(l,n){var t=n.component;l(n,43,0,t.declarations),l(n,49,0,1===t.currentPage),l(n,51,0,1!==t.currentPage),l(n,53,0,t.currentPage>1),l(n,57,0,t.currentPage<t.lastPage),l(n,59,0,t.currentPage!==t.lastPage),l(n,61,0,t.currentPage===t.lastPage)},function(l,n){var t=n.component;l(n,25,0,!0),l(n,55,0,t.currentPage),l(n,66,0,e["\u0275inlineInterpolate"](1,"",1,""),e["\u0275inlineInterpolate"](1,"",t.lastPage,""))})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-declaration",[],null,null,null,k,h)),e["\u0275did"](1,114688,null,0,p,[g.y,f.a,s.a,c.a],null,null)],function(l,n){l(n,1,0)},null)}var T=e["\u0275ccf"]("app-declaration",p,E,{},{},[]),x=t("sE5F"),j=t("ZYCi"),O=function(){return function(){}}();t.d(n,"DeclarationModuleNgFactory",function(){return N});var N=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,T]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,i.s,i.s,[]),e["\u0275mpd"](4608,g.y,g.y,[e.ComponentFactoryResolver,e.Injector,g.rb,g.z]),e["\u0275mpd"](4608,s.a,s.a,[x.e,j.l]),e["\u0275mpd"](4608,c.a,c.a,[x.e,j.l]),e["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](1073742336,j.o,j.o,[[2,j.u],[2,j.l]]),e["\u0275mpd"](1073742336,O,O,[]),e["\u0275mpd"](1073742336,i.p,i.p,[]),e["\u0275mpd"](1073742336,i.e,i.e,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,j.j,function(){return[[{path:"",component:p}]]},[])])})},JEAp:function(l,n,t){var e,u=u||function(l){"use strict";if(!(void 0===l||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var n=function(){return l.URL||l.webkitURL||l},t=l.document.createElementNS("http://www.w3.org/1999/xhtml","a"),e="download"in t,u=/constructor/i.test(l.HTMLElement)||l.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),a=function(n){(l.setImmediate||l.setTimeout)(function(){throw n},0)},i=function(l){setTimeout(function(){"string"==typeof l?n().revokeObjectURL(l):l.remove()},4e4)},r=function(l){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob([String.fromCharCode(65279),l],{type:l.type}):l},c=function(c,d,s){s||(c=r(c));var p,g=this,f="application/octet-stream"===c.type,h=function(){!function(l,n,t){for(var e=(n=[].concat(n)).length;e--;){var u=l["on"+n[e]];if("function"==typeof u)try{u.call(l,l)}catch(o){a(o)}}}(g,"writestart progress write writeend".split(" "))};if(g.readyState=g.INIT,e)return p=n().createObjectURL(c),void setTimeout(function(){var l,n;t.href=p,t.download=d,l=t,n=new MouseEvent("click"),l.dispatchEvent(n),h(),i(p),g.readyState=g.DONE});!function(){if((o||f&&u)&&l.FileReader){var t=new FileReader;return t.onloadend=function(){var n=o?t.result:t.result.replace(/^data:[^;]*;/,"data:attachment/file;");l.open(n,"_blank")||(l.location.href=n),n=void 0,g.readyState=g.DONE,h()},t.readAsDataURL(c),void(g.readyState=g.INIT)}p||(p=n().createObjectURL(c)),f?l.location.href=p:l.open(p,"_blank")||(l.location.href=p),g.readyState=g.DONE,h(),i(p)}()},d=c.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(l,n,t){return n=n||l.name||"download",t||(l=r(l)),navigator.msSaveOrOpenBlob(l,n)}:(d.abort=function(){},d.readyState=d.INIT=0,d.WRITING=1,d.DONE=2,d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null,function(l,n,t){return new c(l,n||l.name||"download",t)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);l.exports?l.exports.saveAs=u:null!==t("B9Yq")&&null!==t("PDX0")&&(void 0===(e=(function(){return u}).call(n,t,n,l))||(l.exports=e))},JPpP:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var e=t("f7/7"),u=function(){return function(){this.id=0,this.editable=!0,this.establishment_id=0,this.declaration_item_values_on_declaration=[],this.year=(new Date).getFullYear(),this.status=new e.a}}()},PDX0:function(l,n){(function(n){l.exports=n}).call(this,{})},"f7/7":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){return function(){}}()}}]);