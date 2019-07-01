import { ReceptionRoomService } from './../../../services/CRUD/ALOJAMIENTO/receptionroom.service';
import { MailerService } from './../../../services/negocio/mailer.service';
import { DeclarationAttachmentService } from './../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { FloorAuthorizationCertificateService } from './../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { PayService } from './../../../services/CRUD/FINANCIERO/pay.service';
import { DeclarationAttachment } from './../../../models/FINANCIERO/DeclarationAttachment';
import { FloorAuthorizationCertificate } from './../../../models/BASE/FloorAuthorizationCertificate';
import { Router } from '@angular/router'; 

import { ApprovalStateAttachment } from './../../../models/ALOJAMIENTO/ApprovalStateAttachment';
import { ApprovalStateAttachmentService } from './../../../services/CRUD/ALOJAMIENTO/approvalstateattachment.service';
import { ApprovalStateService } from './../../../services/CRUD/ALOJAMIENTO/approvalstate.service';
import { ApprovalState } from 'src/app/models/ALOJAMIENTO/ApprovalState';
import { Approval } from 'src/app/models/ALOJAMIENTO/Approval';
import { ConsultorService } from 'src/app/services/negocio/consultor.service';
import { DeclarationService } from 'src/app/services/CRUD/FINANCIERO/declaration.service';
import { DeclarationItemValue } from 'src/app/models/FINANCIERO/DeclarationItemValue';
import { DeclarationItemService } from 'src/app/services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItemCategoryService } from 'src/app/services/CRUD/FINANCIERO/declarationitemcategory.service';
import { DeclarationItem } from 'src/app/models/FINANCIERO/DeclarationItem';
import { DeclarationItemCategory } from 'src/app/models/FINANCIERO/DeclarationItemCategory';
import { Pay } from 'src/app/models/FINANCIERO/Pay';
import { Declaration } from 'src/app/models/FINANCIERO/Declaration';
import { RegisterState } from 'src/app/models/ALOJAMIENTO/RegisterState';
import { ComplementaryServiceFood } from 'src/app/models/ALOJAMIENTO/ComplementaryServiceFood';
import { ComplementaryServiceFoodTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';
import { ComplementaryServiceFoodType } from 'src/app/models/ALOJAMIENTO/ComplementaryServiceFoodType';
import { EstablishmentCertificationAttachment } from 'src/app/models/BASE/EstablishmentCertificationAttachment';
import { AccountRol } from 'src/app/models/AUTH/AccountRol';
import { Agreement } from 'src/app/models/BASE/Agreement';
import { UserService } from 'src/app/services/profile/user.service';
import { DinardapService } from 'src/app/services/negocio/dinardap.service';
import { CapacityTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/capacitytype.service';
import { CapacityType } from 'src/app/models/ALOJAMIENTO/CapacityType';
import { State } from 'src/app/models/ALOJAMIENTO/State';
import { TariffTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/tarifftype.service';
import { BedTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/bedtype.service';
import { BedType } from 'src/app/models/ALOJAMIENTO/BedType';
import { Bed } from 'src/app/models/ALOJAMIENTO/Bed';
import { Capacity } from 'src/app/models/ALOJAMIENTO/Capacity';
import { RegisterRequisite } from 'src/app/models/ALOJAMIENTO/RegisterRequisite';
import { EstablishmentCertificationTypeService } from 'src/app/services/CRUD/BASE/establishmentcertificationtype.service';
import { EstablishmentCertificationType } from 'src/app/models/BASE/EstablishmentCertificationType';
import { Gender } from 'src/app/models/BASE/Gender';
import { SystemNameService } from 'src/app/services/CRUD/BASE/systemname.service';
import { EstablishmentOnRuc } from 'src/app/models/negocio/EstablishmentOnRuc';
import { GroupTypeService } from 'src/app/services/CRUD/BASE/grouptype.service';
import { GroupType } from 'src/app/models/BASE/GroupType';
import { Requisite } from 'src/app/models/ALOJAMIENTO/Requisite';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentPicture } from 'src/app/models/BASE/EstablishmentPicture';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';

import { Establishment } from 'src/app/models/BASE/Establishment';
import { EstablishmentPropertyType } from 'src/app/models/BASE/EstablishmentPropertyType';
import { TaxPayerType } from 'src/app/models/BASE/TaxPayerType';
import { EstablishmentCertification } from 'src/app/models/BASE/EstablishmentCertification';
import { Language } from 'src/app/models/BASE/Language';
import { RegistroDataCarrier } from 'src/app/models/negocio/RegistroDataCarrier';
import { TaxPayerTypeService } from 'src/app/services/CRUD/BASE/taxpayertype.service';
import { RucService } from 'src/app/services/CRUD/BASE/ruc.service';
import { EstablishmentService } from 'src/app/services/CRUD/BASE/establishment.service';
import { EstablishmentPropertyTypeService } from 'src/app/services/CRUD/BASE/establishmentpropertytype.service';
import { LanguageService } from 'src/app/services/CRUD/BASE/language.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { PreviewRegisterCode } from 'src/app/models/BASE/PreviewRegisterCode';
import { Ubication } from 'src/app/models/BASE/Ubication';
import { Worker } from 'src/app/models/BASE/Worker';
import { Register } from 'src/app/models/ALOJAMIENTO/Register';
import { ComplementaryServiceType } from 'src/app/models/ALOJAMIENTO/ComplementaryServiceType';
import { ComplementaryServiceTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicetype.service';
import { RegisterType } from 'src/app/models/ALOJAMIENTO/RegisterType';
import { SystemName } from 'src/app/models/BASE/SystemName';
import { WorkerGroup } from 'src/app/models/BASE/WorkerGroup';
import { WorkerGroupService } from 'src/app/services/CRUD/BASE/workergroup.service';
import { GenderService } from 'src/app/services/CRUD/BASE/gender.service';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { RequisiteService } from 'src/app/services/CRUD/ALOJAMIENTO/requisite.service';
import { TariffType } from 'src/app/models/ALOJAMIENTO/TariffType';
import { Tariff } from 'src/app/models/ALOJAMIENTO/Tariff';
import { RucNameType } from 'src/app/models/BASE/RucNameType';
import { RucNameTypeService } from 'src/app/services/CRUD/BASE/rucnametype.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { User } from 'src/app/models/profile/User';
import { Ruc } from 'src/app/models/BASE/Ruc';
import { GroupGiven } from 'src/app/models/BASE/GroupGiven';
import { PersonRepresentative } from 'src/app/models/BASE/PersonRepresentative';
import { PersonRepresentativeAttachment } from 'src/app/models/BASE/PersonRepresentativeAttachment';
import { PersonRepresentativeAttachmentService } from 'src/app/services/CRUD/BASE/personrepresentativeattachment.service';
import { AgreementService } from 'src/app/services/CRUD/BASE/agreement.service';
import { EstablishmentPictureService } from 'src/app/services/CRUD/BASE/establishmentpicture.service';
import { EstablishmentCertificationAttachmentService } from 'src/app/services/CRUD/BASE/establishmentcertificationattachment.service';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { RegisterStateService } from 'src/app/services/CRUD/ALOJAMIENTO/registerstate.service';
import { ReceptionRoom } from 'src/app/models/ALOJAMIENTO/ReceptionRoom';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   @ViewChild('fotoFachadaInput') fotoFachadaInput;
   @ViewChild('EstablishmentCertificationAttachedFile') EstablishmentCertificationAttachedFile;
   @ViewChild('pasos') pasosTabSet;
   @ViewChild('pasosSuperiores') pasosSuperioresTabSet;
   idTramiteEstadoFilter = 0;
   tramite = '-';
   tabActive = 'paso1';
   actualizando = false;
   activando = false;
   inactivando = false;
   reclasificando = false;
   recategorizando = false;
   tabActiveSuperior = 'tab1';
   selectedNameType: RucNameType = new RucNameType();
   total_workers = 0;
   salaRecepciones: ReceptionRoom = new ReceptionRoom();
   franchiseChainNameValidated = false;
   establecimientos_pendiente = false;
   rechazarTramite = false;
   digito = '';
   tarifarioResponse: Tariff[] = [];
   tarifarioRack = {cabecera: [], valores: []};
   currentPagePays = 1;
   balance: DeclarationAttachment = new DeclarationAttachment();
   lastPagePays = 1;
   recordsByPagePays = 5;
   rowsPays = [];
   columnsPays = [];
   dataPays = [];
   pays: Pay[] = [];
   actividadSelected = '-';
   regiones = [];
   regionSelectedCode = '-';
   certificadoUsoSuelo: FloorAuthorizationCertificate = new FloorAuthorizationCertificate();
   franchises_rucSelectedId = 0;
   fechaNombramientoOK = false;
   allowed_capacity_types: CapacityType[] = []; 


   //ASIGNACIONES
   registerIdSelected = 0;
   stateTramite: number = 0;
   stateTramiteId: number = 0;
   inspectores: User[] = [];
   financieros: User[] = [];
   inspectorSelectedId: number = 0;
   registerApprovals: ApprovalState[] = [];
   registerApprovalCoordinador: ApprovalState = new ApprovalState();
   registerApprovalInspector: ApprovalState = new ApprovalState();
   registerApprovalFinanciero: ApprovalState = new ApprovalState();
   isAssigned = false;
   hasIspectionDate  = false;
   hasInform  = false;
   hasRegisterReady = false;
   canSave = true;
   hasRequisites = false;
   informeApprovalStateAttachment = new ApprovalStateAttachment();
   requisitosApprovalStateAttachment = new ApprovalStateAttachment();
   financialSelectedId: number = 0;
   isAssignedFinancial = false;
   //RREGISTROS MINTUR
   registers_mintur = [];
   registerMinturSelected: any = null;
   currentPageMinturRegisters = 1;
   lastPageMinturRegisters = 1;
   recordsByPageRegisterMintur = 5;
   mostrarDataRegisterMintur = false;
   config: any = {
      paging: true,
      filtering: {filterString: ''},
      className: ['table-striped', 'table-hover', 'table-bordered']
   };
   rows = [];
   columns = [];
   data = [];
  
  //DATOS RUC
  editable = false;
  imContactRuc: Boolean = true;
  roles:any[] = [];
  terminosCondiciones = false;
  terminosCondicionesAgreement: Agreement = new Agreement();
  rucReady = false;
  currentPageRegister = 1;
  lastPageRegister = 1;
  recordsByPageRegister = 5;
  mostrarData = true;
  group_types: GroupType[] = [];
  rucs_registrados: RegistroDataCarrier[] = [];
  ruc_registro_selected: RegistroDataCarrier = new RegistroDataCarrier();
  rucData = 'CONECTÁNDOSE AL SRI...';
  cedulaData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
  representanteCedulaData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
  cedulaEstablishmentContactData = 'CONECTÁNDOSE AL REGISTRO CIVIL...';
  tax_payer_types: TaxPayerType[] = [];
  zonalSelectedCode = '-';
  provinciaSelectedCode = '-';
  cantonSelectedCode = '-';
  groupTypeSelected: GroupType = new GroupType();
  rucValidated = false;
  identificationRepresentativePersonValidated = false;
  identificationContactValidated = false;
  addressContactValidated = false;
  emailContactValidated = false;
  mainPhoneContactValidated = false;
  secondaryPhoneContactValidated = true;
  user: User = new User();

  //DATOS ESTABLECIMIENTO
  rowsEstablishment = [];
  columnsEstablishment = [];
  dataEstablishment = [];

  establishment_certification_types = [];
  identificationContactEstablishmentValidated = false;
  mainPhoneContactEstablishmentValidated = false;
  secondaryPhoneContactEstablishmentValidated = true;
  emailContactEstablishmentValidated = false;
  currentPageEstablishment = 1;
  lastPageEstablishment = 1;
  recordsByPageEstablishment = 5;
  mostrarDataEstablishment = false;
  zonalEstablishmentSelectedCode = '-';
  provinciaEstablishmentSelectedCode = '-';
  cantonEstablishmentSelectedCode = '-';
  zonalesEstablishment: Ubication[] = [];
  provinciasEstablishment: Ubication[] = [];
  ruc_name_types: RucNameType[] = [];
  cantonesEstablishment: Ubication[];
  parroquiasEstablishment: Ubication[];
  preview_register_codes: PreviewRegisterCode[] = [];
  establishment_selected: Establishment = new Establishment();
  establishment_property_types: EstablishmentPropertyType[] = [];
  establishment_selected_picture: EstablishmentPicture = new EstablishmentPicture();
  languages: Language[] = [];
  languages_establishmentSelectedId = 0;
  ubications: Ubication[] = [];
  system_names: SystemName[] = [];
  workers: Worker[] = [];
  worker_establishmentSelected: Worker = new Worker();
  worker_groups: WorkerGroup[] = [];
  genders: Gender[] = [];
  establishment_certification_types_categories: EstablishmentCertificationType[] = [];
  establishment_certifications: EstablishmentCertification[] = [];
  preview_register_codes_establishmentSelected = new PreviewRegisterCode();
  establishmentComercialNameValidated = false;
  addressEstablishmentValidated = false;
  mainPhoneEstablishmentValidated = false;
  secondaryPhoneEstablishmentValidated = true;
  urlwebEstablishmentValidated = true;
  establishment_certifications_establishmentSelected: EstablishmentCertification = new EstablishmentCertification();

  //DATOS REGISTRO
  rowsRegister = [];
  columnsRegister = [];
  dataRegister = [];

  estados_tramites: State[];
  specific_states: State[];
  estado_tramite_selected_code: String = '1';
  statusSelected: RegisterState = new RegisterState();
  mostrarDataRegister = false;
  showRequisites = false;
  complementaryServiceFoodSelected: ComplementaryServiceFood = new ComplementaryServiceFood();
  rucEstablishmentRegisterSelected: Register = new Register();
  clasifications_registers: RegisterType[] = [];
  categories_registers: RegisterType[] = [];
  register_types: RegisterType[] = [];
  complementary_service_types: ComplementaryServiceType[] = [];
  complementary_service_types_categories: ComplementaryServiceType[] = [];
  requisitesByRegisterType: Requisite[] = [];
  categorySelectedCode = '-';
  complementary_service_types_registerSelectedId = 0;
  capacitySelected: Capacity = new Capacity();
  bedSelected: Bed = new Bed();
  alowed_bed_types: BedType[] = []; 
  register_establishment_capacities_registerSelectedId = 0;
  rack_prices_registerSelectedId = 0;
  establishment_service_offers_registerSelectedId = 0;
  tarifas: any[] = [];
  states: State[] = [];
  complementaryServiceFoodTypes: ComplementaryServiceFoodType[] = [];
  
  //DINARDAP
  consumoCedula = false;
  consumoCedulaEstablishmentContact = false;
  consumoRuc = false;
  consumoCedulaRepresentanteLegal = false;
  SRIOK = false;
  REGCIVILOK = false;
  REGCIVILOKEstablishment = false;
  REGCIVILREPRESENTANTELEGALOK = false;
  guardando = false;

  //DECLARACIONES
  currentPageDeclaration = 1;
  lastPageDeclaration = 1;
  recordsByPageDeclaration = 5;
  establishment_declarations_selected = new Establishment();
  declaration_selected: Declaration = new Declaration();
  mostrarDataDeclaration = false;
  declarations: Declaration[] = [];
  payDeclarationSelected: Pay = new Pay();
  declarationItemsToShow: any[] = [];
  declarationItemsCategories: DeclarationItemCategory[] = [];
  declarationItems: DeclarationItem[] = [];
  maxYear: number = 2019;
  idRegister: number = 0;

  constructor(private toastr: ToastrManager,
              private receptionRoomDataService: ReceptionRoomService,
              private payDataService: PayService,
              private floorAuthorizationCertificateDataService: FloorAuthorizationCertificateService,
              private declarationAttachmentDataService: DeclarationAttachmentService,
              private mailerDataService: MailerService,
              private router: Router, 
              private approvalStateDataService: ApprovalStateService,
              private consultorDataService: ConsultorService,
              private userDataService: UserService,
              private registerStateDataService: RegisterStateService,
              private dinardapDataService: DinardapService,
              private rucDataService: RucService,
              private approvalStateAttachmentDataService: ApprovalStateAttachmentService,
              private modalService: NgbModal,
              private agreementDataService: AgreementService,
              private rucNameTypeDataService: RucNameTypeService,
              private group_typeDataService: GroupTypeService,
              private languageDataService: LanguageService,
              private complementaryServiceFoodTypeDataService: ComplementaryServiceFoodTypeService,
              private establishmentPictureDataService: EstablishmentPictureService,
              private ubicationDataService: UbicationService,
              private establishmentCertificationAttachmentDataService: EstablishmentCertificationAttachmentService,
              private personRepresentativeAttachmentDataService: PersonRepresentativeAttachmentService,
              private complementary_service_typeDataService: ComplementaryServiceTypeService,
              private systemNameDataService: SystemNameService,
              private genderDataService: GenderService,
              private workerGroupDataService: WorkerGroupService,
              private capacityTypeDataService: CapacityTypeService,
              private establishment_certification_typeDataService: EstablishmentCertificationTypeService,
              private establishment_property_typeDataService: EstablishmentPropertyTypeService,
              private establishmentDataService: EstablishmentService,
              private register_typeDataService: RegisterTypeService,
              private requisiteDataService: RequisiteService,
              private bedTypeDataService: BedTypeService,
              private declarationDataService: DeclarationService,
              private declarationItemCategoryDataService: DeclarationItemCategoryService,
              private declarationItemDataService: DeclarationItemService,
              private tariffTypeDataService: TariffTypeService,
              private stateDataService: StateService,
              private tax_payer_typeDataService: TaxPayerTypeService,
              private registerDataService: RegisterService) {}

  ngOnInit() {
   this.refresh();
   this.getUser();
   this.getDeclarationCategories();
   this.getDeclarationItems();
   this.getMaxDeclarationDate();
   this.getTramiteStates();
  }

  filterByTramiteState(tramite?: String) {
     let filtroTexto: String = '';
     this.estados_tramites.forEach(estado => {
        if (estado.id == this.idTramiteEstadoFilter) {
         filtroTexto = estado.name;
        }
     });
     if(typeof tramite !== 'undefined') {
        if (tramite == '-') {
         this.config.filtering = {filterString: filtroTexto};
        } else {
         this.config.filtering = {filterString: filtroTexto + ' - ' + tramite};
        }
     } else {
      this.config.filtering = {filterString: filtroTexto};
     }
     this.onChangeTable(this.config);
  }

  editableTramiteRequerido(): Boolean {
   if (this.estado_tramite_selected_code == '1' || this.estado_tramite_selected_code == '9') {
      return true;
   }
   return false;
  }

  onChangeTablePays(config: any, event?): any {
   const page: any = {page: this.currentPageEstablishment, itemsPerPage: this.recordsByPageEstablishment};
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilterPays(this.dataPays, this.config);
   const sortedData = this.changeSortPays(filteredData, this.config);
   this.rowsPays = page && config.paging ? this.changePagePays(page, sortedData) : sortedData;
  }

  guardarRecepcionRoom(register_id: number) {
     this.salaRecepciones.register_id = register_id;
     if (this.salaRecepciones.id == 0 || typeof this.salaRecepciones.id == 'undefined') {
      this.receptionRoomDataService.post(this.salaRecepciones).then( r => {

      }).catch( e => { console.log(e); });
     } else {
      this.receptionRoomDataService.put(this.salaRecepciones).then( r => {
         
      }).catch( e => { console.log(e); });
     }
  }

  changeFilterPays(data: any, config: any): any {
   let filteredData: Array<any> = data;
   this.columnsPays.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columnsPays.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  aceptarTramite() {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de Aprobar el resultado emitido por el Técnico Zonal?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Aprobado!',
          'El resultado emitido por el Técnico Zonal ha sido aprobado',
          'success'
        );
        this.registerApprovalCoordinador.id_user = this.user.id;
        this.registerApprovalCoordinador.notes = '';
        const today = new Date();
        this.registerApprovalCoordinador.date_assigment = today;
        this.registerApprovalCoordinador.date_fullfill = today;
        this.registerApprovalCoordinador.value = this.registerApprovalInspector.value;
        this.approvalStateDataService.put(this.registerApprovalCoordinador).then( r => {
          const newRegisterState = new RegisterState();
          newRegisterState.justification = 'Coordinador Zonal aprueba el estado de inspección en la fecha ' + this.registerApprovalCoordinador.date_assigment.toDateString();
          newRegisterState.register_id = this.idRegister;
          newRegisterState.state_id = this.stateTramiteId;
          this.registerStateDataService.post(newRegisterState).then( r1 => {
             this.toastr.successToastr('Aprobado el Estado de la Inspección Satisfactoriamente.', 'Aprobación de Coordinador Zonal');
             this.refresh();
          }).catch( e => { console.log(e); });
        }).catch( e => { console.log(e); });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          '',
          'error'
        );
      }
    });
  }

  confirmarRechazoTramite() {
     if(this.registerApprovalInspector.notes == '') {
      this.toastr.errorToastr('Debe indicar la justificación para la devolución del trámite.', 'Rechazo de Trámite');
      return;
    }
   Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de Rechazar el resultado emitido por el Técnico Zonal?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, continuar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Rechazado!',
          'El resultado emitido por el Técnico Zonal ha sido rechazado y devuelto al Técnico Zonal para su revisión',
          'success'
        );
        this.isAssigned = true;
        this.registerApprovalInspector.id_user = this.inspectorSelectedId;
        this.registerApprovalInspector.date_assigment = new Date();
        this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
          const newRegisterState = new RegisterState();
          newRegisterState.justification = 'Técinco Zonal asignado en la fecha ' + this.registerApprovalInspector.date_assigment.toDateString();
          newRegisterState.register_id = this.idRegister;          
          newRegisterState.state_id = this.stateTramiteId - 6;
          this.registerStateDataService.post(newRegisterState).then( r1 => {
             this.toastr.successToastr('Técinco Zonal Asignado Satisfactoriamente.', 'Asignación de Técinco Zonal');
             this.refresh();
          }).catch( e => { console.log(e); });
        }).catch( e => { console.log(e); });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          '',
          'error'
        );
      }
    });
  }

  rechazarCheck() {
   this.registerApprovalInspector.notes = '';
  }

  changeSortPays(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  changePagePays(page: any, data: Array<any> = this.dataPays):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  buildDataTablePays() {
     this.columnsPays = [
        {title: 'Código', name: 'code'},
        {title: 'Estado', name: 'state'},
        {title: 'Valor Pagado', name: 'amount_payed'},
        {title: 'Valor a Pagar - Base', name: 'amount_to_pay_base'},
        {title: 'Valor a Pagar - Multas', name: 'amount_to_pay_fines'},
        {title: 'Valor a Pagar - Impuestos', name: 'amount_to_pay_taxes'},
        {title: 'Valor a Pagar - Total', name: 'amount_to_pay'},
        {title: 'Fecha de Pago', name: 'pay_date'}
     ];
     const data = [];
     this.pays.forEach(item => {
         let state = '';
         let amount_payed = '';
         let amount_to_pay = '';
         let amount_to_pay_base = '';
         let amount_to_pay_fines = '';
         let amount_to_pay_taxes = '';
         if (item.payed) {
            state = '<span class="badge badge-success">Pagado</span>';
         } else {
            state = '<span class="badge badge-danger">Pago Pendiente</span>';
         }
         if (item.amount_payed != -1) {
            amount_payed = item.amount_payed.toString() + ' USD';
         }
         amount_to_pay_base = item.amount_to_pay_base.toString() + ' USD';
         amount_to_pay_fines = item.amount_to_pay_fines.toString() + ' USD';
         amount_to_pay_taxes = item.amount_to_pay_taxes.toString() + ' USD';
         amount_to_pay = item.amount_to_pay.toString() + ' USD';
         let payDate = '';
         if (item.pay_date == null || typeof item.pay_date == 'undefined') {
            payDate = '';
         } else {
            payDate = item.pay_date.toString();
         }
         data.push({
            code: item.code,
            state: state,
            amount_payed: amount_payed,
            amount_to_pay_base: amount_to_pay_base,
            amount_to_pay_fines: amount_to_pay_fines,
            amount_to_pay_taxes: amount_to_pay_taxes,
            amount_to_pay: amount_to_pay,
            pay_date: payDate,
         });
     });
     this.dataPays = data;
     this.onChangeTablePays(this.config);
  }

  onCellClickPays(event) {
  }

  refreshTotalWorkers() {
   this.total_workers = 0;
   this.establishment_selected.workers_on_establishment.forEach(element => {
      if (element.is_max) {
         this.total_workers += element.count;
      }
   });
  }

  onChangeTableEstablishment(config: any, event?): any {
   const page: any = {page: this.currentPageEstablishment, itemsPerPage: this.recordsByPageEstablishment};
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilterEstablishment(this.dataEstablishment, this.config);
   const sortedData = this.changeSortEstablishment(filteredData, this.config);
   this.rowsEstablishment = page && config.paging ? this.changePageEstablishment(page, sortedData) : sortedData;
  }

  onChangeTableRegister(config: any, event?): any {
   const page: any = {page: this.currentPageEstablishment, itemsPerPage: this.recordsByPageEstablishment};
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilterRegister(this.dataRegister, this.config);
   const sortedData = this.changeSortRegister(filteredData, this.config);
   this.rowsRegister = page && config.paging ? this.changePageRegister(page, sortedData) : sortedData;
  }

  fechasNombramiento() {
   const today = new Date();
   const min = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
   if(typeof this.ruc_registro_selected.ruc.person_representative_attachment.assignment_date === 'undefined') {
      return;
   }
   if (new Date(this.ruc_registro_selected.ruc.person_representative_attachment.assignment_date.toString()) > today || new Date(this.ruc_registro_selected.ruc.person_representative_attachment.assignment_date.toString()) < min) {
      this.fechaNombramientoOK = false;
   }else {
      this.fechaNombramientoOK = true;
   }
   return {max: today, min: min};
  }

  getPays() {
   this.payDataService.get_by_ruc_number(this.registerMinturSelected.ruc.number).then( r => {
      this.pays = r as Pay[];
      this.buildDataTablePays();
   }).catch( e => { console.log(e); } );
  }

  scroll(el: HTMLElement) {
   el.scrollIntoView({behavior: 'smooth'});
  }

  guardarCertificadoUsoSuelos() {
     if(this.certificadoUsoSuelo.id == 0) {
      this.floorAuthorizationCertificateDataService.post(this.certificadoUsoSuelo).then( r => { 

      }).catch( e => { console.log(e); });
     } else {
      this.floorAuthorizationCertificateDataService.put(this.certificadoUsoSuelo).then( r => { 

      }).catch( e => { console.log(e); });
     }
  }

  downloadFloorCertification() {
   this.downloadFile(
      this.certificadoUsoSuelo.floor_authorization_certificate_file,
      this.certificadoUsoSuelo.floor_authorization_certificate_file_type,
      this.certificadoUsoSuelo.floor_authorization_certificate_file_name);
  }

  downloadBalance() {
   this.downloadFile(
      this.balance.declaration_attachment_file,
      this.balance.declaration_attachment_file_type,
      this.balance.declaration_attachment_file_name);
  }

  borrarBalance() {
   this.balance = new DeclarationAttachment();
  }

  borrarFloorCertificado() {
   this.certificadoUsoSuelo = new FloorAuthorizationCertificate();
  }

  getRegiones() {
   this.regiones = [];
   this.clasifications_registers = [];
   this.showRequisites = false;
   this.register_typeDataService.get_filtered('-').then( r => {
      this.regiones = r as RegisterType[];
   }).catch( e => { console.log(e) });
  }

  getDeclarationAttachment(declaration_id: number) {
   this.declarationAttachmentDataService.get_by_declaration_id(declaration_id).then( r => {
      this.balance = r as DeclarationAttachment;
   }).catch( e => { console.log(e); });
  }

  validateDeclaration(): Boolean {
   return true;
  }

  changeFullfill(register_requisite: RegisterRequisite) {
     if (register_requisite.fullfill) {
      register_requisite.value = 'true';
     } else {
      register_requisite.value = 'false';
     }
  }

  getCertificadoUsoSuelo(register_id: number) {
     this.floorAuthorizationCertificateDataService.get_by_register_id(register_id).then( r => {
        this.certificadoUsoSuelo = r as FloorAuthorizationCertificate;
     }).catch( e => { console.log(e); });
  }

  getReceptionRoom(register_id: number) {
   this.receptionRoomDataService.get_by_register_id(register_id).then( r => {
      this.salaRecepciones = r as ReceptionRoom;
   }).catch( e => { console.log(e); });
  }

  getTarifarioRack(register_id: number) {
   this.registerDataService.get_tarifario(register_id).then( r => {
      this.tarifarioResponse = r as Tariff[];
      let max_year = 0;
      this.tarifarioResponse.forEach(element => {
         if(element.year > max_year){
            max_year = element.year;
         }
      });
      this.tarifarioRack.valores.forEach(element => {
         element.tariffs.forEach(tariffRack => {
            const tariff = tariffRack.tariff;
            this.tarifarioResponse.forEach(tariffResponse => {
               if(tariffResponse.tariff_type_id == tariff.tariff_type_id && tariffResponse.year == max_year && tariffResponse.capacity_type_id == tariff.capacity_type_id) {
                  tariffRack.tariff.price = tariffResponse.price;
               }
            });
         });
      });
   }).catch( e => { console.log(e); });
  }

  refreshDeclaracion() {
     this.selectRegisterEstablishmentDeclaration(this.establishment_selected);
  }

  CodificarArchivoFloorCertification(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.certificadoUsoSuelo.floor_authorization_certificate_file = reader.result.toString().split(',')[1];
      this.certificadoUsoSuelo.floor_authorization_certificate_file_type = file.type;
      this.certificadoUsoSuelo.floor_authorization_certificate_file_name = file.name;
    };
   }
  }

  CodificarArchivoBalance(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.balance.declaration_attachment_file = reader.result.toString().split(',')[1];
      this.balance.declaration_attachment_file_type = file.type;
      this.balance.declaration_attachment_file_name = file.name;
    };
   }
  }

  setCategory(type_id: number){
   let categoryCode = '';
   this.actividadSelected = '1';
   this.register_typeDataService.get().then(r => {
      let types: RegisterType[] = r as RegisterType[];
      types.forEach(registerType => {
         if (registerType.id == type_id) {
            categoryCode = registerType.father_code.toString();
         }
      });
      types.forEach(registerType => {
         if (categoryCode == registerType.code) {
            this.regionSelectedCode = registerType.father_code.toString();
         }
      });
      this.clasifications_registers = [];
      this.register_typeDataService.get_filtered(this.regionSelectedCode).then( r => {
         this.clasifications_registers = r as RegisterType[];
         this.categorySelectedCode = categoryCode;
         this.categories_registers = [];
         this.register_typeDataService.get_filtered(this.categorySelectedCode).then( r => {
            this.categories_registers = r as RegisterType[];
         }).catch( e => { console.log(e) });
      }).catch( e => { console.log(e) });
   }).catch( e=> { console.log(e); });
  }

  changeTramiteRequerido() {
   this.estado_tramite_selected_code = '1';
  }

  checkValuesTariffs() {
     this.tarifarioRack.valores.forEach(valor => {
        valor.tariffs.forEach(tariff => {
           if (!tariff.isReference) {
            valor.tariffs.forEach(tariff2 => {
               if( tariff !== tariff2) {
                  if (tariff.nombreDivision == tariff2.nombreDivision && tariff.plazasHabitacion !== 999) {
                     tariff.tariff.price = tariff2.tariff.price / tariff2.plazasHabitacion;
                  }
               }
            });
           }
        });
     });
  }

  asignarInspector() {
   this.isAssigned = true;
   this.registerApprovalInspector.id_user = this.inspectorSelectedId;
   this.registerApprovalInspector.date_assigment = new Date();
   this.registerApprovalInspector.notes = '';
   this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
      const newRegisterState = new RegisterState();
      newRegisterState.justification = 'Técinco Zonal asignado en la fecha ' + this.registerApprovalInspector.date_assigment.toDateString();
      newRegisterState.register_id = this.idRegister;
      newRegisterState.state_id = this.stateTramiteId + 3;
      this.registerStateDataService.post(newRegisterState).then( r1 => {
         this.toastr.successToastr('Técinco Zonal Asignado Satisfactoriamente.', 'Asignación de Técinco Zonal');
         this.refresh();
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }

  changeTabActive(event) {
   this.tabActive = event.nextId;
  }

  changeTabActiveSuperior(event) {
   this.tabActiveSuperior = event.nextId;
  }

  desasignarInspector() {
     this.isAssigned = false;
     this.inspectorSelectedId = 0;
     this.registerApprovalInspector.id_user = 0;
     const today = new Date();
     this.registerApprovalInspector.date_assigment = null;
     this.approvalStateDataService.put(this.registerApprovalInspector).then( r => {
      const newRegisterState = new RegisterState();
      newRegisterState.justification = 'Técinco Zonal removido en la fecha ' + today.toDateString();
      newRegisterState.register_id =  this.idRegister;
      newRegisterState.state_id = this.stateTramiteId - 3;
      this.registerStateDataService.post(newRegisterState).then( r1 => {
         this.toastr.warningToastr('Técinco Zonal Removido Satisfactoriamente.', 'Asignación de Técinco Zonal');
         this.refresh();
      }).catch( e => { console.log(e); });
     }).catch( e => { console.log(e); });
  }

  asignarFinanciero() {
   this.isAssignedFinancial = true;
   this.registerApprovalFinanciero.id_user = this.financialSelectedId;
   this.registerApprovalFinanciero.date_assigment = new Date();
   this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
      const newRegisterState = new RegisterState();
      newRegisterState.justification = 'Técnico Financiero asignado en la fecha ' + this.registerApprovalFinanciero.date_assigment.toDateString();
      newRegisterState.register_id =  this.idRegister;
      newRegisterState.state_id = this.stateTramiteId - 3;
      this.registerStateDataService.post(newRegisterState).then( r1 => {
         this.toastr.successToastr('Técnico Financiero Asignado Satisfactoriamente.', 'Asignación de Técnico Financiero');
         this.refresh();
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }

  desasignarFinanciero() {
   this.isAssignedFinancial = false;
   this.financialSelectedId = 0;
   this.registerApprovalFinanciero.id_user = 0;
   this.registerApprovalFinanciero.date_assigment = null;
   const today = new Date();
   this.approvalStateDataService.put(this.registerApprovalFinanciero).then( r => {
    const newRegisterState = new RegisterState();
    newRegisterState.justification = 'Técnico Financiero removido en la fecha ' + today.toDateString();
    newRegisterState.register_id =  this.idRegister;
    newRegisterState.state_id = this.stateTramiteId + 3;
    this.registerStateDataService.post(newRegisterState).then( r1 => {
       this.toastr.warningToastr('Técnico Financiero Removido Satisfactoriamente.', 'Asignación de Técnico Financiero');
       this.refresh();
    }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
  }

  changeFilterEstablishment(data: any, config: any): any {
   this.mostrarDataEstablishment = false;
   this.rowsEstablishment.forEach(row => {
      row.selected = '';
   });
   let filteredData: Array<any> = data;
   this.columnsEstablishment.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columnsEstablishment.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  changeSortEstablishment(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  checkRegistroSupercias() {
   this.ruc_registro_selected.ruc.group_given.register_code = this.ruc_registro_selected.ruc.group_given.register_code.replace(/[^\d]/, '');
  }

  validateNombreComercial() {
   let toReturn = true;
     const textoAValidar = this.establishment_selected.commercially_known_name.toUpperCase();
     if(this.establishment_selected.commercially_known_name.length < 1) {
         toReturn = false;
         this.establishmentComercialNameValidated = toReturn;
         return;
     }
     let errorEnNombreDetectado = false;
     this.register_types.forEach(register_type => {
        const nombre = register_type.name.toUpperCase();
        if (textoAValidar.search(nombre + ' ') !== -1 && !errorEnNombreDetectado) {
         errorEnNombreDetectado = true;
         toReturn = false;
        }
     });
     const palabrasNoPermitidas = ['hotel',
     'hostal',
     'residencia',
     'residencial',
     'hacienda turística',
     'hacienda turistica',
     'hostería',
     'hosteria',
     'pensión',
     'pension',
     'albergue',
     'lodge',
     'motel',
     'campamento',
     'refugio',
     'resort '];
     let errorEnNombreDetectadoListaPalabras = false;
     palabrasNoPermitidas.forEach(palabraNoPermitida => {
        const nombre = palabraNoPermitida.toUpperCase();
        if (textoAValidar.search(nombre) !== -1 && !errorEnNombreDetectadoListaPalabras) {
         errorEnNombreDetectadoListaPalabras = true;
         toReturn = false;
        }
     });
     this.establishmentComercialNameValidated = toReturn;
  }

  validateNombreFranquiciaCadena() {
   let toReturn = true;
   const textoAValidar = this.establishment_selected.commercially_known_name.toUpperCase();
   if(this.establishment_selected.commercially_known_name.length < 1) {
       toReturn = false;
       this.franchiseChainNameValidated = toReturn;
       return;
   } 
   let errorEnNombreDetectado = false;
   this.register_types.forEach(register_type => {
      const nombre = register_type.name.toUpperCase();
      if (textoAValidar.search(nombre + ' ') !== -1 && !errorEnNombreDetectado) {
       errorEnNombreDetectado = true;
       toReturn = false;
      }
   });
   this.franchiseChainNameValidated = toReturn;
  }

  getNameTypeInfo() {
   this.ruc_name_types.forEach(element => {
      if (element.id == this.establishment_selected.ruc_name_type_id) {
         this.selectedNameType = element;
      }
   });
  }

  changePageEstablishment(page: any, data: Array<any> = this.dataEstablishment):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  buildDataTableEstablishment() {
   this.columnsEstablishment = [
      {title: '', name: 'selected'},
      {title: 'Número de Establecimiento', name: 'code'},
      {title: 'Dirección', name: 'address'},
      {title: 'Nombre Comercial', name: 'name'},
   ];
   const data = [];
   this.ruc_registro_selected.ruc.establishments.forEach(item => {
       data.push({
          selected: '',
          code: item.ruc_code_id,
          address: item.address_main_street + ' ' + item.address_number + ' ' + item.address_secondary_street,
          name: item.commercially_known_name,
       });
   });
   this.dataEstablishment = data;
   this.onChangeTableEstablishment(this.config);
  }

  onCellClickEstablishment(event) {
   this.ruc_registro_selected.ruc.establishments.forEach(element => {
      if (element.ruc_code_id == event.row.code) {
         this.selectRegisterEstablishment(element);
      }
   });
   this.rowsEstablishment.forEach(row => {
      if (row.code == event.row.code) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });
  }

  changeFilterRegister(data: any, config: any): any {
   this.mostrarDataRegister = false;
   this.rowsRegister.forEach(row => {
      row.selected = '';
   });
   let filteredData: Array<any> = data;
   this.columnsRegister.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columnsRegister.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  changeSortRegister(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  changePageRegister(page: any, data: Array<any> = this.dataRegister):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  buildDataTableRegister() {
   this.columnsRegister = [
      {title: '', name: 'selected'},
      {title: 'Días en Espera', name: 'date_assigment_alert'},
      {title: 'Código del Establecimiento', name: 'establishment_code'},
      {title: 'Ubicación del Establecimiento', name: 'address'},
      {title: 'Código del Registro', name: 'register_code'},
      {title: 'Categoría', name: 'register_type'},
      {title: 'Estado', name: 'state'},
      {title: 'Observaciones', name: 'notes'},
   ];
   const data = []; 
   this.ruc_registro_selected.registers.forEach(item => {
       let date_assigment_alert = '';
       let date1 = new Date();
       const registerState = this.getRegisterState(item.status_register.state_id);
       let editable = true;
       const estado: String = item.status_register.state_id.toString();
       const digito = estado.substring(estado.length-1, estado.length);
       if (digito == '1' || digito == '9') {
          editable = true;
       } else {
          editable = false;
       }
       if (registerState.search('Aprobado') == 0) {
          date1 = new Date(item.status_register.updated_at);
       }
       if (registerState.search('Negado') == 0) {
          date1 = new Date(item.status_register.updated_at);
       }
       const date2 = new Date(item.register.updated_at);
       const diffTime = Math.abs(date2.getTime() - date1.getTime());
       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
       if (diffDays < 7) {
          date_assigment_alert = '<div class="col-12 text-center"><span class="badge badge-success">&nbsp;' + diffDays.toString() + '&nbsp;</span></div>';
       }
       if (diffDays >= 7 && diffDays <= 10) {
          date_assigment_alert = '<div class="col-12 text-center"><span class="badge badge-warning">&nbsp;' + diffDays.toString() + '&nbsp;</span></div>';
       }
       if (diffDays > 10) {
          date_assigment_alert = '<div class="col-12 text-center"><span class="badge badge-danger">&nbsp;' + diffDays.toString() + '&nbsp;</span></div>';
       }
       data.push({
          selected: '',
          id: item.register.id,
          date_assigment_alert: date_assigment_alert,
          establishment_code: item.establishment.ruc_code_id,
          address: item.establishment.address,
          register_code: item.register.code,
          register_type: item.type.register_category.name + ' / ' + item.type.register_type.name,
          state: registerState,
          editable: editable,
          state_id: item.status_register.state_id,
          notes: '<div class="col-12 text-justify">' + item.status_register.justification + '</div>',
       });
   });
   this.dataRegister = data;
   this.onChangeTableRegister(this.config);
  }

  onCellClickRegister(event) {
   this.ruc_registro_selected.registers.forEach(element => {
      if (element.register.id == event.row.id) {
         this.selectEstablishmentRegister(element.register, false);
      }
   });
   this.stateTramiteId = event.row.state_id;
   this.showTramiteState();
   this.rowsRegister.forEach(row => {
      if (row.id == event.row.id) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });
  }

  showTramiteState() {
   const estado: String = this.stateTramiteId.toString();
   const digito = estado.substring(estado.length-1, estado.length);
   this.estado_tramite_selected_code = digito;
   this.getSpecificStates();
  }

  getRequisitesSetByUser() {
   this.registerDataService.get_requisites_set_by_user(this.idRegister).then( r => {
      this.rucEstablishmentRegisterSelected.requisites = r as RegisterRequisite[];
   }).catch( e => { console.log(e); });
  }

  onChangeTable(config: any, page: any = {page: this.currentPageMinturRegisters, itemsPerPage: this.recordsByPageRegisterMintur}): any {
   if (config.filtering) {
     Object.assign(this.config.filtering, config.filtering);
   }
   if (config.sorting) {
     Object.assign(this.config.sorting, config.sorting);
   }
   const filteredData = this.changeFilter(this.data, this.config);
   const sortedData = this.changeSort(filteredData, this.config);
   this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
  }

  changeFilter(data: any, config: any): any {
   this.mostrarDataRegisterMintur = false;
   this.rows.forEach(row => {
      row.selected = '';
   });
   let filteredData: Array<any> = data;
   this.columns.forEach((column: any) => {
     if (column.filtering) {
       filteredData = filteredData.filter((item: any) => {
         return item[column.name].match(column.filtering.filterString);
       });
     }
   });
   if (!config.filtering) {
     return filteredData;
   }
   if (config.filtering.columnName) {
     return filteredData.filter((item:any) =>
       item[config.filtering.columnName].match(this.config.filtering.filterString));
   }
   const tempArray: Array<any> = [];
   filteredData.forEach((item: any) => {
     let flag = false;
     this.columns.forEach((column: any) => {
       if (item[column.name].toString().match(this.config.filtering.filterString)) {
         flag = true;
       }
     });
     if (flag) {
       tempArray.push(item);
     }
   });
   filteredData = tempArray;
   return filteredData;
  }

  changeSort(data: any, config: any): any {
   if (!config.sorting) {
     return data;
   }
   const columns = this.config.sorting.columns || [];
   let columnName: string = void 0;
   let sort: string = void 0;
   for (let i = 0; i < columns.length; i++) {
     if (columns[i].sort !== '' && columns[i].sort !== false) {
       columnName = columns[i].name;
       sort = columns[i].sort;
     }
   }
   if (!columnName) {
     return data;
   }
   return data.sort((previous:any, current:any) => {
     if (previous[columnName] > current[columnName]) {
       return sort === 'desc' ? -1 : 1;
     } else if (previous[columnName] < current[columnName]) {
       return sort === 'asc' ? -1 : 1;
     }
     return 0;
   });
  }

  changePage(page: any, data: Array<any> = this.data):Array<any> {
   const start = (page.page - 1) * page.itemsPerPage;
   const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
   return data.slice(start, end);
  }

  getRegistersMintur() {
   this.registers_mintur = [];
   this.registerMinturSelected = new Register();
   this.consultorDataService.get_registers(1).then( r => {
      this.registers_mintur = r;
      this.buildDataTable();
   }).catch( e => console.log(e) );
  }

  buildDataTable() {
     this.columns = [
        {title: '', name: 'selected'},
        {title: 'Establecimiento', name: 'establishment'},
        {title: 'Dirección', name: 'address'},
        {title: 'Categoría', name: 'category'},
     ];
     const data = [];
     this.registers_mintur.forEach(item => {
         data.push({
            selected: '',
            number: item.ruc.number,
            registerId: item.register.id,
            establishment: item.establishment.commercially_known_name,
            address: item.establishment.address_main_street + ' ' + item.establishment.address_number + item.establishment.address_secondary_street,
            updated_at: item.register.updated_at,
            category: this.getRegisterCategory(item.register.register_type_id),
         });
     });
     this.data = data;
     this.onChangeTable(this.config);
  }

  actualizar() {
   this.actualizando = true;
   this.activando = false;
   this.inactivando = false;
   this.reclasificando = false;
   this.recategorizando = false;
  }

  darBaja() {
   this.actualizando = false;
   this.activando = false;
   this.inactivando = true;
   this.reclasificando = false;
   this.recategorizando = false;
  }

  reactivar() {
   this.actualizando = false;
   this.activando = true;
   this.inactivando = false;
   this.reclasificando = false;
   this.recategorizando = false;
  }

  reclasificacion() {
   this.actualizando = false;
   this.activando = false;
   this.inactivando = false;
   this.reclasificando = true;
   this.recategorizando = false;
  }

  recategorizacion() {
   this.actualizando = false;
   this.activando = false;
   this.inactivando = false;
   this.reclasificando = false;
   this.recategorizando = true;
  }

  onCellClick(event) {
   this.registers_mintur.forEach(element => {
      if (element.ruc.number == event.row.number) {
         this.selectRegisterMintur(element);
         const registerState = this.getRegisterState(element.states.state_id);
         this.stateTramiteId = element.states.state_id;
         const estado: String = this.stateTramiteId.toString();
         this.digito = estado.substring(estado.length-1, estado.length);
         this.stateTramite = 0;
         this.canSave = true;
         if (registerState.search('Solicitud Aprobada') == 0) {
            this.stateTramite = 1;
            this.hasRegisterReady = true;
            this.canSave = false;
         }
         if (registerState.search('Solicitud Rechazada') == 0) {
            this.stateTramite = 2;
            this.hasRegisterReady = false;
            this.canSave = false;
         }
         if (registerState.search('Documentación Entregada') == 0) {
            this.stateTramite = 3;
            this.hasRegisterReady = false;
            this.canSave = false;
         }
      }
   });
   this.idRegister = event.row.registerId;
   this.getApprovalStates();
   this.rows.forEach(row => {
      if (this.idRegister == row.registerId) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });
  }

  checkIfIsAssigned() {
   if (this.inspectorSelectedId !== 0) {
      this.isAssigned = true;
   } else {
      this.isAssigned = false;
   }
  }

  checkAttachments() {
   this.hasRequisites = false;
   this.hasInform = false;
   if (this.registerMinturSelected.states.state_id == 11 ||
      this.registerMinturSelected.states.state_id == 21 ||
      this.registerMinturSelected.states.state_id == 31 ||
      this.registerMinturSelected.states.state_id == 41 ||
      this.registerMinturSelected.states.state_id == 51 ||
      this.registerMinturSelected.states.state_id == 61
      ) {
      this.hasRequisites = false;
      return;
   }
   this.approvalStateAttachmentDataService.get_by_register_id(this.idRegister).then( r => {
      r.forEach(approvalStateAttachment => {
         if (approvalStateAttachment.approval_state_attachment_file_name.search('Informe') == 0) {
            this.informeApprovalStateAttachment = approvalStateAttachment;
            this.hasInform = true;
         }
         if (approvalStateAttachment.approval_state_attachment_file_name.search('Formulario') == 0) {
            this.requisitosApprovalStateAttachment = approvalStateAttachment;
            this.hasRequisites = true;
         }
      });
   }).catch( e => { console.log(e); });
  }

  checkIfIsAssignedFinanciero() {
   if (this.financialSelectedId !== 0) {
      this.isAssignedFinancial = true;
   } else {
      this.isAssignedFinancial = false;
   }
  }

  checkAttachmentsFinanciero(){

  }

  getApprovalStates() {
   this.isAssigned = false;
   this.hasIspectionDate  = false;
   this.hasInform  = false;
   this.hasRequisites = false;
   this.registerApprovalInspector = new ApprovalState();
   this.registerApprovalFinanciero = new ApprovalState();
   this.registerApprovalCoordinador = new ApprovalState();
   this.approvalStateDataService.get_by_register_id(this.idRegister).then( r => {
      this.registerApprovals = r;
      this.registerApprovals.forEach(element => {
         if(element.approval_id == 1){
            this.registerApprovalInspector = element;
            if (typeof this.registerApprovalInspector.notes == 'undefined' || this.registerApprovalInspector.notes == null) {
               this.registerApprovalInspector.notes = '';
            }
            this.inspectorSelectedId = this.registerApprovalInspector.id_user;
            this.checkIfIsAssigned();
            this.checkAttachments();
         }
         if(element.approval_id == 2){
            this.registerApprovalFinanciero = element;
            if (typeof this.registerApprovalFinanciero.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
               this.registerApprovalFinanciero.notes = '';
            }
            this.financialSelectedId = this.registerApprovalFinanciero.id_user;
            this.checkIfIsAssignedFinanciero();
            this.checkAttachmentsFinanciero();
         }
         if(element.approval_id == 3){
            this.registerApprovalCoordinador = element;
            if (typeof this.registerApprovalCoordinador.notes == 'undefined' || this.registerApprovalFinanciero.notes == null) {
               this.registerApprovalCoordinador.notes = '';
            }
         }
      });
   }).catch( e => { console.log(e); });
  }

  guardarTramite() {
     const estado: String = this.stateTramiteId.toString();
     const digito = estado.substring(estado.length-1, estado.length);
     if ( this.stateTramite == 0) {
       this.toastr.errorToastr('Debe seleccionar un estado de trámite', 'Coordinación');
       return;
     }
     const newRegisterState = new RegisterState();
     let establishmentId = 0;
     let countRegisters = 1;
     this.ruc_registro_selected.registers.forEach(element => {
        if (element.register.id == this.idRegister) {
           establishmentId = element.establishment.id;
        }
     });
     this.ruc_registro_selected.registers.forEach(element => {
      if (establishmentId == element.establishment.id && element.status_register.state_id == 9) {
         countRegisters++;
      }
     });
     const code = this.ruc_registro_selected.ruc.number + '.' + establishmentId.toString() + '.' + countRegisters.toString();
     this.registerApprovalCoordinador.register_id = this.idRegister;
     this.registerApprovalCoordinador.date_assigment = this.registerApprovalFinanciero.date_fullfill;
     this.registerApprovalCoordinador.id_user = this.user.id;
     this.registerApprovalCoordinador.date_fullfill = new Date();
     if( this.stateTramite == 1 ){
        this.registerApprovalCoordinador.value = true;
         if (digito == '0') {
            newRegisterState.state_id = this.stateTramiteId - 8;
         }
         if (digito == '2') {
            newRegisterState.state_id = this.stateTramiteId;
         }
         if (digito == '3') {
            newRegisterState.state_id = this.stateTramiteId - 1;
         }
         if (digito == '9') {
            newRegisterState.state_id = this.stateTramiteId - 7;
         }
     }
     if( this.stateTramite == 2 ){
      this.registerApprovalCoordinador.value = false;
      if (digito == '0') {
         newRegisterState.state_id = this.stateTramiteId - 7;
      }
      if (digito == '2') {
         newRegisterState.state_id = this.stateTramiteId + 1;
      }
      if (digito == '3') {
         newRegisterState.state_id = this.stateTramiteId;
      }
      if (digito == '9') {
         newRegisterState.state_id = this.stateTramiteId - 6;
      }
     }
     if( this.stateTramite == 3 ){
      this.registerApprovalCoordinador.value = false;
      if (digito == '0') {
         newRegisterState.state_id = this.stateTramiteId - 1;
      }
      if (digito == '2') {
         newRegisterState.state_id = this.stateTramiteId + 7;
      }
      if (digito == '3') {
         newRegisterState.state_id = this.stateTramiteId + 6;
      }
      if (digito == '9') {
         newRegisterState.state_id = this.stateTramiteId;
      }
     }
     newRegisterState.justification = this.registerApprovalCoordinador.notes;
     newRegisterState.register_id = this.idRegister;
     this.registerStateDataService.post(newRegisterState).then( r1 => {
     }).catch( e => { console.log(e); });
     this.approvalStateDataService.put(this.registerApprovalCoordinador).then( r => {
        this.registerDataService.set_register_code(code, this.idRegister).then( r => {
         this.toastr.successToastr('Datos Guardados Satisfactoriamente', 'Coordinación');
         this.refresh();
        }).catch( e => { console.log(e); });
     }).catch( e => { console.log(e); });
  }

  getRegisterTypes() {
   this.register_typeDataService.get().then( r => {
      this.register_types = r as RegisterType[];
      this.getRegistersMintur();
   }).catch( e => { console.log(e); });
  }

  selectRegisterMintur(item: any) {
   this.registerMinturSelected = item;
   this.mostrarDataRegisterMintur = true;
   this.getRuc(this.registerMinturSelected.ruc.number);
   this.groupTypeSelected = new GroupType();
  }

  imprimirRegistro() {
   alert('imprimir');
  }

  validateGroupGivenTipe(): Boolean {
     if (this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
       return this.ruc_registro_selected.ruc.group_given.group_type_id !== 0;
     }
     return true;
  }
  
  getTramiteStates() {
   this.estados_tramites = [];
   this.stateDataService.get().then( r => {
      r.forEach(element => {
         if (element.father_code == '-') {
            this.estados_tramites.push(element);
         }
      });
   }).catch( e => { console.log(e); });
  }

  validateTariffs() {
   return true;
  }

  validateRuc(): Boolean {
   let validateRepresentantLegalId = true;
   this.fechaNombramientoOK = true;
   if(this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
      this.fechasNombramiento();
      validateRepresentantLegalId = this.identificationRepresentativePersonValidated;
      const validateExpediente = (this.ruc_registro_selected.ruc.group_given.register_code !== '');
      return this.rucValidated &&
       this.validateNombramiento() &&
       this.validateGroupGivenTipe() &&
       validateRepresentantLegalId &&
       this.SRIOK &&
       this.REGCIVILREPRESENTANTELEGALOK &&
       validateExpediente &&
       this.fechaNombramientoOK;
   }
   return this.rucValidated &&
    this.SRIOK;
  }

  refresh() {
   this.fechasNombramiento();
   this.pays = [];
   this.consumoCedula = false;
   this.consumoCedulaEstablishmentContact = false;
   this.consumoRuc = false;
   this.consumoCedulaRepresentanteLegal = false;
   this.mostrarDataRegisterMintur = false;
   this.SRIOK = false;
   this.REGCIVILOK = false;
   this.REGCIVILOKEstablishment = false;
   this.REGCIVILREPRESENTANTELEGALOK = false;
   this.guardando = false;
   this.ruc_registro_selected = new RegistroDataCarrier();
   this.getTaxPayerType();
   this.getGroupType();
   this.getCapacityTypes();
   this.getTariffs();
   this.getStates();
   this.getRucNameTypes();
   this.getZonalesEstablishment();
   this.getEstablishmentPropertyType();
   this.getLanguage();
   this.getComplementaryFoodServiceType();
   this.getSystemNames();
   this.getCertificationTypes();
   this.getWorkerGroups();
   this.getRegiones();
   this.getEstablishmentCertificationTypesCategories();
   this.getComplementaryServiceTypeCategories();
   this.getInspectores();
   this.getFinancieros();
   this.groupTypeSelected = new GroupType();
  }

  getInspectores() {
   this.inspectores = [];
   this.userDataService.get_by_rol('5').then( r => {
      this.inspectores = r as User[];
   }).catch( e => {console.log(e); });
  }
   
  getFinancieros() {
   this.financieros = [];
   this.userDataService.get_by_rol('6').then( r => {
      this.financieros = r as User[];
   }).catch( e => {console.log(e); });
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

 newDeclaration() {
   this.declaration_selected = new Declaration();
   this.mostrarDataDeclaration = true;
   this.guardando = false;
   this.balance = new DeclarationAttachment();
   this.buildDeclarationItemsToShow();
  }

  mostrarFechaMaximaPago(): Boolean {
     return typeof this.declaration_selected.max_date_to_pay != 'undefined';
  }

  getMaxDeclarationDate() {
   const today = new Date();
   this.maxYear = today.getFullYear();
  }

  getComplementaryFoodServiceType() {
   this.complementaryServiceFoodTypeDataService.get().then( r => {
      this.complementaryServiceFoodTypes = r as ComplementaryServiceFoodType[];
   }).catch( e => { console.log(e); });
  }

  buildDeclarationItemsToShow() {
   this.declarationItemsToShow = [];
   this.declarationItemsCategories.forEach(category => {
      if (category.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
         const items = [];
         this.declarationItems.forEach(item => {
           if(item.declaration_item_category_id == category.id) {
              const newValueItem = new DeclarationItemValue();
              newValueItem.declaration_item_id = item.id;
              if (item.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
                items.push({declarationItem: item, valueItem: newValueItem});
              }
           }
         });
         this.declarationItemsToShow.push({Category: category, items: items});  
      }
   });
  }
 
  addComplementaryFoodService() {
   const complementaryFoodService = new ComplementaryServiceFood();
   let agregable = true;
   this.complementaryServiceFoodTypes.forEach(element1 => {
      let existe = false;
      this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.forEach(element2 => {
         if(element2.quantity_tables == 0) {
            agregable = false;
         }
          if(element1.id == element2.complementary_service_food_type_id) {
             existe = true;
          }
       });
       if (!existe) {
          complementaryFoodService.type_of_complementary_service_food.push(element1);
       }
   });
   if(this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.length == 0){
      agregable = true;
   }
   if (!agregable){
    this.toastr.errorToastr('Complete la información, para continuar.', 'Nuevo');
    return;
   }
   if(complementaryFoodService.type_of_complementary_service_food.length > 0) {
     this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.push(complementaryFoodService);
   }else {
    this.toastr.errorToastr('Usted ha declarado los tipos admitidos.', 'Nuevo');
   }
}

  selectComplementaryFoodService(complementaryServiceFood: ComplementaryServiceFood) {
   this.complementaryServiceFoodSelected = complementaryServiceFood;
  }

  removeComplementaryFoodService(complementaryServiceFood: ComplementaryServiceFood) {
   const newList: ComplementaryServiceFood[] = [];
   this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.forEach(element => {
      if (element !== complementaryServiceFood) {
         newList.push(element);
      }
   });
   this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register = newList;
  }

  getTerminosCondicionesAgreement() {
   this.agreementDataService.get(1).then( r => {
      this.terminosCondicionesAgreement = r.Agreement as Agreement;
      this.terminosCondicionesAgreement.content = this.terminosCondicionesAgreement.content.replace('##USER##', '<strong>' + this.user.name.toUpperCase() + '</strong>');
      this.terminosCondicionesAgreement.content = this.terminosCondicionesAgreement.content.replace('##RUC##', '<strong>' + this.user.ruc + '</strong>');
   }).catch( e => { console.log(e); });
  }

  getRuc(number: String) {
   this.rucDataService.get_filtered(number).then( r => {
      if ( typeof r.Ruc === 'undefined') {
         this.ruc_registro_selected.ruc = new Ruc();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.number = number;
         this.ruc_registro_selected.ruc.contact_user = new User();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.group_given = new GroupGiven();
         this.ruc_registro_selected.ruc.person_representative = new PersonRepresentative();
         this.ruc_registro_selected.ruc.tax_payer_type_id = 0;
         this.ruc_registro_selected.ruc.contact_user_id = 0;
         this.ruc_registro_selected.ruc.person_representative.identification = this.user.identification;
         this.checkIdentificationRepresentant();
         this.checkRuc();
      } else {
         this.ruc_registro_selected.ruc = r.Ruc as Ruc;
         this.getPays();
         this.getRegistersOnRuc();
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.contact_user = r.contact_user as User;
         if (r.group_given == '0') {
            this.ruc_registro_selected.ruc.group_given = new GroupGiven();
         } else {
            this.ruc_registro_selected.ruc.group_given = r.group_given as GroupGiven;
            this.group_types = [];
            this.group_typeDataService.get().then( r => {
               this.group_types = r as GroupType[];
               this.setGroupTypeSelected(this.ruc_registro_selected.ruc.group_given.group_type_id);
            }).catch( e => console.log(e) );
         }
         if (r.person_representative == '0') {
            this.ruc_registro_selected.ruc.person_representative = new PersonRepresentative();
         } else {
            this.ruc_registro_selected.ruc.person_representative = r.person_representative as PersonRepresentative;
         }
         this.ruc_registro_selected.ruc.person_representative_attachment = new PersonRepresentativeAttachment();
         if(this.ruc_registro_selected.ruc.tax_payer_type_id > 1) {
            this.getPersonRepresentativeAttachment(this.ruc_registro_selected.ruc.number);
         }
         this.consumoCedula = false;
         this.consumoCedulaEstablishmentContact = false;
         this.consumoRuc = false;
         this.consumoCedulaRepresentanteLegal = false;
         this.SRIOK = false;
         this.REGCIVILOK = false;
         this.REGCIVILOKEstablishment = false;
         this.REGCIVILREPRESENTANTELEGALOK = false;
         this.checkRuc();
         this.checkIdentificationRepresentant();
         this.getEstablishmentsOnRuc(this.currentPageEstablishment);
      }
   }).catch( e => { console.log(e); });
  }

  checkImContactRuc() {
   if (this.imContactRuc) {
      this.ruc_registro_selected.ruc.contact_user.id = this.user.id;
      this.ruc_registro_selected.ruc.contact_user = this.user;
      this.identificationContactValidated = true;
      this.consumoCedula = true;
      this.mainPhoneContactValidated = true;
      this.secondaryPhoneContactValidated = true;
      this.emailContactValidated = true;
      this.REGCIVILOK = true;
   }
  }

  getEstablishmentsOnRuc(currentpage: number) {
   this.establishment_selected = new Establishment();
   this.mostrarDataEstablishment = false;
   this.establecimientos_pendiente = true;
   this.establishmentDataService.getByRuc(this.ruc_registro_selected.ruc.number, this.recordsByPageEstablishment, currentpage).then( r => {
      const establecimientos = r.data as Establishment[];
      this.dinardapDataService.get_RUC(this.ruc_registro_selected.ruc.number).then( dinardap => {
        this.establecimientos_pendiente = false;
        let itemsDetalles = [];
        if (!Array.isArray(dinardap.sri_establecimientos.original.entidades.entidad.filas.fila)) {
           itemsDetalles = [dinardap.sri_establecimientos.original.entidades.entidad.filas.fila];
        } else {
           itemsDetalles = dinardap.sri_establecimientos.original.entidades.entidad.filas.fila;
        }
        itemsDetalles.forEach(element => {
           let existe = false;
           let establishmentRucNum = '';
           element.columnas.columna.forEach(localData => {
              if (localData.campo === 'numeroEstablecimiento') {
                 establishmentRucNum = localData.valor as string;
                 establecimientos.forEach(establecimiento => {
                    if (establecimiento.ruc_code_id === establishmentRucNum.trim()) {
                       existe = true;
                       console.log(establecimiento);
                    }
                 });
              }
           });
           if (!existe) {
              const newEstablishment = new Establishment();
              newEstablishment.ruc_code_id = establishmentRucNum;
              element.columnas.columna.forEach(localData => {
                 if (localData.campo === 'calle') {
                    newEstablishment.address_main_street = localData.valor;
                 }
                 if (localData.campo === 'numero') {
                    newEstablishment.address_number = localData.valor;
                 }
                 if (localData.campo === 'interseccion') {
                    newEstablishment.address_secondary_street = localData.valor;
                 }
              });
              establecimientos.push(newEstablishment);
           }
        });
        if(establecimientos.length == 0){
           this.ruc_registro_selected.ruc.establishments = [];
         }else {
           this.ruc_registro_selected.ruc.establishments = r.data as Establishment[];
           this.buildDataTableEstablishment();
         }
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
 }

 getPersonRepresentativeAttachment(ruc_number: String) {
   if (this.ruc_registro_selected.ruc.tax_payer_type_id <= 1) {
      this.ruc_registro_selected.ruc.person_representative_attachment = new PersonRepresentativeAttachment();
      return;
   }
   this.personRepresentativeAttachmentDataService.get_filtered(ruc_number).then( r => {
      if(r == '0'){
         this.ruc_registro_selected.ruc.person_representative_attachment = new PersonRepresentativeAttachment();
      }else {
         this.ruc_registro_selected.ruc.person_representative_attachment = r as PersonRepresentativeAttachment;
      }
   }).catch( e => { console.log(e); });
  }

  getCertificationTypes() {
   this.establishment_certification_types = [];
   this.establishment_certification_typeDataService.get().then( r => {
      this.establishment_certification_types = r as EstablishmentCertificationType[];
   }).catch( e => { console.log(e); });
  }

  validateNombramiento(): Boolean {
     if(this.ruc_registro_selected.ruc.tax_payer_type_id <= 1) {
        return true;
     }
     return !(this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name == '');
  }

  getUser() {
   this.roles = JSON.parse(sessionStorage.getItem('roles')) as AccountRol[];
   this.userDataService.get(JSON.parse(sessionStorage.getItem('user')).id).then( r => {
     this.user = r as User;
     this.getTerminosCondicionesAgreement();
   }).catch( e => console.log(e));
  }

  CodeFilePersonRepresentativeAttachment(event) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
         this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name = file.name;
         this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type = file.type;
         this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file = reader.result.toString().split(',')[1];
      };
   }
  }

  borrarNombramiento() {
   this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file = '';
   this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type = '';
   this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name = '';
  }

  descargarNombramiento() {
   this.downloadFile(
      this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file,
      this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_type,
      this.ruc_registro_selected.ruc.person_representative_attachment.person_representative_attachment_file_name);
  }

  descargarInforme() {
   this.downloadFile(
      this.informeApprovalStateAttachment.approval_state_attachment_file,
      this.informeApprovalStateAttachment.approval_state_attachment_file_type,
      this.informeApprovalStateAttachment.approval_state_attachment_file_name);
  }

  descargarRequisitos() {
   this.downloadFile(
      this.requisitosApprovalStateAttachment.approval_state_attachment_file,
      this.requisitosApprovalStateAttachment.approval_state_attachment_file_type,
      this.requisitosApprovalStateAttachment.approval_state_attachment_file_name);
  }

  getCapacityTypes() {
   this.allowed_capacity_types = [];
   this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.allowed_capacity_types = r as CapacityType[];
   }).catch( e => { console.log(e); });
  }

  refreshEstablishment() {
   this.goToPageEstablishment(this.currentPageEstablishment);
  }

  getStates() {
   this.states = [];
   this.stateDataService.get().then( r => {
      this.states = r as State[];
      this.getRegisterTypes();
      this.getSpecificStates();
   }).catch( e => { console.log(e); });
  }

  getRegisterCategory(id: number): String {
   let toReturn: String = '';
   let fatherCode: String = '';
   this.register_types.forEach(register_type => {
      if (register_type.id == id) {
       toReturn = register_type.name;
       fatherCode = register_type.father_code;
      }
   });
   this.register_types.forEach(register_type => {
      if (register_type.code == fatherCode) {
         toReturn = register_type.name + ' - ' + toReturn;
      }
   });
   return toReturn;
}

  getRegisterState(id: number): String {
     let toReturn: String = '';
     let fatherCode: String = '';
     this.states.forEach(state => {
        if (state.id == id) {
         toReturn = state.name;
         fatherCode = state.father_code;
        }
     });
     this.states.forEach(state => {
        if (state.code == fatherCode) {
           toReturn = state.name + ' - ' + toReturn;
        }
     });
     return toReturn;
  }

  getClasifications() {
   this.clasifications_registers = [];
   this.showRequisites = false;
   this.register_typeDataService.get_filtered(this.regionSelectedCode).then( r => {
      let esRegitro = false;
      this.specific_states.forEach(element => {
         if (element.id == this.rucEstablishmentRegisterSelected.status) {
            if (element.name == 'Registro') {
               esRegitro = true;
            }
         }
      });
      if ( this.regionSelectedCode != '1' && esRegitro) {
         const clasificaciones = [];
         r.forEach(element => {
            if (element.id !== 30 && element.id !== 44) {
               clasificaciones.push(element);
            }
         });
         this.clasifications_registers = clasificaciones;
      } else {
         this.clasifications_registers = r as RegisterType[];
      }
   }).catch( e => { console.log(e) });
  }

  getRucNameTypes() {
   this.ruc_name_types = [];
   this.rucNameTypeDataService.get().then( r => {
      this.ruc_name_types = r as RucNameType[];
   }).catch( e => { console.log(e); });
  }

  getDeclarationsByEstablishment(id: number) {
   this.declarations = [];
    this.declarationDataService.get_by_establishment(id).then( r => {
       this.declarations = r as Declaration[];
    }).catch( e => { console.log(e); });
  }

  selectDeclaration(declaration: Declaration) {
   this.declaration_selected = declaration;
   this.getDeclarationAttachment(declaration.id);
   this.mostrarDataDeclaration = true;
   this.declarationItemsToShow = [];
   this.guardando = false;
   this.declarationItemsCategories.forEach(category => {
      if (category.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
         const items = [];
         declaration.declaration_item_values_on_declaration.forEach(newValueItem => {
            this.declarationItems.forEach(item => {
               if (item.tax_payer_type_id == this.ruc_registro_selected.ruc.tax_payer_type_id) {
                  if ((item.id == newValueItem.declaration_item_id) && (item.declaration_item_category_id == category.id)) {
                     items.push({declarationItem: item, valueItem: newValueItem});
                  }
               }
            });
         });
         this.declarationItemsToShow.push({Category: category, items: items});
      }
   });
}

guardarDeclaracion() {
   if(!this.validateDeclaration) {
      this.toastr.errorToastr('La información ingresada es incorrecta.', 'Declaración');
      return;
   }
   if (this.balance.declaration_attachment_file == ''){
      if (this.ruc_registro_selected.ruc.tax_payer_type_id == 2) {
         this.toastr.errorToastr('Adjunte el balance individual del establecimiento, suscrito por el representante legal.', 'Declaración');
      } else {
         this.toastr.errorToastr('Adjunte el inventario valorado del establecimiento, suscrito por el propietario.', 'Declaración');
      }
      return;
   }
   let previamente_declarado = false;
   this.declarations.forEach(declaration => {
      if (declaration.year == this.declaration_selected.year) {
         previamente_declarado = true;
      }
   });
   if (previamente_declarado) {
      this.toastr.errorToastr('Usted ya ha declarado previamente el año seleccionado.', 'Declaración');
      return;
   }
   this.declaration_selected.declaration_item_values_on_declaration = [];
   this.declarationItemsToShow.forEach(element => {
      element.items.forEach(item => {
         this.declaration_selected.declaration_item_values_on_declaration.push(item.valueItem);
      });
   });
   this.guardando = true;
   this.declaration_selected.establishment_id = this.establishment_declarations_selected.id;
   this.declarationDataService.register_data(this.declaration_selected).then( r => {
      if ( r === '0' ) {
         this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
         return;
      }
      const declarationSaved = r as Declaration;
      this.balance.declaration_id = declarationSaved.id;
      if (this.balance.id == 0) {
         this.declarationAttachmentDataService.post(this.balance).then( r1 => {
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
            this.refreshDeclaracion();
            this.establishment_declarations_selected = new Establishment();
            this.establishment_declarations_selected.id = this.establishment_selected.id;
            this.mostrarDataDeclaration = false;
            this.guardando = false;
         }).catch( e => {
            console.log(e);
            this.guardando = false;
         });
      } else {
         this.declarationAttachmentDataService.put(this.balance).then( r1 => {
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Declaración');
            this.refreshDeclaracion();
            this.establishment_declarations_selected = new Establishment();
            this.establishment_declarations_selected.id = this.establishment_selected.id;
            this.mostrarDataDeclaration = false;
            this.guardando = false;
         }).catch( e => { 
            console.log(e);
            this.guardando = false;
         });
      }
   }).catch( e => {
      this.guardando = false;
      this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Declaración');
      return;
   });
  }

  guardarRUC() {
   this.REGCIVILOK = true;
   if (!this.validateRuc()) {
      this.toastr.errorToastr('Existe conflicto con la información ingresada.', 'Nuevo');
      return;
   }
   if(!this.REGCIVILOK) {
      this.toastr.errorToastr('Esperando confirmación del Registro Civil', 'Registro Civil');
   }
   if(!this.SRIOK) {
      this.toastr.errorToastr('Esperando confirmación del SRI', 'SRI');
   }
   if(!this.SRIOK || !this.REGCIVILOK){
      return;
   }
   this.ruc_registro_selected.ruc.person_representative_attachment.ruc = this.ruc_registro_selected.ruc.number;
   this.guardando = true;
   if (typeof this.ruc_registro_selected.ruc.id === 'undefined') {
      this.rucDataService.register_ruc(this.ruc_registro_selected.ruc).then( r => {
         this.guardando = false;
         if ( r === '0' ) {
            this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Nuevo');
            return;
         }
         this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
         this.refresh();
      }).catch( e => {
         this.guardando = false;
         this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Nuevo');
         return;
      });
   } else {
      this.rucDataService.update_ruc(this.ruc_registro_selected.ruc).then( r => {
         this.guardando = false;
         if ( r === '0' ) {
            this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Actualizar');
            return;
         }
         this.toastr.successToastr('Datos actualizados satisfactoriamente.', 'Actualizar');
         this.refresh();
      }).catch( e => {
         this.guardando = false;
         this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Nuevo');
         return;
      });
   }
  }

  guardarRegistro() {
   if (this.certificadoUsoSuelo.floor_authorization_certificate_file === ''){
      this.toastr.errorToastr('Debe cargar el certificado de uso de suelo.', 'Nuevo');
      return;
   }
   let mostradoError = false;
   this.rucEstablishmentRegisterSelected.requisites.forEach(element => {
      if (element.HTMLtype == 'TRUE / FALSE' && element.fullfill) {
         element.value = 'true';
      }
      let esgrupo = false;
      if (element.HTMLtype == "GRUPO 0" || element.HTMLtype == "GRUPO 1" || element.HTMLtype == "GRUPO 2" || element.HTMLtype == "GRUPO 3" || element.HTMLtype == "GRUPO 4" || element.HTMLtype == "GRUPO 5" || element.HTMLtype == "GRUPO 6") {
         esgrupo = true;
      }
      if (!mostradoError && !esgrupo && element.mandatory && (element.value == 'false' || element.value == '0')) {
         this.toastr.errorToastr('La repuesta seleccionada en los requisitos obligatorios no corresponde a la admitida para la categoría seleccionada.', 'Normativa');
         mostradoError = true;
      }
   });
   if (mostradoError) {
      return;
   }
   let NoApruebaCantidadCamas = false;
   this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
      this.allowed_capacity_types.forEach(capacity_type => {
         if (capacity.capacity_type_id == capacity_type.id) {
            if (capacity.max_bed> capacity_type.bed_quantity){
               NoApruebaCantidadCamas = true;
            }
            if (capacity.max_bed == 0) {
               NoApruebaCantidadCamas = true;
            }
         }
      });
   });
   if(NoApruebaCantidadCamas){
      this.toastr.errorToastr('Existe inconsistencia en el valor de las camas ingresadas', 'Nuevo');
      return;
   }
   this.guardando = true;
   const tariffs: Tariff[] = [];
   this.tarifarioRack.valores.forEach(tarifRackValor => {
      tarifRackValor.tariffs.forEach(tariff => {
         tariffs.push(tariff.tariff);
      });
   });
   this.rucEstablishmentRegisterSelected.tarifario_rack = tariffs;
   this.languageDataService.save_languajes(this.establishment_selected.id, this.establishment_selected.languages_on_establishment).then( r => {

   }).catch( e => { console.log(e); });
   this.registerDataService.register_register_data(this.rucEstablishmentRegisterSelected).then( r => {
      this.certificadoUsoSuelo.register_id = r.id;
      this.guardarRecepcionRoom(r.id);
      this.guardarCertificadoUsoSuelos();
      const today = new Date();
      let clasificacion: String = '';
      let categoria: String = '';
      this.categories_registers.forEach(categorie_register => {
         if (categorie_register.id == this.rucEstablishmentRegisterSelected.register_type_id) {
            categoria = categorie_register.name;
         }
      });
      this.clasifications_registers.forEach(clasification_register => {
         if (clasification_register.code == this.categorySelectedCode) {
            clasificacion = clasification_register.name;
         }
      });
      let provinciaName: String = '';
      this.provinciasEstablishment.forEach(element => {
         if (element.code == this.provinciaEstablishmentSelectedCode) {
            provinciaName = element.name;
         }
      });
      let cantonName: String = '';
      this.cantonesEstablishment.forEach(element => {
         if (element.code == this.cantonEstablishmentSelectedCode) {
            cantonName = element.name;
         }
      });
      let parroquiaName: String = '';
      this.parroquiasEstablishment.forEach(element => {
         if (element.id == this.establishment_selected.ubication_id) {
            parroquiaName = element.name;
         }
      });
      const information = {
         para: this.user.name,
         tramite: 'Registro',
         ruc: this.user.ruc,
         nombreComercial: this.establishment_selected.commercially_known_name,
         fechaSolicitud: today.toLocaleString(),
         actividad: 'Alojamiento Turístico',
         clasificacion: clasificacion,
         categoria: categoria,
         tipoSolicitud: 'Registro',
         provincia: provinciaName,
         canton: cantonName,
         parroquia: parroquiaName,
         callePrincipal: this.establishment_selected.address_main_street,
         calleInterseccion: this.establishment_selected.address_secondary_street,
         numeracion: this.establishment_selected.address_number,
         thisYear:today.getFullYear()
      };
      this.mailerDataService.sendMail('mail', this.user.email.toString(), 'Información de Detalle de Solicitud', information).then( r => {
         this.guardando = false;
         this.refresh();
         this.toastr.successToastr('Solicitud de Registro Enviada, Satisfactoriamente.', 'Nuevo');
         this.router.navigate(['/main']);
      }).catch( e => { console.log(e); });
   }).catch( e => {
      this.guardando = false;
      this.toastr.errorToastr('Existe conflicto la información proporcionada.', 'Nuevo');
      return;
   });
  }

  checkAgreement() {
   if (this.terminosCondiciones) {
      this.refresh();
   }
  }

  getRegistersOnRuc() {
   this.rucEstablishmentRegisterSelected = new Register();
   this.mostrarDataRegister = false;
   this.registerDataService.get_registers_by_ruc(this.ruc_registro_selected.ruc.number).then( r => {
      this.ruc_registro_selected.registers = r as any[];
   }).catch( e => { console.log(e); });
  }

  onCellClickEstablishmentDeclaration(event) {
   this.ruc_registro_selected.ruc.establishments.forEach(element => {
      if (element.ruc_code_id == event.row.code) {
         this.selectRegisterEstablishmentDeclaration(element);
      }
   });
   this.rowsEstablishment.forEach(row => {
      if (row.code == event.row.code) {
         row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
      } else {
         row.selected = '';
      }
   });
  }
  
  getTariffs() {
   this.tarifas = [];
   this.tarifarioRack = {cabecera: [{valor:'Tipo de Habitación', padre: '', hijo: ''}], valores: []};
   this.tariffTypeDataService.get().then( r => {
      const result = r as TariffType[];
      result.forEach(father => {
         if(father.father_code == '-'){
            const tariff_father: TariffType = father;
            const tariff_child: TariffType[] = [];
            result.forEach(child => {
               if(child.father_code == father.code) {
                  child.is_reference = father.is_reference;
                  tariff_child.push(child);
                  this.tarifarioRack.cabecera.push({valor:'Tarifa por ' + tariff_father.name + ' en ' + child.name, padre:tariff_father.name, hijo: child.name});
               }
            });
            this.tarifas.push({father: tariff_father, childs: tariff_child});
         }
      });
   }).catch( e => { console.log(e); });
  }

  getEstablishmentWorkerGroup(): Worker[] {
   const workers_on_establishment: Worker[] = [];
   this.genders.forEach(gender => {
      this.worker_groups.forEach(worker_group => {
         const newEstablishmentWorker = new Worker();
         newEstablishmentWorker.gender_id = gender.id;
         newEstablishmentWorker.gender_name = gender.name;
         newEstablishmentWorker.worker_group_id = worker_group.id;
         newEstablishmentWorker.worker_group_name = worker_group.name;
         newEstablishmentWorker.is_max = worker_group.is_max;
         workers_on_establishment.push(newEstablishmentWorker);
      });
   });
   return workers_on_establishment;
  }

  getComplementaryServiceType(categoryFilter: string) {
   this.complementary_service_types = [];
   this.complementary_service_typeDataService.get_filtered(categoryFilter).then( r => {
      this.complementary_service_types = r as ComplementaryServiceType[];
   }).catch( e => console.log(e) );
  }

  getAllowedInfo(requisites?: RegisterRequisite[]) {
   this.getRequisitesByRegisterType(requisites);
   this.getBedTypes();
   this.getCapacityTypes();
  }

  getBedTypes() {
   this.alowed_bed_types = [];
   this.bedTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.alowed_bed_types = r as BedType[];
   }).catch( e => console.log(e) );
  }

  getRequisitesByRegisterType(requisites?: RegisterRequisite[]) {
   this.requisitesByRegisterType = [];
   this.rucEstablishmentRegisterSelected.requisites = [];
   this.showRequisites = false;
   this.requisiteDataService.get_filtered(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.requisitesByRegisterType = r as Requisite[];
      this.requisitesByRegisterType.forEach(element => {
         const newRegisterRequisite = new RegisterRequisite();
         newRegisterRequisite.requisite_name = element.name;
         newRegisterRequisite.requisite_id = element.id;
         newRegisterRequisite.fullfill = true;
         newRegisterRequisite.requisite_code = element.code;
         newRegisterRequisite.mandatory = element.mandatory;
         newRegisterRequisite.requisite_father_code = element.father_code;
         newRegisterRequisite.level = element.code.split('.').length;
         newRegisterRequisite.HTMLtype = element.type;
         newRegisterRequisite.fullfill = false;
         if (newRegisterRequisite.HTMLtype == 'YES / NO') {
            newRegisterRequisite.value = '0';
         }
         if (newRegisterRequisite.HTMLtype == 'NUMBER') {
            newRegisterRequisite.value = '0';
         }
         if (newRegisterRequisite.HTMLtype == 'TRUE / FALSE') {
            newRegisterRequisite.value = 'false';
         }
         this.rucEstablishmentRegisterSelected.requisites.push(newRegisterRequisite);
      });
      this.showRequisites  = true;
      if (typeof requisites !== 'undefined') {
         this.rucEstablishmentRegisterSelected.requisites.forEach(requisite => {
            requisites.forEach(requisite_incomming => {
               if (requisite.requisite_id == requisite_incomming.requisite_id) {
                  requisite.value = requisite_incomming.value;
                  requisite.fullfill = requisite_incomming.fullfill;
                  requisite.id = requisite_incomming.id;
                  requisite.register_id = requisite_incomming.register_id;
               }
            });
         });
      }
      this.rucEstablishmentRegisterSelected.requisites.sort(function(a, b) {
         const a_id = a.requisite_id;
         const b_id = b.requisite_id;
         return a_id > b_id ? 1 : a_id < b_id ? -1 : 0;
     });
   }).catch( e => console.log(e) );
  }

  getComplementaryServiceTypeCategories() {
   this.complementary_service_types_categories = [];
   this.complementary_service_typeDataService.get_filtered('-').then( r => {
      this.complementary_service_types_categories = r as ComplementaryServiceType[];
   }).catch( e => console.log(e) );
  }

  getCategories() {
   this.categories_registers = [];
   this.rucEstablishmentRegisterSelected.requisites = [];
   this.register_typeDataService.get_filtered(this.categorySelectedCode).then( r => {
      this.categories_registers = r as RegisterType[];
   }).catch( e => { console.log(e) });
  }

  getEstablishmentCertificationTypesCategories() {
   this.establishment_certification_types_categories = [];
   this.establishment_certification_typeDataService.get_filtered('-').then( r => {
      this.establishment_certification_types_categories = r as EstablishmentCertificationType[];
   }).catch( e => console.log(e) );
  }

  getEstablishmentCertificationTypesSpecific(establishment_certification: EstablishmentCertification) {
   establishment_certification.establishment_certification_type_specifics = [];
   this.establishment_certification_typeDataService.get_filtered(establishment_certification.establishment_certification_type_fatherCode).then( r => {
      establishment_certification.establishment_certification_type_specifics = r as EstablishmentCertificationType[];
   }).catch( e => console.log(e) );
  }

  getEstablishmentPropertyType() {
   this.establishment_property_types = [];
   this.establishment_property_typeDataService.get().then( r => {
      this.establishment_property_types = r as EstablishmentPropertyType[];
   }).catch( e => console.log(e) );
  }

  borrarCertificado(establishment_certification) {
   establishment_certification.establishment_certification_attachment = new EstablishmentCertificationAttachment();
  }

  getGenders() {
   this.genders = [];
   this.genderDataService.get().then( r => {
      this.genders = r as Gender[];
      this.buildWorkerGroups();
   }).catch( e => console.log(e) );
  }

  getSystemNames() {
   this.system_names = [];
   this.systemNameDataService.get().then( r => {
      this.system_names = r as SystemName[];
   }).catch( e => console.log(e) );
  }

  getZonalesEstablishment() {
   this.zonalesEstablishment = [];
   this.provinciasEstablishment = [];
   this.cantonesEstablishment = [];
   this.parroquiasEstablishment = [];
   this.zonalEstablishmentSelectedCode = '-';
   this.provinciaEstablishmentSelectedCode = '-';
   this.cantonEstablishmentSelectedCode = '-';
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered('-').then( zonales => {
      this.zonalesEstablishment = zonales as Ubication[];
      zonales.forEach(zonal => {
         this.ubicationDataService.get_filtered(zonal.code).then( r => {
            const provincias = r as Ubication[];
            provincias.forEach(provincia => {
               this.provinciasEstablishment.push(provincia);
            });
            this.provinciasEstablishment.sort(function(a, b) {
               const nameA = a.name.toLowerCase().trim();
               const nameB = b.name.toLowerCase().trim();
               if (nameA < nameB) {
                  return -1;
               }
               if (nameA > nameB) {
                  return 1;
               }
               return 0;
            });
         }).catch( e => { console.log(e) });
      });
   }).catch( e => { console.log(e) });
  }

  getCantonesEstablishment() {
   this.provinciasEstablishment.forEach(provincia => {
      if(provincia.code == this.provinciaEstablishmentSelectedCode){
         this.zonalEstablishmentSelectedCode = provincia.father_code.toString();
      }
   });
   this.cantonesEstablishment = [];
   this.parroquiasEstablishment = [];
   this.cantonEstablishmentSelectedCode = '-';
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered(this.provinciaEstablishmentSelectedCode).then( r => {
      this.cantonesEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getCantonesEstablishmentRecovery() {
   this.ubicationDataService.get_filtered(this.provinciaEstablishmentSelectedCode).then( r => {
      this.cantonesEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getParroquiasEstablishmentRecovery() {
   this.ubicationDataService.get_filtered(this.cantonEstablishmentSelectedCode).then( r => {
      this.parroquiasEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getParroquiasEstablishment() {
   this.parroquiasEstablishment = [];
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered(this.cantonEstablishmentSelectedCode).then( r => {
      this.parroquiasEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getMaxBed(capacity: Capacity) {
   this.allowed_capacity_types.forEach(capacityType => {
      if(capacityType.id == capacity.capacity_type_id) {
         capacity.max_bed = capacityType.bed_quantity;
         capacity.max_spaces = capacityType.spaces;
         if(capacityType.spaces == 999) {
            capacity.max_bed = 0;
            capacity.max_spaces = 0;
         } else {
            capacity.editable_beds = capacityType.editable_beds;
            capacity.editable_spaces = capacityType.editable_spaces;
         }
      }
   });
  }
  
  setGroupTypeSelected(id: number) {
     this.groupTypeSelected = new GroupType();
     this.group_types.forEach(element => {
       if(element.id == id) {
          this.groupTypeSelected = element;
       }
     });
  }

  getGroupType() {
    this.group_types = [];
    this.group_typeDataService.get().then( r => {
      this.group_types = r as GroupType[];
    }).catch( e => console.log(e) );
  }
  
  validateEstablecimiento(): Boolean {
   if (!((this.establishment_selected.ruc_code_id !== '-') &&
   (this.establishment_selected.ruc_name_type_id !== 0) &&
   this.establishmentComercialNameValidated  &&
   (this.establishment_selected.establishment_property_type_id !== 0) &&
   this.urlwebEstablishmentValidated &&
   (this.establishment_selected.ubication_id !== 0) &&
   this.addressEstablishmentValidated &&
   (this.establishment_selected.address_reference !== '') &&
   this.identificationContactEstablishmentValidated &&
   this.mainPhoneContactEstablishmentValidated &&
   this.secondaryPhoneContactEstablishmentValidated &&
   this.emailContactEstablishmentValidated &&
   this.REGCIVILOKEstablishment
   )) {
      return false;
   }
   return true;
  }

  validateWorkers(): Boolean {
   let toreturn = true;
   this.genders.forEach(gender => {
      let max = 0;
      this.establishment_selected.workers_on_establishment.forEach(worker => {
         if (worker.gender_name == gender.name) {
            this.worker_groups.forEach(workergroup => {
               if (workergroup.id == worker.worker_group_id) {
                  if (workergroup.is_max) {
                     max = worker.count;
                  }
               }
            });
         }
      });
      this.establishment_selected.workers_on_establishment.forEach(worker => {
         if(worker.gender_name == gender.name && worker.count > max) {
            toreturn = false;
         }
      });
   });
   return toreturn;
  }

  guardarEstablecimiento() {
   if (this.cantonEstablishmentSelectedCode == '2.17.1') {
      this.toastr.errorToastr('Estimado Usuario, para solicitar el Certificado de Registro de Turismo de establecimientos ubicados en el Cantón Quito, por favor acercarse a las oficinas de "Quito Turismo"', 'Nuevo');
      return;
   }
   if (!this.validateWorkers()) {
      this.toastr.errorToastr('Existe conflicto con la información ingresada referente a los Trabajadores en el Establecimiento.', 'Nuevo');
      return;
   }
   if (!this.validateEstablecimiento()) {
      this.toastr.errorToastr('Existe conflicto con la información ingresada.', 'Nuevo');
   }
   if(!this.REGCIVILOKEstablishment) {
      this.toastr.errorToastr('Esperando confirmación del Registro Civil', 'Registro Civil');
   }
   if(this.establishment_selected_picture.establishment_picture_file === '') {
      this.toastr.errorToastr('Debe cargar la fotografía de la fachada del establecimiento', 'Fotografía de Fachada del Establecimiento');
   }
   if(!this.REGCIVILOKEstablishment){
      return;
   }
   this.guardando = true;
   this.establishment_selected.ruc_id = this.ruc_registro_selected.ruc.id;
   this.establishment_declarations_selected = this.establishment_selected;
   if (this.establishment_selected.ruc_name_type_id <= 1 ) {
      this.establishment_selected.franchise_chain_name = '';
   } else {
      if (this.establishment_selected.franchise_chain_name == '') {
         this.toastr.errorToastr('Escriba el nombre de la Franquicia o Cadena', 'Nuevo');
         return;
      }
      if (!this.franchiseChainNameValidated) {
         this.toastr.errorToastr('El nombre de la Franquicia o Cadena es Incorrecto', 'Nuevo');
         return;
      }
   }
   this.establishmentDataService.register_establishment_data(this.establishment_selected).then( r => {
      this.guardando = false;
      if ( r === '0' ) {
         this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Nuevo');
         return;
      }
      this.establishment_declarations_selected.id = r.id;
      if (typeof this.establishment_selected_picture.id === 'undefined') {
         this.establishment_selected_picture.establishment_id = r.id;
         this.establishmentPictureDataService.post(this.establishment_selected_picture).then( r => {
            this.selectRegisterEstablishment(this.establishment_selected);
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
         }).catch( e => console.log(e) );
      } else {
         this.establishmentPictureDataService.put(this.establishment_selected_picture).then( r => {
            this.selectRegisterEstablishment(this.establishment_selected);
            this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
         }).catch( e => console.log(e) );
      }
   }).catch( e => {
      this.guardando = false;
      this.toastr.errorToastr('Existe conflicto con la información ingresada.', 'Nuevo');
      return;
   });
  }

  newRegisterRecord() {
   this.rucEstablishmentRegisterSelected = new Register();
   this.mostrarDataRegister = true;
  }

  checkRuc() {
   if (this.consumoRuc && this.SRIOK) {
     return;
   }
   this.rucData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al SRI...</strong></div>';
   this.ruc_registro_selected.ruc.number = this.ruc_registro_selected.ruc.number.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.number.length !== 13) {
     this.rucValidated = false;
     this.consumoRuc = false;
     this.ruc_registro_selected.ruc.baised_accounting = false;
     this.ruc_registro_selected.ruc.tax_payer_type_id = 1;
     return;
   }
   if (!this.consumoRuc) {
     this.consumoRuc = true;
     this.rucValidated = true;
     this.dinardapDataService.get_RUC(this.ruc_registro_selected.ruc.number).then( r => {
        this.SRIOK = true;
        this.rucValidated = true;
        const registros = r.return.instituciones.datosPrincipales.registros;
        let itemsDetalles = [];
        if (!Array.isArray(r.return.instituciones.detalle.items)) {
           itemsDetalles = [r.return.instituciones.detalle.items];
        } else {
           itemsDetalles = r.return.instituciones.detalle.items;
        }
        this.establishment_selected.ruc_code_id = '-';
        itemsDetalles.forEach(element => {
           const establishmentRuc = new EstablishmentOnRuc();
           let interseccion = '';
           element.registros.forEach(localData => {
              if (localData.campo === 'numeroEstableciminiento') {
                 establishmentRuc.numero = localData.valor;
              }
              if (localData.campo === 'interseccion') {
                 interseccion = localData.valor;
              }
              if (localData.campo === 'tipoEstablecimiento') {
                 establishmentRuc.tipo = localData.valor;
              }
           });
           establishmentRuc.direccion = interseccion;
        });
        this.rucData = '';
        registros.forEach(element => {
           if (element.campo === 'numeroRuc') {
              if (element.valor === this.ruc_registro_selected.ruc.number) {
                 this.toastr.successToastr('El RUC ingresado es correcto.', 'SRI');
                 this.rucValidated = true;
              } else {
                 this.toastr.errorToastr('El RUC ingresado no es correcto.', 'SRI');
                 this.rucValidated = false;
              }
           }
           if (this.rucValidated) {
              if (element.campo === 'razonSocial') {
                 this.rucData += '<strong>Razón Social: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'objetoSocial') {
               this.rucData += '<strong>Objeto Social: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'actividadEconomicaPrincipal') {
                 this.rucData += '<strong>Actividad Económica: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'fechaInicioActividades') {
                 this.rucData += '<strong>Fecha de Inicio de Actividades: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'fechaActualizacion') {
                 this.rucData += '<strong>Fecha de Actualización: </strong> ' + element.valor + '<br/>';
              }
              if (element.campo === 'obligado') {
                 if (element.valor === 'N') {
                    this.ruc_registro_selected.ruc.baised_accounting = false;
                    this.rucData += '<strong>Obligado a Llevar Contabilidad: </strong> NO<br/>';
                 } else {
                    this.ruc_registro_selected.ruc.baised_accounting = true;
                    this.rucData += '<strong>Obligado a Llevar Contabilidad: </strong> SI<br/>';
                 }
              }
              if (element.campo === 'tipoContribuyente') {
                 if (element.valor === 'PERSONAS NATURALES') {
                    this.ruc_registro_selected.ruc.tax_payer_type_id = 1;
                 } else {
                    this.ruc_registro_selected.ruc.tax_payer_type_id = 2;
                 }
                 this.rucData += '<strong>Tipo de Contribuyente: </strong> ' + element.valor + '<br/>';
              }
           }
        });
     }).catch( e => {
        this.toastr.errorToastr('El RUC ingresado no es correcto.', 'SRI');
        this.rucData = '<div class="alert alert-danger" role="alert">El SRI, no respondió. Vuelva a intentarlo.</div>';
        this.consumoRuc = false;
        this.SRIOK = false;
     });
  }
 }

 checkCedula() {
   this.ruc_registro_selected.ruc.contact_user.identification = this.ruc_registro_selected.ruc.contact_user.identification.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.contact_user.identification.length !== 10) {
      this.identificationContactValidated = false;
      this.consumoCedula = false;
      return;
   }
   if (this.consumoCedula && this.REGCIVILOK) {
      return;
   }
   this.cedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
   if (this.ruc_registro_selected.ruc.contact_user.identification === this.user.identification) {
      this.ruc_registro_selected.ruc.contact_user = this.user;
   }
   if (!this.consumoCedula) {
      this.consumoCedula = true;
      this.identificationContactValidated = true;
      this.dinardapDataService.get_cedula(this.ruc_registro_selected.ruc.contact_user.identification).then( r => {
         this.REGCIVILOK = true;
         const registros = r.entidades.entidad.filas.fila.columnas.columna;
         this.cedulaData = '';
         registros.forEach(element => {
            if (element.campo === 'cedula') {
               if (element.valor === this.ruc_registro_selected.ruc.contact_user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationContactValidated = true;
               } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationContactValidated = false;
               }
            }
            if (this.identificationContactValidated) {
               if (element.campo === 'nombre') {
                  this.ruc_registro_selected.ruc.contact_user.name = element.valor;
                  this.cedulaData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'fechaNacimiento') {
                  this.cedulaData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'nacionalidad') {
                  this.cedulaData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.cedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILOK = false;
         this.consumoCedula = false;
      });
   }
  }

  rucSaved(): Boolean {
   return typeof this.ruc_registro_selected.ruc.id !== 'undefined';
  }

  checkCedulaEstablishment() {
   this.establishment_selected.contact_user.identification = this.establishment_selected.contact_user.identification.replace(/[^\d]/, '');
   if (this.establishment_selected.contact_user.identification.length !== 10) {
      this.identificationContactEstablishmentValidated = false;
      this.consumoCedulaEstablishmentContact = false;
      return;
   }
   if (this.consumoCedulaEstablishmentContact && this.REGCIVILOKEstablishment) {
      return;
   }
   this.cedulaEstablishmentContactData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
   if (!this.consumoCedulaEstablishmentContact) {
      this.identificationContactEstablishmentValidated = true;
      this.consumoCedulaEstablishmentContact = true;
      this.dinardapDataService.get_cedula(this.establishment_selected.contact_user.identification).then( r => {
         const registros = r.entidades.entidad.filas.fila.columnas.columna;
         this.cedulaEstablishmentContactData = '';
         this.REGCIVILOKEstablishment = true;
         registros.forEach(element => {
            if (element.campo === 'cedula') {
               if (element.valor === this.establishment_selected.contact_user.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationContactEstablishmentValidated = true;
               } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationContactEstablishmentValidated = false;
               }
            }
            if (this.identificationContactEstablishmentValidated) {
               if (element.campo === 'nombre') {
                  this.cedulaEstablishmentContactData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
                  this.establishment_selected.contact_user.name = element.valor;
               }
               if (element.campo === 'nacionalidad') {
                  this.cedulaEstablishmentContactData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.cedulaEstablishmentContactData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILOKEstablishment = false;
         this.consumoCedulaEstablishmentContact = false;
      });
   }
  }

  checkIdentificationRepresentant() {
   this.ruc_registro_selected.ruc.person_representative.identification = this.ruc_registro_selected.ruc.person_representative.identification.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.person_representative.identification.length !== 10) {
      this.identificationRepresentativePersonValidated = false;
      this.consumoCedulaRepresentanteLegal = false;
     return;
   }
   if (this.consumoCedulaRepresentanteLegal && this.REGCIVILREPRESENTANTELEGALOK) {
      return;
   }
   this.representanteCedulaData = '<div class=\"progress mb-3\"><div class=\"progress-bar progress-bar-striped progress-bar-animated bg-warning col-12\">Espere...</div></div><div class="col-12 text-center"><strong>Conectándose al Registro Civil...</strong></div>';
   if (!this.consumoCedulaRepresentanteLegal) {
      this.identificationRepresentativePersonValidated = true;
      this.consumoCedulaRepresentanteLegal = true;
      this.dinardapDataService.get_cedula(this.ruc_registro_selected.ruc.person_representative.identification).then( r => {
         const registros = r.entidades.entidad.filas.fila.columnas.columna;
         this.representanteCedulaData = '';
         this.ruc_registro_selected.ruc.owner_name = '';
         this.REGCIVILREPRESENTANTELEGALOK = true;
         registros.forEach(element => {
            if (element.campo === 'cedula') {
               if (element.valor === this.ruc_registro_selected.ruc.person_representative.identification) {
                  this.toastr.successToastr('La cédula ingresada es correcta.', 'Registro Civil');
                  this.identificationRepresentativePersonValidated = true;
               } else {
                  this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
                  this.identificationRepresentativePersonValidated = false;
               }
            }
            if (this.identificationRepresentativePersonValidated) {
               if (element.campo === 'nombre') {
                  this.representanteCedulaData += '<strong>Nombre: </strong> ' + element.valor + '<br/>';
                  this.ruc_registro_selected.ruc.owner_name = element.valor;
               }
               if (element.campo === 'fechaNacimiento') {
                  this.representanteCedulaData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'nacionalidad') {
                  this.representanteCedulaData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
         this.representanteCedulaData = '<div class="alert alert-danger" role="alert">El Registro Civil, no respondió. Vuelva a intentarlo.</div>';
         this.REGCIVILREPRESENTANTELEGALOK = false;
         this.consumoCedulaRepresentanteLegal = false;
      });
   }
  }

  checkTelefonoPrincipal(): Boolean {
   this.ruc_registro_selected.ruc.contact_user.main_phone_number = this.ruc_registro_selected.ruc.contact_user.main_phone_number.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.contact_user.main_phone_number.length < 9) {
      this.mainPhoneContactValidated = false;
      return false;
   }
   this.mainPhoneContactValidated = true;
   return true;
  }

  checkTelefonoPrincipalContactoEstablecimiento(): Boolean {
   this.establishment_selected.contact_user.main_phone_number = this.establishment_selected.contact_user.main_phone_number.replace(/[^\d]/, '');
   if (this.establishment_selected.contact_user.main_phone_number.length < 9) {
      this.mainPhoneContactEstablishmentValidated = false;
      return false;
   }
   this.mainPhoneContactEstablishmentValidated = true;
   return true;
  }

  checkTelefonoSecundario(): Boolean {
   this.ruc_registro_selected.ruc.contact_user.secondary_phone_number = this.ruc_registro_selected.ruc.contact_user.secondary_phone_number.replace(/[^\d]/, '');
   if (this.ruc_registro_selected.ruc.contact_user.secondary_phone_number.length > 0 && this.ruc_registro_selected.ruc.contact_user.secondary_phone_number.length < 9) {
      this.secondaryPhoneContactValidated = false;
      return false;
   }
   this.secondaryPhoneContactValidated = true;
   return true;
  }

  checkTelefonoSecundarioContactoEstablecimiento(): Boolean {
   this.establishment_selected.contact_user.secondary_phone_number = this.establishment_selected.contact_user.secondary_phone_number.replace(/[^\d]/, '');
   if (this.establishment_selected.contact_user.secondary_phone_number.length > 0 && this.establishment_selected.contact_user.secondary_phone_number.length < 9) {
      this.secondaryPhoneContactEstablishmentValidated = false;
      return false;
   }
   this.secondaryPhoneContactEstablishmentValidated = true;
   return true;
  }

  checkTelefonoPrincipalEstablishment(): Boolean {
   this.establishment_selected.contact_user.main_phone_number = this.establishment_selected.contact_user.main_phone_number.replace(/[^\d]/, '');
   if (this.establishment_selected.contact_user.main_phone_number.length < 9) {
      this.mainPhoneEstablishmentValidated = false;
      return false;
   }
   this.mainPhoneEstablishmentValidated = true;
   return true;
  }

  checkTelefonoSecundarioEstablishment(): Boolean {
   this.establishment_selected.contact_user.secondary_phone_number = this.establishment_selected.contact_user.secondary_phone_number.replace(/[^\d]/, '');
   if (this.establishment_selected.contact_user.secondary_phone_number.length > 0 && this.establishment_selected.contact_user.secondary_phone_number.length < 9) {
      this.secondaryPhoneEstablishmentValidated = false;
      return false;
   }
   this.secondaryPhoneEstablishmentValidated = true;
   return true;
  }

  checkEmail(): Boolean {
   const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.ruc_registro_selected.ruc.contact_user.email.toString());
   this.emailContactValidated = isOk;
   return this.emailContactValidated;
  }

  checkEmailContactEstablishment(): Boolean {
   const isOk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.establishment_selected.contact_user.email.toString());
   this.emailContactEstablishmentValidated = isOk;
   return this.emailContactEstablishmentValidated;
  }

  checkURLWeb():Boolean {
   const isOk = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{2,}\.[a-z]{2}$/.test(this.establishment_selected.url_web.toString());
   const isOk2 = /^(www\.)?[a-z0-9\-\.]{2,}\.[a-z]{2}$/.test(this.establishment_selected.url_web.toString());
   const isOk3 = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{2,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
   const isOk4 = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{2}$/.test(this.establishment_selected.url_web.toString());
   const isOk5 = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
   this.urlwebEstablishmentValidated = isOk || isOk2 || isOk3 || isOk4 || isOk5 || (this.establishment_selected.url_web == '');
   return this.urlwebEstablishmentValidated;
  }

  checkEstablishmentComercialName(): Boolean {
   if(this.establishment_selected.commercially_known_name.length < 1) {
      this.establishmentComercialNameValidated = false;
      return false;
   }
   this.establishmentComercialNameValidated = true;
   return true;
  }

  checkEstablishmentAddress(): Boolean {
   if(this.establishment_selected.address_main_street === '' || this.establishment_selected.address_number === '' || this.establishment_selected.address_secondary_street === '') {
      this.addressEstablishmentValidated = false;
      return false;
   }
   this.addressEstablishmentValidated = true;
   return true;
  }
  
  buildWorkerGroups() {
   this.establishment_selected.workers_on_establishment = [];
   this.genders.forEach(gender => {
      this.worker_groups.forEach(worker_group => {
         const newWorker = new Worker();
         newWorker.worker_group_id = worker_group.id;
         newWorker.worker_group_name = worker_group.name;
         newWorker.gender_id = gender.id;
         newWorker.gender_name = gender.name;
         newWorker.count = 0;
         newWorker.is_max = worker_group.is_max;
         this.establishment_selected.workers_on_establishment.push(newWorker);
      });
   });
  }

  getWorkerGroups() {
   this.worker_groups = [];
   this.workerGroupDataService.get().then( r => {
      this.worker_groups = r as WorkerGroup[];
      this.getGenders();
   }).catch( e => console.log(e) ); 
  }

  getTaxPayerType() {
    this.tax_payer_types = [];
    this.tax_payer_typeDataService.get().then( r => {
       this.tax_payer_types = r as TaxPayerType[];
    }).catch( e => console.log(e) );
  }

  addPreviewRegisterCode() {
     const newPreviewRegisterCode = new PreviewRegisterCode();
     this.establishment_selected.preview_register_codes_on_establishment.push(newPreviewRegisterCode);
  }

  removePreviewRegisterCode(registerCode: PreviewRegisterCode) {
    const newPreviewRegisterCodes: PreviewRegisterCode[] = [];
    this.establishment_selected.preview_register_codes_on_establishment.forEach(preview_register_code => {
       if( preview_register_code !== registerCode ){
         newPreviewRegisterCodes.push(preview_register_code);
       }
    });
    this.establishment_selected.preview_register_codes_on_establishment = newPreviewRegisterCodes;
  }

  address_mapEventEstablishment(event) {
    this.establishment_selected.address_map_latitude = event.coords.lat;
    this.establishment_selected.address_map_longitude = event.coords.lng;
  }

  selectRegisterEstablishment(establishment: Establishment) {
   if(establishment.id == 0) {
    this.newRegisterEstablishment();
    this.establishment_selected.ruc_code_id = establishment.ruc_code_id;
    this.selectedNameType = new RucNameType();
    return;
   }
  this.selectRegisterEstablishmentDeclaration(establishment);
  let registerSelected = new Register();
  this.ruc_registro_selected.registers.forEach(register => {
     if (register.establishment.id == establishment.id) {
       registerSelected = register.register;
     }
  });
  if (registerSelected.id == 0) {
    this.rucEstablishmentRegisterSelected = new Register();
    this.certificadoUsoSuelo = new FloorAuthorizationCertificate();
    this.rucEstablishmentRegisterSelected.status = 11;
    this.rucEstablishmentRegisterSelected.establishment_id = establishment.id;
    this.mostrarDataRegister = true;
  } else {
    this.selectEstablishmentRegister(registerSelected, false);
  }
  this.establishmentDataService.get_filtered(establishment.id).then( r => {
    this.establishment_selected = r.establishment as Establishment;
    this.recoverUbication();
    this.checkEstablishmentAddress();
    this.checkURLWeb();
    this.getNameTypeInfo();
    this.validateNombreComercial();
    this.establishment_selected.contact_user = r.contact_user as User;
    this.checkCedulaEstablishment();
    this.checkTelefonoPrincipalContactoEstablecimiento();
    this.checkTelefonoSecundarioContactoEstablecimiento();
    this.validateNombreFranquiciaCadena();
    this.checkEmailContactEstablishment();
    this.buildWorkerGroups();
    this.establishment_selected.workers_on_establishment = r.workers_on_establishment as Worker[];
    this.establishment_selected.workers_on_establishment.forEach(worker => {
       this.genders.forEach(gender => {
          if(gender.id == worker.gender_id) {
             worker.gender_name = gender.name;
          }
       });
       this.worker_groups.forEach(worker_group => {
          if(worker_group.id == worker.worker_group_id) {
             worker.worker_group_name = worker_group.name;
             worker.is_max = worker_group.is_max;
          }
       });
    });
    this.refreshTotalWorkers();
    this.establishment_selected.languages_on_establishment = r.languages_on_establishment as Language[];
    this.establishment_selected.establishment_certifications_on_establishment = r.establishment_certifications_on_establishment as EstablishmentCertification[];
    this.establishment_selected.establishment_certifications_on_establishment.forEach(establishment_certification_on_establishment => {
       establishment_certification_on_establishment.establishment_certification_attachment = new EstablishmentCertificationAttachment();
       this.establishment_certification_types.forEach(establishment_certification_type => {
          if (establishment_certification_on_establishment.establishment_certification_type_id == establishment_certification_type.id) {
             establishment_certification_on_establishment.establishment_certification_type_fatherCode = establishment_certification_type.father_code;
             this.getEstablishmentCertificationTypesSpecific(establishment_certification_on_establishment);
          }
       });
       this.establishmentCertificationAttachmentDataService.get(establishment_certification_on_establishment.establishment_certification_attachment_id).then( r_attachment => {
          establishment_certification_on_establishment.establishment_certification_attachment = r_attachment.EstablishmentCertificationAttachment as EstablishmentCertificationAttachment;
       }).catch( e => { console.log(e); });
    });
    this.mostrarDataEstablishment = true;
  }).catch( e => { console.log(e); });
  this.establishmentPictureDataService.get_by_establishment_id(establishment.id).then( r => {
     this.establishment_selected_picture = r as EstablishmentPicture;
  }).catch( e => { console.log(e); });
}

  selectRegisterEstablishmentDeclaration(establishment: Establishment) {
   this.establishment_declarations_selected = establishment;
   this.getDeclarationsByEstablishment(establishment.id);
   this.declaration_selected = new Declaration();
   this.mostrarDataDeclaration = false;
  }

  recoverUbication() {
   this.ubicationDataService.getByIdLower(this.establishment_selected.ubication_id).then( r => {
     this.regionSelectedCode = r.region;
     this.getClasifications();
     this.zonalEstablishmentSelectedCode = r.zonal.code;
     this.provinciaEstablishmentSelectedCode = r.provincia.code;
     this.cantonEstablishmentSelectedCode = r.canton.code;
     this.establishment_selected.ubication_id = r.parroquia.id;
     this.getCantonesEstablishmentRecovery();
     this.getParroquiasEstablishmentRecovery();
   }).catch( e => { console.log(e); });
 }

 newRegisterEstablishment() {
   this.establishment_selected = new Establishment();
   this.establishment_declarations_selected = new Establishment();
   this.establishment_selected_picture = new EstablishmentPicture();
   this.establishment_selected.workers_on_establishment = this.getEstablishmentWorkerGroup();
   this.mostrarDataEstablishment = true;
   this.cedulaEstablishmentContactData = '';
   this.rucEstablishmentRegisterSelected.editable = false;
   this.getCantonesEstablishment();
   this.declarations = [];
   this.provinciaEstablishmentSelectedCode = '-';
 }

  newPreviewRegisterCode() {

  }

  selectPreviewRegisterCode(preview_register_code: PreviewRegisterCode) {
    this.preview_register_codes_establishmentSelected = preview_register_code;
  }

  selectLanguage(language: Language) {
    this.languages_establishmentSelectedId = language.id;
 }

 addLanguage() {
   if (this.languages_establishmentSelectedId === 0) {
      this.toastr.errorToastr('Seleccione un registro.', 'Error');
      return;
   }
   this.languages.forEach(language => {
      if (language.id == this.languages_establishmentSelectedId) {
         let existe = false;
         this.establishment_selected.languages_on_establishment.forEach(element => {
            if (element.id == language.id) {
               existe = true;
            }
         });
         if (!existe) {
            this.establishment_selected.languages_on_establishment.push(language);
            this.languages_establishmentSelectedId = 0;
         } else {
            this.toastr.errorToastr('El registro ya existe.', 'Error');
         }
      }
   });
}

 getLanguage() {
   this.languages = [];
   this.languageDataService.get().then( r => {
      this.languages = r as Language[];
   }).catch( e => console.log(e) );
 }

 getLanguagesOnEstablishment() {
   this.establishment_selected.languages_on_establishment = [];
   this.establishmentDataService.get(this.establishment_selected.id).then( r => {
      this.establishment_selected.languages_on_establishment = r.attach[0].languages_on_establishment as Language[];
   }).catch( e => console.log(e) );
 }

 removeLanguage() {
   if (this.languages_establishmentSelectedId === 0) {
      this.toastr.errorToastr('Seleccione un registro.', 'Error');
      return;
   }
   const newLanguages: Language[] = [];
   let eliminado = false;
   this.establishment_selected.languages_on_establishment.forEach(language => {
      if (language.id !== this.languages_establishmentSelectedId) {
         newLanguages.push(language);
      } else {
         eliminado = true;
      }
   });
   if (!eliminado) {
      this.toastr.errorToastr('Registro no encontrado.', 'Error');
      return;
   }
   this.establishment_selected.languages_on_establishment = newLanguages;
   this.languages_establishmentSelectedId = 0;
 }
  
  selectWorker(worker: Worker) {
    this.worker_establishmentSelected = worker;
  }

  addWorker() {
   const newWorker = new Worker();
   this.establishment_selected.workers_on_establishment.push(newWorker);
  }

  removeWorker(worker: Worker) {
    const newWorkers: Worker[] = [];
    this.establishment_selected.workers_on_establishment.forEach(element => {
       if (element !== worker){
          newWorkers.push(element);
       }
    });
    this.establishment_selected.workers_on_establishment = newWorkers;
  }

  selectEstablishmentCertification(establishment_certification: EstablishmentCertification) {
    this.establishment_certifications_establishmentSelected = establishment_certification;
  }

  addEstablishmentCertification() {
   const newEstablishmentCertification = new EstablishmentCertification();
   this.establishment_selected.establishment_certifications_on_establishment.push(newEstablishmentCertification);
  }

  removeEstablishmentCertification(establishmentCertification: EstablishmentCertification) {
    const newEstablishmentCertifications: EstablishmentCertification[] = [];
    this.establishment_selected.establishment_certifications_on_establishment.forEach(element => {
       if (element !== establishmentCertification) {
          newEstablishmentCertifications.push(element);
       }
    });
    this.establishment_selected.establishment_certifications_on_establishment = newEstablishmentCertifications;
  }

  downloadEstablishmentCertification(establishmentCertification: EstablishmentCertification) {
   this.establishment_selected.establishment_certifications_on_establishment.forEach(element => {
      if (element == establishmentCertification) {
         this.downloadFile(
            element.establishment_certification_attachment.establishment_certification_attachment_file, 
            element.establishment_certification_attachment.establishment_certification_attachment_file_type, 
            element.establishment_certification_attachment.establishment_certification_attachment_file_name);  
      }
   });
  }

  downloadFile(file: any, type: any, name: any) {
    const byteCharacters = atob(file);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    saveAs(blob, name);
  }

  CodificarArchivoEstablishmentCertification(event, establishment_certification) {
   const reader = new FileReader();
   if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.establishment_selected.establishment_certifications_on_establishment.forEach(element => {
         if(element == establishment_certification) {
            element.establishment_certification_attachment.establishment_certification_attachment_file = reader.result.toString().split(',')[1];
            element.establishment_certification_attachment.establishment_certification_attachment_file_type = file.type;
            element.establishment_certification_attachment.establishment_certification_attachment_file_name = file.name;
         }
      });
    };
   }
  }

  selectEstablishmentRegister(register: Register, editable: Boolean) {
   this.mostrarDataRegister = false;
   this.rucEstablishmentRegisterSelected = new Register();
   this.certificadoUsoSuelo = new FloorAuthorizationCertificate();
   this.registerDataService.get_register_data(register.id).then( r => {
      this.rucEstablishmentRegisterSelected = r.register as Register;
      this.getCertificadoUsoSuelo(this.rucEstablishmentRegisterSelected.id);
      this.getReceptionRoom(this.rucEstablishmentRegisterSelected.id);
      this.setCategory(this.rucEstablishmentRegisterSelected.register_type_id);
      this.rucEstablishmentRegisterSelected.editable = false;
      this.getTramiteStatus(this.rucEstablishmentRegisterSelected.status);
      this.rucEstablishmentRegisterSelected.status = r.status.state_id;
      this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = r.complementary_service_types_on_register as ComplementaryServiceType[];
      this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register = r.complementary_service_foods_on_register as ComplementaryServiceFood[];
      this.rucEstablishmentRegisterSelected.capacities_on_register = r.capacities_on_register as Capacity[];
      this.calcSpaces();
      this.getTarifarioRack(register.id);
      this.getCategories();
      this.getAllowedInfo(r.requisites);
      this.allowed_capacity_types = [];
      this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r2 => {
        this.allowed_capacity_types = r2 as CapacityType[];
        this.mostrarDataRegister = true;
        this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
           this.getMaxBed(capacity);
           this.calcBeds(capacity);
        });
        this.calcSpaces();
      }).catch( e => { console.log(e); });
   }).catch( e => { console.log(e); });
 }

  selectComplementaryServiceType(complementary_service_type: ComplementaryServiceType) {
    this.complementary_service_types_registerSelectedId = complementary_service_type.id;
  }

  getTramiteStatus(status_id: number) {
     this.states.forEach(state => {
        if (state.id == status_id) {
         this.estado_tramite_selected_code = state.father_code;
         this.getSpecificStates();
        }
     });
  }

  getSpecificStates() {
   this.specific_states = [];
   this.states.forEach(element => {
      if (element.father_code == this.estado_tramite_selected_code) {
         this.specific_states.push(element);
      }
   });
  }

  addComplementaryServiceType() {
    if (this.complementary_service_types_registerSelectedId === 0) {
      this.toastr.errorToastr('Seleccione un coordinador.', 'Error');
      return;
    }
    this.complementary_service_types.forEach(complementary_capacity => {
      if (complementary_capacity.id == this.complementary_service_types_registerSelectedId) {
         let existe = false;
         this.rucEstablishmentRegisterSelected.complementary_service_types_on_register.forEach(element => {
            if (element.id == complementary_capacity.id) {
               existe = true;
            }
         });
         if (!existe) {
            this.rucEstablishmentRegisterSelected.complementary_service_types_on_register.push(complementary_capacity);
            this.complementary_service_types_registerSelectedId = 0;
         } else {
            this.toastr.errorToastr('El registro ya existe.', 'Error');
         }
      }
    });
  }

  validateRegister(): Boolean {
     const c1 = (this.rucEstablishmentRegisterSelected.establishment_id == 0);
     const c2 = (this.rucEstablishmentRegisterSelected.status == 0);
     const c3 = (this.categorySelectedCode == '-');
     const c4 = (this.rucEstablishmentRegisterSelected.register_type_id == 0);
     const c5 = (this.rucEstablishmentRegisterSelected.total_spaces == 0);
     let c6: Boolean = false;
     this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
      if (!c6) {
         c6 = (capacity.quantity * capacity.total_spaces == 0);
      }
     });
     let c7: Boolean = false;
     this.rucEstablishmentRegisterSelected.complementary_service_foods_on_register.forEach(complementaryServiceFood => {
      if (!c7) {
         c7 = (complementaryServiceFood.complementary_service_food_type_id == 0);
      }
     });
     const toReturn = c1 || c2 || c3 || c4 || c5 || c6 || c7;
   return !toReturn;
  }

  removeComplementaryServiceType() {
   if (this.complementary_service_types_registerSelectedId === 0) {
     this.toastr.errorToastr('Seleccione un registro.', 'Error');
     return;
   }
   const newComplementaryCapacities: ComplementaryServiceType[] = [];
   let eliminado = false;
   this.rucEstablishmentRegisterSelected.complementary_service_types_on_register.forEach(complementary_capacity => {
     if (complementary_capacity.id !== this.complementary_service_types_registerSelectedId) {
        newComplementaryCapacities.push(complementary_capacity);
     } else {
        eliminado = true;
     }
   });
   if (!eliminado) {
     this.toastr.errorToastr('Registro no encontrado.', 'Error');
     return;
   }
   this.rucEstablishmentRegisterSelected.complementary_service_types_on_register = newComplementaryCapacities;
   this.complementary_service_types_registerSelectedId = 0;
 }

  subirFotoFachada() {
   this.fotoFachadaInput.nativeElement.click();
  }

   CodificarArchivo(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     reader.readAsDataURL(file);
     reader.onload = () => {
       this.establishment_selected_picture.establishment_picture_file_name = file.name;
       this.establishment_selected_picture.establishment_picture_file_type = file.type;
       this.establishment_selected_picture.establishment_picture_file = reader.result.toString().split(',')[1];
     };
    }
   }

  goToPageEstablishment(page: number) {
   if ( page < 1 || page > this.lastPageEstablishment ) {
      this.toastr.errorToastr('La página solicitada no existe.', 'Error');
      return;
   }
   this.currentPageEstablishment = page;
  }

  goToPageRegister(page: number) {
   this.mostrarDataRegister = false;
   this.ruc_registro_selected.registers = [];
   this.rucEstablishmentRegisterSelected = new Register();
   this.getRegistersOnRuc();
   if ( page < 1 || page > this.lastPageRegister ) {
      this.toastr.errorToastr('La página solicitada no existe.', 'Error');
      return;
   }
   this.currentPageRegister = page;
  }

  selectBed(bed: Bed) {
   this.bedSelected = bed;
  }

  addBed(capacity: Capacity) {
   const newBed = new Bed();
   capacity.total_spaces = 0;
   capacity.beds_on_capacity.push(newBed);
  }

  removeBed(capacity: Capacity) {
   const newBeds: Bed[] = [];
   capacity.total_spaces = 0;
   capacity.beds_on_capacity.forEach(element => {
      if(element !== this.bedSelected){
         newBeds.push(element);
      }
   });
   capacity.beds_on_capacity = newBeds;
  }

  addCapacity() {
   const newCapacity = new Capacity();
   newCapacity.editable = true;
   this.rucEstablishmentRegisterSelected.total_spaces = 0;
   this.rucEstablishmentRegisterSelected.capacities_on_register.push(newCapacity);
  }

  newTariffs(): Tariff[] {
   const toReturn: Tariff[] = [];
   this.tarifas.forEach(element => {
      element.childs.forEach(tariffType => {
         const newTariff = new Tariff();
         newTariff.tariff_father_name = element.father.name;
         newTariff.tariff_name = tariffType.name;
         newTariff.tariff_type_id = tariffType.id;
         toReturn.push(newTariff);
      });
   });
   return toReturn;
  }

  removeCapacity(capacity: Capacity) {
   const newCapacities: Capacity[] = [];
   this.rucEstablishmentRegisterSelected.total_spaces = 0;
   this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(element => {
      if(capacity !== element) {
         newCapacities.push(element);
      }
   });
   this.rucEstablishmentRegisterSelected.capacities_on_register = newCapacities;
   this.calcSpaces();
  }

  calcSpaces(capacity?) {
   if(typeof capacity !== 'undefined') {
      this.allowed_capacity_types.forEach(capacityType => {
         if (capacityType.id == capacity.capacity_type_id) {
            if (capacityType.editable_spaces) {
               capacity.max_spaces = 0;
            } else {
               capacity.max_spaces = capacityType.spaces * capacity.quantity;
            }
            if (capacity.max_bed > capacityType.bed_quantity){
               capacity.max_bed = capacityType.bed_quantity;
            }
            if (capacity.max_bed == 0){
               capacity.max_bed = 1;
            }
         }
      });
   }
   this.rucEstablishmentRegisterSelected.total_spaces = 0;
   this.rucEstablishmentRegisterSelected.total_habitations = 0;
   this.rucEstablishmentRegisterSelected.total_beds = 0;
   if (this.tarifarioRack.valores.length == this.rucEstablishmentRegisterSelected.capacities_on_register.length) {
      for (let i = 0; i<this.rucEstablishmentRegisterSelected.capacities_on_register.length ; i++) {
         this.tarifarioRack.valores[i].idTipoCapacidad = this.rucEstablishmentRegisterSelected.capacities_on_register[i].capacity_type_id;
      }
   } else {
      this.tarifarioRack.valores = [];
      this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
         const childs = [];
         let idTipoCapacidad = capacity.capacity_type_id;
         let editable = capacity.editable;
         this.tarifas.forEach(tariffType => {
            tariffType.childs.forEach(tariffTypeChild => {
               const es_referencia = tariffType.father.is_reference;
               let plazasHabitacion = 0;
               this.allowed_capacity_types.forEach(capacityType => {
                  if (capacityType.id == idTipoCapacidad) {
                     plazasHabitacion = capacityType.spaces;
                  }
               });
               let nombreDivision = '';
               nombreDivision = tariffTypeChild.name;
               const tariff = new Tariff();
               tariff.tariff_type_id = tariffTypeChild.id;
               tariff.price = 0;
               tariff.capacity_type_id = capacity.capacity_type_id;
               const today = new Date();
               tariff.year = today.getFullYear();
               let newChild = {nombreDivision: nombreDivision, tariff: tariff, isReference: es_referencia, plazasHabitacion: plazasHabitacion};
               childs.push(newChild);
            });
         });
         const topush = {idTipoCapacidad: idTipoCapacidad, tariffs: childs, editable: editable};
         this.tarifarioRack.valores.push(topush);
      });
   }
   this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
      this.allowed_capacity_types.forEach(capacityType => {
         if (capacityType.id == capacity.capacity_type_id) {
            capacity.editable_beds = capacityType.editable_beds;
            capacity.editable_spaces = capacityType.editable_spaces;
         }
      });
      this.rucEstablishmentRegisterSelected.total_spaces += capacity.max_spaces;
      this.rucEstablishmentRegisterSelected.total_habitations += capacity.quantity;
      this.rucEstablishmentRegisterSelected.total_beds += (capacity.max_bed * capacity.quantity);
   });
  }

  calcBeds(capacity: Capacity) {
   capacity.total_spaces = 0;
   let beds_declared = 0;
   capacity.beds_on_capacity.forEach(bed => {
      let places = 0;
      beds_declared += bed.quantity;
      this.alowed_bed_types.forEach(bedType => {
         if(bedType.id == bed.bed_type_id) {
            places = bed.quantity;
         }
      });
      capacity.total_spaces += places;
   });
   if(beds_declared == capacity.max_bed){
      capacity.max_bed_ok = true;
   }else {
      capacity.max_bed_ok = false;
   }
   this.validateTariffs();
  }

  selectCapacity(capacity: Capacity) {
   this.capacitySelected = capacity;
  }

  openDialog(content, status) {
     this.statusSelected = status;
   this.modalService.open(content, { centered: true, size: 'sm' }).result.then(( response => {
   }), ( r => {}));
  }
}