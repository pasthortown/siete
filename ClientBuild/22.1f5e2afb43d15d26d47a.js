(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3Nac":function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e=t("sE5F"),u=t("AytR"),i=t("CcnG"),o=t("ZYCi"),r=function(){function n(n,l){this.http=n,this.router=l,this.url=u.a.api_alojamiento+"register/",this.options=new e.g,this.options.headers=new e.d,this.options.headers.append("api_token",sessionStorage.getItem("api_token"))}return n.prototype.get=function(n){var l=this;return void 0===n?this.http.get(this.url,this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())}):this.http.get(this.url+"?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.get_paginate=function(n,l){var t=this;return this.http.get(this.url+"paginate?size="+n.toString()+"&page="+l.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){t.handledError(n.json())})},n.prototype.get_tarifario=function(n){var l=this;return this.http.post(this.url+"get_tarifario",JSON.stringify({register_id:n}),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.delete=function(n){var l=this;return this.http.delete(this.url+"?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.getBackUp=function(){var n=this;return this.http.get(this.url+"backup",this.options).toPromise().then(function(n){return n.json()}).catch(function(l){n.handledError(l.json())})},n.prototype.get_register_data=function(n){var l=this;return this.http.get(this.url+"get_register_data?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.get_requisites_set_by_user=function(n){var l=this;return this.http.get(this.url+"get_requisites_set_by_user?register_id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.get_registers_by_ruc=function(n){var l=this;return this.http.get(this.url+"get_registers_by_ruc?ruc_number="+n,this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.register_register_data=function(n){var l=this;return this.http.post(this.url+"register_register_data",JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.get_by_register_code=function(n){var l=this;return this.http.get(this.url+"get_by_register_code/?code="+n,this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.post=function(n){var l=this;return this.http.post(this.url,JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.put=function(n){var l=this;return this.http.put(this.url,JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.set_register_code=function(n,l){var t=this;return this.http.put(this.url+"set_register_code",JSON.stringify({code:n,id:l}),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){t.handledError(n.json())})},n.prototype.masiveLoad=function(n){var l=this;return this.http.post(this.url+"masive_load",JSON.stringify({data:n}),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.handledError=function(n){console.log(n),sessionStorage.clear(),this.router.navigate(["/login"])},n.ngInjectableDef=i.defineInjectable({factory:function(){return new n(i.inject(e.e),i.inject(o.l))},token:n,providedIn:"root"}),n}()},B9Yq:function(n,l){n.exports=function(){throw new Error("define cannot be used indirect")}},JEAp:function(n,l,t){var e,u=u||function(n){"use strict";if(!(void 0===n||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var l=function(){return n.URL||n.webkitURL||n},t=n.document.createElementNS("http://www.w3.org/1999/xhtml","a"),e="download"in t,u=/constructor/i.test(n.HTMLElement)||n.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),o=function(l){(n.setImmediate||n.setTimeout)(function(){throw l},0)},r=function(n){setTimeout(function(){"string"==typeof n?l().revokeObjectURL(n):n.remove()},4e4)},s=function(n){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob([String.fromCharCode(65279),n],{type:n.type}):n},a=function(a,c,d){d||(a=s(a));var g,h=this,f="application/octet-stream"===a.type,p=function(){!function(n,l,t){for(var e=(l=[].concat(l)).length;e--;){var u=n["on"+l[e]];if("function"==typeof u)try{u.call(n,n)}catch(i){o(i)}}}(h,"writestart progress write writeend".split(" "))};if(h.readyState=h.INIT,e)return g=l().createObjectURL(a),void setTimeout(function(){var n,l;t.href=g,t.download=c,n=t,l=new MouseEvent("click"),n.dispatchEvent(l),p(),r(g),h.readyState=h.DONE});!function(){if((i||f&&u)&&n.FileReader){var t=new FileReader;return t.onloadend=function(){var l=i?t.result:t.result.replace(/^data:[^;]*;/,"data:attachment/file;");n.open(l,"_blank")||(n.location.href=l),l=void 0,h.readyState=h.DONE,p()},t.readAsDataURL(a),void(h.readyState=h.INIT)}g||(g=l().createObjectURL(a)),f?n.location.href=g:n.open(g,"_blank")||(n.location.href=g),h.readyState=h.DONE,p(),r(g)}()},c=a.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(n,l,t){return l=l||n.name||"download",t||(n=s(n)),navigator.msSaveOrOpenBlob(n,l)}:(c.abort=function(){},c.readyState=c.INIT=0,c.WRITING=1,c.DONE=2,c.error=c.onwritestart=c.onprogress=c.onwrite=c.onabort=c.onerror=c.onwriteend=null,function(n,l,t){return new a(n,l||n.name||"download",t)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);n.exports?n.exports.saveAs=u:null!==t("B9Yq")&&null!==t("PDX0")&&(void 0===(e=(function(){return u}).call(l,t,l,n))||(n.exports=e))},PDX0:function(n,l){(function(l){n.exports=l}).call(this,{})},QkQD:function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e=t("sE5F"),u=t("AytR"),i=t("CcnG"),o=t("ZYCi"),r=function(){function n(n,l){this.http=n,this.router=l,this.url=u.a.api_alojamiento+"requisite/",this.options=new e.g,this.options.headers=new e.d,this.options.headers.append("api_token",sessionStorage.getItem("api_token"))}return n.prototype.get=function(n){var l=this;return void 0===n?this.http.get(this.url,this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())}):this.http.get(this.url+"?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.get_paginate=function(n,l){var t=this;return this.http.get(this.url+"paginate?size="+n.toString()+"&page="+l.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){t.handledError(n.json())})},n.prototype.get_filtered=function(n){var l=this;return this.http.get(this.url+"filtered?filter="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.delete=function(n){var l=this;return this.http.delete(this.url+"?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.getBackUp=function(){var n=this;return this.http.get(this.url+"backup",this.options).toPromise().then(function(n){return n.json()}).catch(function(l){n.handledError(l.json())})},n.prototype.post=function(n){var l=this;return this.http.post(this.url,JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.put=function(n){var l=this;return this.http.put(this.url,JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.masiveLoad=function(n){var l=this;return this.http.post(this.url+"masive_load",JSON.stringify({data:n}),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.handledError=function(n){console.log(n),sessionStorage.clear(),this.router.navigate(["/login"])},n.ngInjectableDef=i.defineInjectable({factory:function(){return new n(i.inject(e.e),i.inject(o.l))},token:n,providedIn:"root"}),n}()},jdBv:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){return function(){this.requisite_name="",this.requisite_code="",this.mandatory=!1,this.value="",this.fullfill=!0,this.level=0,this.HTMLtype=""}}()},oEXc:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("Ip0R"),r=t("gIcY"),s=t("JEAp"),a=t("sE5F"),c=t("AytR"),d=t("ZYCi"),g=function(){function n(n,l){this.http=n,this.router=l,this.url=c.a.api_alojamiento+"registerrequisite/",this.options=new a.g,this.options.headers=new a.d,this.options.headers.append("api_token",sessionStorage.getItem("api_token"))}return n.prototype.get=function(n){var l=this;return void 0===n?this.http.get(this.url,this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())}):this.http.get(this.url+"?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.get_paginate=function(n,l){var t=this;return this.http.get(this.url+"paginate?size="+n.toString()+"&page="+l.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){t.handledError(n.json())})},n.prototype.delete=function(n){var l=this;return this.http.delete(this.url+"?id="+n.toString(),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.getBackUp=function(){var n=this;return this.http.get(this.url+"backup",this.options).toPromise().then(function(n){return n.json()}).catch(function(l){n.handledError(l.json())})},n.prototype.post=function(n){var l=this;return this.http.post(this.url,JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.put=function(n){var l=this;return this.http.put(this.url,JSON.stringify(n),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.masiveLoad=function(n){var l=this;return this.http.post(this.url+"masive_load",JSON.stringify({data:n}),this.options).toPromise().then(function(n){return n.json()}).catch(function(n){l.handledError(n.json())})},n.prototype.handledError=function(n){console.log(n),sessionStorage.clear(),this.router.navigate(["/login"])},n.ngInjectableDef=e.defineInjectable({factory:function(){return new n(e.inject(a.e),e.inject(d.l))},token:n,providedIn:"root"}),n}(),h=t("jdBv"),f=t("QkQD"),p=t("3Nac"),v=function(){function n(n,l,t,e,u){this.modalService=n,this.toastr=l,this.requisiteDataService=t,this.registerDataService=e,this.register_requisiteDataService=u,this.register_requisites=[],this.register_requisiteSelected=new h.a,this.currentPage=1,this.lastPage=1,this.showDialog=!1,this.recordsByPage=5,this.requisites=[],this.registers=[]}return n.prototype.ngOnInit=function(){this.goToPage(1),this.getRequisite(),this.getRegister()},n.prototype.selectRegisterRequisite=function(n){this.register_requisiteSelected=n},n.prototype.getRequisite=function(){var n=this;this.requisites=[],this.requisiteDataService.get().then(function(l){n.requisites=l}).catch(function(n){return console.log(n)})},n.prototype.getRegister=function(){var n=this;this.registers=[],this.registerDataService.get().then(function(l){n.registers=l}).catch(function(n){return console.log(n)})},n.prototype.goToPage=function(n){n<1||n>this.lastPage?this.toastr.errorToastr("La p\xe1gina solicitada no existe.","Error"):(this.currentPage=n,this.getRegisterRequisites())},n.prototype.getRegisterRequisites=function(){var n=this;this.register_requisites=[],this.register_requisiteSelected=new h.a,this.register_requisiteSelected.requisite_id=0,this.register_requisiteSelected.register_id=0,this.register_requisiteDataService.get_paginate(this.recordsByPage,this.currentPage).then(function(l){n.register_requisites=l.data,n.lastPage=l.last_page}).catch(function(n){return console.log(n)})},n.prototype.newRegisterRequisite=function(n){this.register_requisiteSelected=new h.a,this.register_requisiteSelected.requisite_id=0,this.register_requisiteSelected.register_id=0,this.openDialog(n)},n.prototype.editRegisterRequisite=function(n){void 0!==this.register_requisiteSelected.id?this.openDialog(n):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},n.prototype.deleteRegisterRequisite=function(){var n=this;void 0!==this.register_requisiteSelected.id?this.register_requisiteDataService.delete(this.register_requisiteSelected.id).then(function(l){n.toastr.successToastr("Registro Borrado satisfactoriamente.","Borrar"),n.getRegisterRequisites()}).catch(function(n){return console.log(n)}):this.toastr.errorToastr("Debe seleccionar un registro.","Error")},n.prototype.backup=function(){this.register_requisiteDataService.getBackUp().then(function(n){var l=new Blob([JSON.stringify(n)],{type:"text/plain"}),t=new Date;Object(s.saveAs)(l,t.toLocaleDateString()+"_RegisterRequisites.json")}).catch(function(n){return console.log(n)})},n.prototype.toCSV=function(){this.register_requisiteDataService.get().then(function(n){var l="id;fullfill;value;requisite_id;register_id\n";n.forEach(function(n){l+=n.id+";"+n.fullfill+";"+n.value+";"+n.requisite_id+";"+n.register_id+"\n"});var t=new Blob(["\ufeff",l],{type:"text/plain"}),e=new Date;Object(s.saveAs)(t,e.toLocaleDateString()+"_RegisterRequisites.csv")}).catch(function(n){return console.log(n)})},n.prototype.decodeUploadFile=function(n){var l=this,t=new FileReader;n.target.files&&n.target.files.length>0&&(t.readAsDataURL(n.target.files[0]),t.onload=function(){var n=t.result.toString().split(",")[1],e=JSON.parse(decodeURIComponent(escape(atob(n))));l.register_requisiteDataService.masiveLoad(e).then(function(n){l.goToPage(l.currentPage)}).catch(function(n){return console.log(n)})})},n.prototype.openDialog=function(n){var l=this;this.modalService.open(n,{centered:!0}).result.then(function(n){"Guardar click"===n&&(void 0===l.register_requisiteSelected.id?l.register_requisiteDataService.post(l.register_requisiteSelected).then(function(n){l.toastr.successToastr("Datos guardados satisfactoriamente.","Nuevo"),l.getRegisterRequisites()}).catch(function(n){return console.log(n)}):l.register_requisiteDataService.put(l.register_requisiteSelected).then(function(n){l.toastr.successToastr("Registro actualizado satisfactoriamente.","Actualizar"),l.getRegisterRequisites()}).catch(function(n){return console.log(n)}))},function(n){})},n}(),m=t("4GxJ"),b=t("3EpR"),y=e["\u0275crt"]({encapsulation:0,styles:[['.onoffswitch[_ngcontent-%COMP%]{position:relative;width:90px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.onoffswitch-checkbox[_ngcontent-%COMP%]{display:none}.onoffswitch-label[_ngcontent-%COMP%]{display:block;overflow:hidden;cursor:pointer;border:2px solid #999;border-radius:20px}.onoffswitch-inner[_ngcontent-%COMP%]{display:block;width:200%;margin-left:-100%;transition:margin .3s ease-in 0s}.onoffswitch-inner[_ngcontent-%COMP%]:after, .onoffswitch-inner[_ngcontent-%COMP%]:before{display:block;float:left;width:50%;height:30px;padding:0;line-height:30px;font-size:14px;font-family:Trebuchet,Arial,sans-serif;font-weight:700;box-sizing:border-box}.onoffswitch-inner[_ngcontent-%COMP%]:before{content:"SI";padding-left:21px;background-color:#5ebd79;color:#fff}.onoffswitch-inner[_ngcontent-%COMP%]:after{content:"NO";padding-right:21px;background-color:#eee;color:#999;text-align:right}.onoffswitch-switch[_ngcontent-%COMP%]{display:block;width:30px;margin:0;background:#fff;position:absolute;top:0;bottom:0;right:56px;border:2px solid #999;border-radius:20px;transition:all .3s ease-in 0s}.onoffswitch-checkbox[_ngcontent-%COMP%]:checked + .onoffswitch-label[_ngcontent-%COMP%]   .onoffswitch-inner[_ngcontent-%COMP%]{margin-left:0}.onoffswitch-checkbox[_ngcontent-%COMP%]:checked + .onoffswitch-label[_ngcontent-%COMP%]   .onoffswitch-switch[_ngcontent-%COMP%]{right:0}']],data:{}});function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,"span",[["class","far fa-hand-point-right"]],null,null,null,null,null))],null,null)}function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,7,"tr",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectRegisterRequisite(n.context.$implicit)&&e),e},null,null)),(n()(),e["\u0275eld"](1,0,null,null,2,"td",[["class","text-right"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](3,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](4,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e["\u0275ted"](5,null,["",""])),(n()(),e["\u0275eld"](6,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),e["\u0275ted"](7,null,["",""]))],function(n,l){n(l,3,0,l.component.register_requisiteSelected===l.context.$implicit)},function(n,l){n(l,5,0,l.context.$implicit.fullfill),n(l,7,0,l.context.$implicit.value)})}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","Primera P\xe1gina"],["type","button"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function w(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","Primera P\xe1gina"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToPage(1)&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Primera"]))],null,null)}function S(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Anterior"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.goToPage(1*u.currentPage-1)&&e),e},null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,1*l.component.currentPage-1)})}function j(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","P\xe1gina Siguiente"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.goToPage(1*u.currentPage+1)&&e),e},null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,1*l.component.currentPage+1)})}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["title","\xdaltima P\xe1gina"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.goToPage(u.lastPage)&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-light"],["disabled",""],["title","\xdaltima P\xe1gina"],["type","button"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xdaltima"]))],null,null)}function q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,r.n,[e.ElementRef,e.Renderer2,[2,r.o]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,r.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),e["\u0275ted"](3,null,[" "," "]))],function(n,l){n(l,1,0,e["\u0275inlineInterpolate"](1,"",l.context.$implicit.id,"")),n(l,2,0,e["\u0275inlineInterpolate"](1,"",l.context.$implicit.id,""))},function(n,l){n(l,3,0,l.context.$implicit.id)})}function E(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,r.n,[e.ElementRef,e.Renderer2,[2,r.o]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,r.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),e["\u0275ted"](3,null,[" "," "]))],function(n,l){n(l,1,0,e["\u0275inlineInterpolate"](1,"",l.context.$implicit.id,"")),n(l,2,0,e["\u0275inlineInterpolate"](1,"",l.context.$implicit.id,""))},function(n,l){n(l,3,0,l.context.$implicit.id)})}function I(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Datos:"])),(n()(),e["\u0275eld"](3,0,null,null,2,"button",[["class","close"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.context.$implicit.dismiss("Cross click")&&e),e},null,null)),(n()(),e["\u0275eld"](4,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\xd7"])),(n()(),e["\u0275eld"](6,0,null,null,58,"div",[["class","modal-body"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,57,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,null,56,"div",[["class","col-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,13,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","fullfill"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["fullfill"])),(n()(),e["\u0275eld"](12,0,null,null,10,"div",[["class","col-8"]],null,null,null,null,null)),(n()(),e["\u0275eld"](13,0,null,null,9,"div",[["class","onoffswitch"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,5,"input",[["class","onoffswitch-checkbox"],["id","fullfill"],["name","fullfill"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var u=!0,i=n.component;return"change"===l&&(u=!1!==e["\u0275nov"](n,15).onChange(t.target.checked)&&u),"blur"===l&&(u=!1!==e["\u0275nov"](n,15).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.register_requisiteSelected.fullfill=t)&&u),u},null,null)),e["\u0275did"](15,16384,null,0,r.b,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,r.h,function(n){return[n]},[r.b]),e["\u0275did"](17,671744,null,0,r.m,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,r.i,null,[r.m]),e["\u0275did"](19,16384,null,0,r.j,[[4,r.i]],null,null),(n()(),e["\u0275eld"](20,0,null,null,2,"label",[["class","onoffswitch-label"],["for","fullfill"]],null,null,null,null,null)),(n()(),e["\u0275eld"](21,0,null,null,0,"span",[["class","onoffswitch-inner"]],null,null,null,null,null)),(n()(),e["\u0275eld"](22,0,null,null,0,"span",[["class","onoffswitch-switch"]],null,null,null,null,null)),(n()(),e["\u0275eld"](23,0,null,null,9,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](24,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","value"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["value"])),(n()(),e["\u0275eld"](26,0,null,null,6,"div",[["class","col-8"]],null,null,null,null,null)),(n()(),e["\u0275eld"](27,0,null,null,5,"input",[["class","form-control"],["id","value"],["name","value"],["placeholder","value"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var u=!0,i=n.component;return"input"===l&&(u=!1!==e["\u0275nov"](n,28)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e["\u0275nov"](n,28).onTouched()&&u),"compositionstart"===l&&(u=!1!==e["\u0275nov"](n,28)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e["\u0275nov"](n,28)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(i.register_requisiteSelected.value=t)&&u),u},null,null)),e["\u0275did"](28,16384,null,0,r.d,[e.Renderer2,e.ElementRef,[2,r.a]],null,null),e["\u0275prd"](1024,null,r.h,function(n){return[n]},[r.d]),e["\u0275did"](30,671744,null,0,r.m,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,r.i,null,[r.m]),e["\u0275did"](32,16384,null,0,r.j,[[4,r.i]],null,null),(n()(),e["\u0275eld"](33,0,null,null,15,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](34,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","requisite_id"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Requisite"])),(n()(),e["\u0275eld"](36,0,null,null,12,"div",[["class","col-8"]],null,null,null,null,null)),(n()(),e["\u0275eld"](37,0,null,null,11,"select",[["class","form-control"],["id","requisite_id"],["name","requisite_id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var u=!0,i=n.component;return"change"===l&&(u=!1!==e["\u0275nov"](n,38).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e["\u0275nov"](n,38).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.register_requisiteSelected.requisite_id=t)&&u),u},null,null)),e["\u0275did"](38,16384,null,0,r.o,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,r.h,function(n){return[n]},[r.o]),e["\u0275did"](40,671744,null,0,r.m,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,r.i,null,[r.m]),e["\u0275did"](42,16384,null,0,r.j,[[4,r.i]],null,null),(n()(),e["\u0275eld"](43,0,null,null,3,"option",[["selected",""],["value","0"]],null,null,null,null,null)),e["\u0275did"](44,147456,null,0,r.n,[e.ElementRef,e.Renderer2,[2,r.o]],{value:[0,"value"]},null),e["\u0275did"](45,147456,null,0,r.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),e["\u0275ted"](-1,null,["Seleccione..."])),(n()(),e["\u0275and"](16777216,null,null,1,null,q)),e["\u0275did"](48,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](49,0,null,null,15,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](50,0,null,null,1,"label",[["class","col-4 col-form-label"],["for","register_id"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Register"])),(n()(),e["\u0275eld"](52,0,null,null,12,"div",[["class","col-8"]],null,null,null,null,null)),(n()(),e["\u0275eld"](53,0,null,null,11,"select",[["class","form-control"],["id","register_id"],["name","register_id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(n,l,t){var u=!0,i=n.component;return"change"===l&&(u=!1!==e["\u0275nov"](n,54).onChange(t.target.value)&&u),"blur"===l&&(u=!1!==e["\u0275nov"](n,54).onTouched()&&u),"ngModelChange"===l&&(u=!1!==(i.register_requisiteSelected.register_id=t)&&u),u},null,null)),e["\u0275did"](54,16384,null,0,r.o,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,r.h,function(n){return[n]},[r.o]),e["\u0275did"](56,671744,null,0,r.m,[[8,null],[8,null],[8,null],[6,r.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,r.i,null,[r.m]),e["\u0275did"](58,16384,null,0,r.j,[[4,r.i]],null,null),(n()(),e["\u0275eld"](59,0,null,null,3,"option",[["selected",""],["value","0"]],null,null,null,null,null)),e["\u0275did"](60,147456,null,0,r.n,[e.ElementRef,e.Renderer2,[2,r.o]],{value:[0,"value"]},null),e["\u0275did"](61,147456,null,0,r.t,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),e["\u0275ted"](-1,null,["Seleccione..."])),(n()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](64,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](65,0,null,null,4,"div",[["class","modal-footer"]],null,null,null,null,null)),(n()(),e["\u0275eld"](66,0,null,null,1,"button",[["class","btn btn-outline-success"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.context.$implicit.close("Guardar click")&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Guardar"])),(n()(),e["\u0275eld"](68,0,null,null,1,"button",[["class","btn btn-outline-danger"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.context.$implicit.close("Cancelar click")&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Cancelar"]))],function(n,l){var t=l.component;n(l,17,0,"fullfill",t.register_requisiteSelected.fullfill),n(l,30,0,"value",t.register_requisiteSelected.value),n(l,40,0,"requisite_id",t.register_requisiteSelected.requisite_id),n(l,44,0,"0"),n(l,45,0,"0"),n(l,48,0,t.requisites),n(l,56,0,"register_id",t.register_requisiteSelected.register_id),n(l,60,0,"0"),n(l,61,0,"0"),n(l,64,0,t.registers)},function(n,l){n(l,14,0,e["\u0275nov"](l,19).ngClassUntouched,e["\u0275nov"](l,19).ngClassTouched,e["\u0275nov"](l,19).ngClassPristine,e["\u0275nov"](l,19).ngClassDirty,e["\u0275nov"](l,19).ngClassValid,e["\u0275nov"](l,19).ngClassInvalid,e["\u0275nov"](l,19).ngClassPending),n(l,27,0,e["\u0275nov"](l,32).ngClassUntouched,e["\u0275nov"](l,32).ngClassTouched,e["\u0275nov"](l,32).ngClassPristine,e["\u0275nov"](l,32).ngClassDirty,e["\u0275nov"](l,32).ngClassValid,e["\u0275nov"](l,32).ngClassInvalid,e["\u0275nov"](l,32).ngClassPending),n(l,37,0,e["\u0275nov"](l,42).ngClassUntouched,e["\u0275nov"](l,42).ngClassTouched,e["\u0275nov"](l,42).ngClassPristine,e["\u0275nov"](l,42).ngClassDirty,e["\u0275nov"](l,42).ngClassValid,e["\u0275nov"](l,42).ngClassInvalid,e["\u0275nov"](l,42).ngClassPending),n(l,53,0,e["\u0275nov"](l,58).ngClassUntouched,e["\u0275nov"](l,58).ngClassTouched,e["\u0275nov"](l,58).ngClassPristine,e["\u0275nov"](l,58).ngClassDirty,e["\u0275nov"](l,58).ngClassValid,e["\u0275nov"](l,58).ngClassInvalid,e["\u0275nov"](l,58).ngClassPending)})}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"h1",[["class","col-12 text-right"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,[" RegisterRequisite "])),(n()(),e["\u0275eld"](3,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,20,"div",[["class","col-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](5,0,null,null,19,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(n()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary"],["title","Actualizar"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.goToPage(u.currentPage)&&e),e},null,null)),(n()(),e["\u0275eld"](8,0,null,null,0,"i",[["class","fas fa-sync"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-success"],["title","Nuevo"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.newRegisterRequisite(e["\u0275nov"](n,62))&&u),u},null,null)),(n()(),e["\u0275eld"](11,0,null,null,0,"i",[["class","fas fa-file"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-warning"],["title","Editar"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.editRegisterRequisite(e["\u0275nov"](n,62))&&u),u},null,null)),(n()(),e["\u0275eld"](13,0,null,null,0,"i",[["class","fas fa-edit"]],null,null,null,null,null)),(n()(),e["\u0275eld"](14,0,null,null,2,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-danger"],["title","Eliminar"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.deleteRegisterRequisite()&&e),e},null,null)),(n()(),e["\u0275eld"](16,0,null,null,0,"i",[["class","fas fa-trash"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,7,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](18,0,null,null,1,"button",[["class","btn btn-dark"],["title","BackUp"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.backup()&&e),e},null,null)),(n()(),e["\u0275eld"](19,0,null,null,0,"i",[["class","fas fa-download"]],null,null,null,null,null)),(n()(),e["\u0275eld"](20,0,null,null,1,"button",[["class","btn btn-dark"],["title","Exportar CSV"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toCSV()&&e),e},null,null)),(n()(),e["\u0275eld"](21,0,null,null,0,"i",[["class","fas fa-file-csv"]],null,null,null,null,null)),(n()(),e["\u0275eld"](22,0,null,null,1,"button",[["class","btn btn-dark"],["title","Cargar"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,24).click()&&u),u},null,null)),(n()(),e["\u0275eld"](23,0,null,null,0,"i",[["class","fas fa-upload"]],null,null,null,null,null)),(n()(),e["\u0275eld"](24,0,[["uploadInput",1]],null,0,"input",[["accept",".json"],["class","form-control"],["type","file"]],[[8,"hidden",0]],[[null,"change"]],function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.decodeUploadFile(t)&&e),e},null,null)),(n()(),e["\u0275eld"](25,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](26,0,null,null,12,"div",[["class","col-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](27,0,null,null,11,"table",[["class","table table-hover mt-2"]],null,null,null,null,null)),(n()(),e["\u0275eld"](28,0,null,null,7,"thead",[],null,null,null,null,null)),(n()(),e["\u0275eld"](29,0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),e["\u0275eld"](30,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Seleccionado"])),(n()(),e["\u0275eld"](32,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["fullfill"])),(n()(),e["\u0275eld"](34,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["value"])),(n()(),e["\u0275eld"](36,0,null,null,2,"tbody",[],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](38,278528,null,0,o.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](39,0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](40,0,null,null,21,"div",[["class","col-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](41,0,null,null,20,"div",[["class","btn-toolbar"],["role","toolbar"]],null,null,null,null,null)),(n()(),e["\u0275eld"](42,0,null,null,14,"div",[["class","btn-group mr-2"],["role","group"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](44,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](46,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](48,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](49,0,null,null,1,"button",[["class","btn btn-primary"],["title","P\xe1gina Actual"],["type","button"]],null,null,null,null,null)),(n()(),e["\u0275ted"](50,null,["",""])),(n()(),e["\u0275and"](16777216,null,null,1,null,j)),e["\u0275did"](52,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](54,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](56,16384,null,0,o.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](57,0,null,null,4,"div",[["class","input-group"]],null,null,null,null,null)),(n()(),e["\u0275eld"](58,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),e["\u0275eld"](59,0,null,null,1,"button",[["class","input-group-text btn btn-success"],["title","Ir a la P\xe1gina"],["type","button"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.goToPage(e["\u0275nov"](n,61).value)&&u),u},null,null)),(n()(),e["\u0275ted"](-1,null,["Ir a"])),(n()(),e["\u0275eld"](61,0,[["goToPageNumber",1]],null,0,"input",[["class","form-control"],["placeholder","Ir a la P\xe1gina"],["type","number"]],[[8,"min",0],[8,"max",0]],null,null,null,null)),(n()(),e["\u0275and"](0,[["content",2]],null,0,null,I))],function(n,l){var t=l.component;n(l,38,0,t.register_requisites),n(l,44,0,1===t.currentPage),n(l,46,0,1!==t.currentPage),n(l,48,0,t.currentPage>1),n(l,52,0,t.currentPage<t.lastPage),n(l,54,0,t.currentPage!==t.lastPage),n(l,56,0,t.currentPage===t.lastPage)},function(n,l){var t=l.component;n(l,24,0,!0),n(l,50,0,t.currentPage),n(l,61,0,e["\u0275inlineInterpolate"](1,"",1,""),e["\u0275inlineInterpolate"](1,"",t.lastPage,""))})}function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-registerrequisite",[],null,null,null,O,y)),e["\u0275did"](1,114688,null,0,v,[m.y,b.a,f.a,p.a,g],null,null)],function(n,l){n(l,1,0)},null)}var D=e["\u0275ccf"]("app-registerrequisite",v,x,{},{},[]),T=function(){return function(){}}();t.d(l,"RegisterRequisiteModuleNgFactory",function(){return N});var N=e["\u0275cmf"](u,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,D]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,o.NgLocalization,o.NgLocaleLocalization,[e.LOCALE_ID,[2,o["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,r.s,r.s,[]),e["\u0275mpd"](4608,m.y,m.y,[e.ComponentFactoryResolver,e.Injector,m.tb,m.z]),e["\u0275mpd"](4608,f.a,f.a,[a.e,d.l]),e["\u0275mpd"](4608,p.a,p.a,[a.e,d.l]),e["\u0275mpd"](4608,g,g,[a.e,d.l]),e["\u0275mpd"](1073742336,o.CommonModule,o.CommonModule,[]),e["\u0275mpd"](1073742336,d.o,d.o,[[2,d.u],[2,d.l]]),e["\u0275mpd"](1073742336,T,T,[]),e["\u0275mpd"](1073742336,r.p,r.p,[]),e["\u0275mpd"](1073742336,r.e,r.e,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,d.j,function(){return[[{path:"",component:v}]]},[])])})}}]);