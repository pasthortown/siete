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
import { FranchiseChainName } from 'src/app/models/BASE/FranchiseChainName';
import { TaxPayerType } from 'src/app/models/BASE/TaxPayerType';
import { EstablishmentCertification } from 'src/app/models/BASE/EstablishmentCertification';
import { Language } from 'src/app/models/BASE/Language';
import { RegistroDataCarrier } from 'src/app/models/negocio/RegistroDataCarrier';
import { TaxPayerTypeService } from 'src/app/services/CRUD/BASE/taxpayertype.service';
import { FranchiseChainNameService } from 'src/app/services/CRUD/BASE/franchisechainname.service';
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


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
   @ViewChild('fotoFachadaInput') fotoFachadaInput;
   @ViewChild('EstablishmentCertificationAttachedFile') EstablishmentCertificationAttachedFile;
  //DATOS RUC
  rucReady = false;
  currentPageRegister = 1;
  lastPageRegister = 1;
  recordsByPageRegister = 5;
  mostrarData = true;
  group_types: GroupType[] = [];
  rucs_registrados: RegistroDataCarrier[] = [];
  ruc_registro_selected: RegistroDataCarrier = new RegistroDataCarrier();
  rucData = '-';
  cedulaData = '-';
  representanteCedulaData = '-';
  tax_payer_types: TaxPayerType[] = [];
  franchises: FranchiseChainName[] = [];
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
  franchises_rucSelectedId = 0;
  user: User = new User();

  //DATOS ESTABLECIMIENTO
  identificationContactEstablishmentValidated = false;
  mainPhoneContactEstablishmentValidated = false;
  secondaryPhoneContactEstablishmentValidated = true;
  emailContactEstablishmentValidated = false;
  cedulaEstablishmentContactData = 'Datos Interconectados de la cédula';
  currentPageEstablishment = 1;
  lastPageEstablishment = 1;
  recordsByPageEstablishment = 5;
  mostrarDataEstablishment = true;
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
  establishment_certifications_establishmentSelected: EstablishmentCertification = new EstablishmentCertification();
  preview_register_codes_establishmentSelected = new PreviewRegisterCode();
  establishmentComercialNameValidated = false;
  addressEstablishmentValidated = false;
  mainPhoneEstablishmentValidated = false;
  secondaryPhoneEstablishmentValidated = true;
  urlwebEstablishmentValidated = false;
  
  //DATOS REGISTRO
  mostrarDataRegister = true;
  showRequisites = false;
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
  alowed_capacity_types: CapacityType[] = [];

  //DINARDAP
  consumoCedula = false;
  consumoCedulaEstablishmentContact = false;
  consumoRuc = false;
  consumoCedulaRepresentanteLegal = false;

  constructor(private toastr: ToastrManager,
              private userDataService: UserService,
              private dinardapDataService: DinardapService,
              private franchiseDataService: FranchiseChainNameService,
              private rucDataService: RucService,
              private modalService: NgbModal,
              private rucNameTypeDataService: RucNameTypeService,
              private group_typeDataService: GroupTypeService,
              private languageDataService: LanguageService,
              private ubicationDataService: UbicationService,
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
              private tariffTypeDataService: TariffTypeService,
              private stateDataService: StateService,
              private tax_payer_typeDataService: TaxPayerTypeService) {}

  ngOnInit() {
    this.refresh();
  }

  validateRuc(): Boolean {
     return this.identificationContactValidated &&
     this.rucValidated &&
     this.mainPhoneContactValidated &&
     this.secondaryPhoneContactValidated &&
     this.emailContactValidated;
  }

  refresh() {
    this.ruc_registro_selected = new RegistroDataCarrier();
    this.getUser();
    this.getTaxPayerType();
    this.getFranchise();
    this.getGroupType();
    this.getCapacityTypes();
    this.getStates();
    this.getRucNameTypes();
    this.getZonalesEstablishment();
    this.getEstablishmentPropertyType();
    this.getLanguage();
    this.getSystemNames();
    this.getWorkerGroups();
    this.getGenders();
    this.getTariffs();
    this.getClasifications();
    this.getEstablishmentCertificationTypesCategories();
    this.getEstablishmentCertificationTypesSpecific();
    this.getComplementaryServiceTypeCategories();
    this.groupTypeSelected = new GroupType();
  }

  getRuc(number: String) {
   this.rucDataService.get_filtered(number).then( r => {
      if ( typeof r.Ruc === 'undefined' ) {
         this.ruc_registro_selected.ruc = new Ruc();
         this.ruc_registro_selected.ruc.number = number;
         this.ruc_registro_selected.ruc.contact_user = new User();
         this.ruc_registro_selected.ruc.establishmentsSRI = [];
         this.ruc_registro_selected.ruc.establishments = [];
         this.ruc_registro_selected.ruc.group_given = new GroupGiven();
         this.ruc_registro_selected.ruc.person_representative = new PersonRepresentative();
         this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc = [];
         this.ruc_registro_selected.ruc.tax_payer_type_id = 0;
         this.ruc_registro_selected.ruc.contact_user_id = 0;
         this.checkRuc();
      } else {
         this.ruc_registro_selected.ruc = r.Ruc as Ruc;
         this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc = r.attach[0].franchise_chain_names_on_ruc as FranchiseChainName[];
         this.ruc_registro_selected.ruc.contact_user = r.contact_user as User;
         this.checkRuc();
         this.checkCedula();
         this.checkEmail();
         this.checkTelefonoPrincipal();
         this.checkTelefonoSecundario();
      }
   }).catch( e => { console.log(e); });
  }

  getUser() {
   this.userDataService.get(JSON.parse(sessionStorage.getItem('user')).id).then( r => {
     this.user = r as User;
     this.getRuc(this.user.ruc);
   }).catch( e => console.log(e));
  }

  getCapacityTypes() {
   this.alowed_capacity_types = [];
   this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.alowed_capacity_types = r as CapacityType[];
   }).catch( e => { console.log(e); });
  }

  getStates() {
   this.states = [];
   this.stateDataService.get().then( r => {
      this.states = r as State[];
   }).catch( e => { console.log(e); });
  }

  getClasifications() {
   this.clasifications_registers = [];
   this.categorySelectedCode = '-';
   this.showRequisites = false;
   this.register_typeDataService.get_filtered('-').then( r => {
      this.clasifications_registers = r as RegisterType[];
   }).catch( e => { console.log(e) });
  }

  getRucNameTypes() {
   this.ruc_name_types = [];
   this.rucNameTypeDataService.get().then( r => {
      this.ruc_name_types = r as RucNameType[];
   }).catch( e => { console.log(e); });
  }

  guardarRUC() {
   this.ruc_registro_selected.ruc.contact_user.ruc = this.ruc_registro_selected.ruc.number;
   if (typeof this.ruc_registro_selected.ruc.id === 'undefined') {11
      this.rucDataService.register_ruc(this.ruc_registro_selected.ruc).then( r => {
         if ( r === '0' ) {
            this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Nuevo');
            return;
         }
         this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
      }).catch( e => console.log(e) );
   } else {
      this.rucDataService.update_ruc(this.ruc_registro_selected.ruc).then( r => {
         if ( r === '0' ) {
            this.toastr.errorToastr('Existe conflicto con el correo de la persona de contacto ingresada.', 'Actualizar');
            return;
         }
         this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
      }).catch( e => console.log(e) );
   }
  }

  getTariffs() {
   this.tarifas = [];
   this.tariffTypeDataService.get().then( r => {
      const result = r as TariffType[];
      result.forEach(father => {
         if(father.father_code == '-'){
            const tariff_father: TariffType = father;
            const tariff_child: TariffType[] = [];
            result.forEach(child => {
               if(child.father_code == father.code) {
                  tariff_child.push(child);
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

  getAllowedInfo() {
   this.getRequisitesByRegisterType();
   this.getBedTypes();
   this.getCapacityTypes();
  }

  getBedTypes() {
   this.alowed_bed_types = [];
   this.bedTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.alowed_bed_types = r as BedType[];
   }).catch( e => console.log(e) );
  }

  getRequisitesByRegisterType() {
   this.requisitesByRegisterType = [];
   this.rucEstablishmentRegisterSelected.requisites = [];
   this.showRequisites = false;
   this.requisiteDataService.get_filtered(this.rucEstablishmentRegisterSelected.register_type_id).then( r => {
      this.requisitesByRegisterType = r as Requisite[];
      this.requisitesByRegisterType.forEach(element => {
         let existe = false;
         this.rucEstablishmentRegisterSelected.requisites.forEach(element1 => {
            if (element1.requisite_name == element.name) {
               existe = true;
            }
         });
         if (!existe) {
            const newRegisterRequisite = new RegisterRequisite();
            newRegisterRequisite.requisite_name = element.name;
            newRegisterRequisite.requisite_id = element.id;
            newRegisterRequisite.fullfill = false;
            this.rucEstablishmentRegisterSelected.requisites.push(newRegisterRequisite);
         }
      });
      this.showRequisites  = true;
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
   this.rucEstablishmentRegisterSelected.register_type_id = 0;
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

  getEstablishmentCertificationTypesSpecific() {
   this.establishment_certifications_establishmentSelected.establishment_certification_type_specifics = []
   this.establishment_certifications_establishmentSelected.establishment_certification_type_id = 0;
   this.establishment_certification_typeDataService.get_filtered(this.establishment_certifications_establishmentSelected.establishment_certification_type_fatherCode).then( r => {
      this.establishment_certifications_establishmentSelected.establishment_certification_type_specifics = r as EstablishmentCertificationType[];
   }).catch( e => console.log(e) );
  }

  getEstablishmentPropertyType() {
   this.establishment_property_types = [];
   this.establishment_property_typeDataService.get().then( r => {
      this.establishment_property_types = r as EstablishmentPropertyType[];
   }).catch( e => console.log(e) );
  }

  getGenders() {
   this.genders = [];
   this.genderDataService.get().then( r => {
      this.genders = r as Gender[];
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
   this.ubicationDataService.get_filtered('-').then( r => {
      this.zonalesEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getProvinciasEstablishment() {
   this.provinciasEstablishment = [];
   this.cantonesEstablishment = [];
   this.parroquiasEstablishment = [];
   this.provinciaEstablishmentSelectedCode = '-';
   this.cantonSelectedCode = '-';
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered(this.zonalEstablishmentSelectedCode).then( r => {
      this.provinciasEstablishment = r as Ubication[];
   }).catch( e => { console.log(e) });
  }

  getCantonesEstablishment() {
   this.cantonesEstablishment = [];
   this.parroquiasEstablishment = [];
   this.cantonEstablishmentSelectedCode = '-';
   this.establishment_selected.ubication_id = 0;
   this.ubicationDataService.get_filtered(this.provinciaEstablishmentSelectedCode).then( r => {
      this.cantonesEstablishment = r as Ubication[];
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
   this.alowed_capacity_types.forEach(element => {
      if (element.id == capacity.capacity_type_id){
         capacity.max_bed = element.bed_quantity;
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
  
  newRegisterRecord() {
   this.rucEstablishmentRegisterSelected = new Register();
   this.mostrarDataRegister = true;
  }

  checkRuc() {
    this.ruc_registro_selected.ruc.number = this.ruc_registro_selected.ruc.number.replace(/[^\d]/, '');
    if (this.ruc_registro_selected.ruc.number.length !== 13) {
      this.rucValidated = false;
      this.consumoRuc = false;
      this.ruc_registro_selected.ruc.baised_accounting = false;
      this.ruc_registro_selected.ruc.tax_payer_type_id = 1;
      this.setGroupTypeSelected(this.ruc_registro_selected.ruc.group_given.group_type_id);
      return;
    }
    if (!this.consumoRuc) {
      this.consumoRuc = true;
      this.dinardapDataService.get_RUC(this.ruc_registro_selected.ruc.number).then( r => {
         this.rucValidated = true;
         const registros = r.return.instituciones.datosPrincipales.registros;
         let itemsDetalles = [];
         if (!Array.isArray(r.return.instituciones.detalle.items)) {
            itemsDetalles = [r.return.instituciones.detalle.items];
         } else {
            itemsDetalles = r.return.instituciones.detalle.items;
         }
         this.ruc_registro_selected.ruc.establishmentsSRI = [];
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
            this.ruc_registro_selected.ruc.establishmentsSRI.push(establishmentRuc);
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
                     this.ruc_registro_selected.ruc.group_given.group_type_id = 1;
                     this.setGroupTypeSelected(this.ruc_registro_selected.ruc.group_given.group_type_id);
                  }
                  this.rucData += '<strong>Tipo de Contribuyente: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('El RUC ingresado no es correcto.', 'SRI');
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
   if (this.ruc_registro_selected.ruc.contact_user.identification === this.user.identification) {
      this.ruc_registro_selected.ruc.contact_user = this.user;
      this.checkEmail();
      this.checkTelefonoPrincipal();
      this.checkTelefonoSecundario();
   }
   if (!this.consumoCedula) {
      this.consumoCedula = true;
      this.dinardapDataService.get_cedula(this.ruc_registro_selected.ruc.contact_user.identification).then( r => {
         const registros = r.return.instituciones.datosPrincipales.registros;
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
   if (!this.consumoCedula) {
      this.identificationContactEstablishmentValidated = true;
      this.consumoCedulaEstablishmentContact = true;
      this.dinardapDataService.get_cedula(this.establishment_selected.contact_user.identification).then( r => {
         const registros = r.return.instituciones.datosPrincipales.registros;
         this.cedulaEstablishmentContactData = '';
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
               }
               if (element.campo === 'fechaNacimiento') {
                  this.cedulaEstablishmentContactData += '<strong>Fecha de Nacimiento: </strong> ' + element.valor + '<br/>';
               }
               if (element.campo === 'nacionalidad') {
                  this.cedulaEstablishmentContactData += '<strong>Nacionalidad: </strong> ' + element.valor + '<br/>';
               }
            }
         });
      }).catch( e => {
         this.toastr.errorToastr('La cédula ingresada no es correcta.', 'Registro Civil');
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
   if (!this.consumoCedulaRepresentanteLegal) {
      this.identificationRepresentativePersonValidated = true;
      this.consumoCedulaRepresentanteLegal = true;
      this.dinardapDataService.get_cedula(this.ruc_registro_selected.ruc.person_representative.identification).then( r => {
         const registros = r.return.instituciones.datosPrincipales.registros;
         this.representanteCedulaData = '';
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
   const isOk = /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
   const isOk2 = /^(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(this.establishment_selected.url_web.toString());
   this.urlwebEstablishmentValidated = isOk || isOk2;
   return this.urlwebEstablishmentValidated;
  }

  checkEstablishmentComercialName(): Boolean {
   if(this.establishment_selected.commercially_known_name.length < 5) {
      this.establishmentComercialNameValidated = false;
      return false;
   }
   this.establishmentComercialNameValidated = true;
   return true;
  }

  checkEstablishmentAddress(): Boolean {
   if(this.establishment_selected.address.length < 5) {
      this.addressEstablishmentValidated = false;
      return false;
   }
   this.addressEstablishmentValidated = true;
   return true;
  }
  
  getWorkerGroups() {
   this.worker_groups = [];
   this.workerGroupDataService.get().then( r => {
      this.worker_groups = r as WorkerGroup[];
   }).catch( e => console.log(e) ); 
  }

  getTaxPayerType() {
    this.tax_payer_types = [];
    this.tax_payer_typeDataService.get().then( r => {
       this.tax_payer_types = r as TaxPayerType[];
    }).catch( e => console.log(e) );
  }

  getFranchise() {
    this.franchises = [];
    this.franchiseDataService.get().then( r => {
    this.franchises = r as FranchiseChainName[];
    }).catch( e => console.log(e) );
  }

  getFranchisesOnRuc() {
    this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc = [];
    this.rucDataService.get(this.ruc_registro_selected.ruc.id).then( r => {
      this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc = r.attach[0].franchise_chain_names_on_ruc as FranchiseChainName[];
    }).catch( e => console.log(e) );
  }

  selectFranchise(franchise: FranchiseChainName) {
    this.franchises_rucSelectedId = franchise.id;
  }

  addFranchise() {
    if (this.franchises_rucSelectedId === 0) {
       this.toastr.errorToastr('Seleccione un registro.', 'Error');
       return;
    }
    this.franchises.forEach(franchise => {
       if (franchise.id == this.franchises_rucSelectedId) {
          let existe = false;
          this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc.forEach(element => {
             if (element.id == franchise.id) {
                existe = true;
             }
          });
          if (!existe) {
             this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc.push(franchise);
             this.franchises_rucSelectedId = 0;
          } else {
             this.toastr.errorToastr('El registro ya existe.', 'Error');
          }
       }
    });
  }

  removeFranchise() {
    if (this.franchises_rucSelectedId === 0) {
       this.toastr.errorToastr('Seleccione un registro.', 'Error');
       return;
    }
    const newFranchises: FranchiseChainName[] = [];
    let eliminado = false;
    this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc.forEach(franchise => {
       if (franchise.id !== this.franchises_rucSelectedId) {
          newFranchises.push(franchise);
       } else {
          eliminado = true;
       }
    });
    if (!eliminado) {
       this.toastr.errorToastr('Registro no encontrado.', 'Error');
       return;
    }
    this.ruc_registro_selected.ruc.franchise_chain_names_on_ruc = newFranchises;
    this.franchises_rucSelectedId = 0;
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

  selectRegisterEstablishment(establishment) {
    this.establishment_selected = establishment;
    this.mostrarDataEstablishment = true;
  }

  newRegisterEstablishment() {
    this.establishment_selected = new Establishment();
    this.establishment_selected.workers_on_establishment = this.getEstablishmentWorkerGroup();
    this.mostrarDataEstablishment = true;
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

  selectRucRegister(register) {
    this.rucEstablishmentRegisterSelected = register;
  }

  newRegisterEstablishmentCapacity() {

  }

  deleteRegisterEstablishment() {

  }

  deleteRegisterRecord() {

  }

  selectComplementaryServiceType(complementary_service_type: ComplementaryServiceType) {
    this.complementary_service_types_registerSelectedId = complementary_service_type.id;
  }

  addComplementaryServiceType() {
    if (this.complementary_service_types_registerSelectedId === 0) {
      this.toastr.errorToastr('Seleccione un registro.', 'Error');
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

  selectRegisterEstablishmentServiceOffer(establishment_service_offer: Requisite) {
    this.establishment_service_offers_registerSelectedId = establishment_service_offer.id;
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
   newCapacity.tariffs_on_capacity = this.newTariffs();
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
  }

  calcSpaces() {
   this.rucEstablishmentRegisterSelected.total_spaces = 0;
   this.rucEstablishmentRegisterSelected.total_habitations = 0;
   this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(element => {
      this.rucEstablishmentRegisterSelected.total_spaces += element.total_spaces * element.quantity;
      this.rucEstablishmentRegisterSelected.total_habitations += element.quantity;
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
            places = bedType.spaces * bed.quantity;
         }
      });
      capacity.total_spaces += places;
   });
   if(beds_declared == capacity.max_bed){
      capacity.max_bed_ok = true;
   }else {
      capacity.max_bed_ok = false;
   }
  }

  selectCapacity(capacity: Capacity) {
   this.capacitySelected = capacity;
  }

  openDialog(content) {
   this.modalService.open(content, { centered: true, size: 'lg' }).result.then(( response => {
      if ( response === 'Guardar click' ) {
         /*if (typeof this.registerSelected.id === 'undefined') {
            this.registerDataService.post(this.registerSelected).then( r => {
               this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
               this.getRegisters();
            }).catch( e => console.log(e) );
         } else {
            this.registerDataService.put(this.registerSelected).then( r => {
               this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
               this.getRegisters();
            }).catch( e => console.log(e) );
         }*/
      }
   }), ( r => {}));
  }

  newRegisterModal(content) {
    /*this.registerSelected = new Register();
    this.registerSelected.establishment_id = 0;
    this.register_establishment_capacities_registerSelectedId = 0;
    this.complementary_capacities_registerSelectedId = 0;
    this.rack_prices_registerSelectedId = 0;
    this.registerSelected.register_type_id = 0;
    this.establishment_service_offers_registerSelectedId = 0;*/
    this.openDialog(content);
  }

  editRegisterModal(content) {
    /*if ( typeof this.registerSelected.register_establishment_capacities_on_register === 'undefined' ) {
      this.registerSelected.register_establishment_capacities_on_register = [];
    }
    if ( typeof this.registerSelected.complementary_capacities_on_register === 'undefined' ) {
      this.registerSelected.complementary_capacities_on_register = [];
    }
    if ( typeof this.registerSelected.rack_prices_on_register === 'undefined' ) {
      this.registerSelected.rack_prices_on_register = [];
    }
    if ( typeof this.registerSelected.establishment_service_offers_on_register === 'undefined' ) {
      this.registerSelected.establishment_service_offers_on_register = [];
    }
    if (typeof this.registerSelected.id === 'undefined') {
      this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
      return;
    }
    this.getRegisterEstablishmentCapacitiesOnRegister();
    this.register_establishment_capacities_registerSelectedId = 0;
    this.getComplementaryCapacitiesOnRegister();
    this.complementary_capacities_registerSelectedId = 0;
    this.getRackPricesOnRegister();
    this.rack_prices_registerSelectedId = 0;
    this.getEstablishmentServiceOffersOnRegister();
    this.establishment_service_offers_registerSelectedId = 0;*/
    this.openDialog(content);
  }
}
