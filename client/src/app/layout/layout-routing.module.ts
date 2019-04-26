import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         {
            path: '',
            redirectTo: 'main'
         },
         {
            path: 'main',
            loadChildren: './main/main.module#MainModule'
         },
         {
            path: 'profile',
            loadChildren: './profile/profile.module#ProfileModule'
         },
         {
            path: 'blank',
            loadChildren: './blank-page/blank-page.module#BlankPageModule'
         },
         {
            path: 'not-found',
            loadChildren: './not-found/not-found.module#NotFoundModule'
         },

         //BASE
         {
            path: 'ruc',
            loadChildren: './CRUD/BASE/Ruc/ruc.module#RucModule'
         },
         {
            path: 'tax_payer_type',
            loadChildren: './CRUD/BASE/TaxPayerType/taxpayertype.module#TaxPayerTypeModule'
         },
         {
            path: 'establishment',
            loadChildren: './CRUD/BASE/Establishment/establishment.module#EstablishmentModule'
         },
         {
            path: 'person_representative',
            loadChildren: './CRUD/BASE/PersonRepresentative/personrepresentative.module#PersonRepresentativeModule'
         },
         {
            path: 'preview_register_code',
            loadChildren: './CRUD/BASE/PreviewRegisterCode/previewregistercode.module#PreviewRegisterCodeModule'
         },
         {
            path: 'system_name',
            loadChildren: './CRUD/BASE/SystemName/systemname.module#SystemNameModule'
         },
         {
            path: 'language',
            loadChildren: './CRUD/BASE/Language/language.module#LanguageModule'
         },
         {
            path: 'establishment_picture',
            loadChildren: './CRUD/BASE/EstablishmentPicture/establishmentpicture.module#EstablishmentPictureModule'
         },
         {
            path: 'ubication',
            loadChildren: './CRUD/BASE/Ubication/ubication.module#UbicationModule'
         },
         {
            path: 'worker',
            loadChildren: './CRUD/BASE/Worker/worker.module#WorkerModule'
         },
         {
            path: 'gender',
            loadChildren: './CRUD/BASE/Gender/gender.module#GenderModule'
         },
         {
            path: 'worker_group',
            loadChildren: './CRUD/BASE/WorkerGroup/workergroup.module#WorkerGroupModule'
         },
         {
            path: 'establishment_property_type',
            loadChildren: './CRUD/BASE/EstablishmentPropertyType/establishmentpropertytype.module#EstablishmentPropertyTypeModule'
         },
         {
            path: 'franchise_chain_name',
            loadChildren: './CRUD/BASE/FranchiseChainName/franchisechainname.module#FranchiseChainNameModule'
         },
         {
            path: 'group_given',
            loadChildren: './CRUD/BASE/GroupGiven/groupgiven.module#GroupGivenModule'
         },
         {
            path: 'state_base',
            loadChildren: './CRUD/BASE/State/state.module#StateModule'
         },
         {
            path: 'establishment_state',
            loadChildren: './CRUD/BASE/EstablishmentState/establishmentstate.module#EstablishmentStateModule'
         },
         {
            path: 'establishment_certification',
            loadChildren: './CRUD/BASE/EstablishmentCertification/establishmentcertification.module#EstablishmentCertificationModule'
         },
         {
            path: 'establishment_certification_type',
            loadChildren: './CRUD/BASE/EstablishmentCertificationType/establishmentcertificationtype.module#EstablishmentCertificationTypeModule'
         },
         {
            path: 'establishment_certification_attachment',
            loadChildren: './CRUD/BASE/EstablishmentCertificationAttachment/establishmentcertificationattachment.module#EstablishmentCertificationAttachmentModule'
         },
         {
            path: 'group_type',
            loadChildren: './CRUD/BASE/GroupType/grouptype.module#GroupTypeModule'
         },
         {
            path: 'ruc_name_type',
            loadChildren: './CRUD/BASE/RucNameType/rucnametype.module#RucNameTypeModule'
         },
         {
            path: 'person_representative_attachment',
            loadChildren: './CRUD/BASE/PersonRepresentativeAttachment/personrepresentativeattachment.module#PersonRepresentativeAttachmentModule'
         },
         {
            path: 'agreement',
            loadChildren: './CRUD/BASE/Agreement/agreement.module#AgreementModule'
         },

         //ALOJAMIENTO
         {
            path: 'register-alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/Register/register.module#RegisterModule'
         },
         {
            path: 'capacity',
            loadChildren: './CRUD/ALOJAMIENTO/Capacity/capacity.module#CapacityModule'
         },
         {
            path: 'capacity_picture',
            loadChildren: './CRUD/ALOJAMIENTO/CapacityPicture/capacitypicture.module#CapacityPictureModule'
         },
         {
            path: 'complementary_service_type',
            loadChildren: './CRUD/ALOJAMIENTO/ComplementaryServiceType/complementaryservicetype.module#ComplementaryServiceTypeModule'
         },
         {
            path: 'register_type',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterType/registertype.module#RegisterTypeModule'
         },
         {
            path: 'requisite',
            loadChildren: './CRUD/ALOJAMIENTO/Requisite/requisite.module#RequisiteModule'
         },
         {
            path: 'register_requisite',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterRequisite/registerrequisite.module#RegisterRequisiteModule'
         },
         {
            path: 'state-alojamiento',
            loadChildren: './CRUD/ALOJAMIENTO/State/state.module#StateModule'
         },
         {
            path: 'register_state',
            loadChildren: './CRUD/ALOJAMIENTO/RegisterState/registerstate.module#RegisterStateModule'
         },
         {
            path: 'tariff_type',
            loadChildren: './CRUD/ALOJAMIENTO/TariffType/tarifftype.module#TariffTypeModule'
         },
         {
            path: 'tariff',
            loadChildren: './CRUD/ALOJAMIENTO/Tariff/tariff.module#TariffModule'
         },
         {
            path: 'bed',
            loadChildren: './CRUD/ALOJAMIENTO/Bed/bed.module#BedModule'
         },
         {
            path: 'bed_type',
            loadChildren: './CRUD/ALOJAMIENTO/BedType/bedtype.module#BedTypeModule'
         },
         {
            path: 'capacity_type',
            loadChildren: './CRUD/ALOJAMIENTO/CapacityType/capacitytype.module#CapacityTypeModule'
         },
         {
            path: 'complementary_service_food',
            loadChildren: './CRUD/ALOJAMIENTO/ComplementaryServiceFood/complementaryservicefood.module#ComplementaryServiceFoodModule'
         },
         {
            path: 'complementary_service_food_type',
            loadChildren: './CRUD/ALOJAMIENTO/ComplementaryServiceFoodType/complementaryservicefoodtype.module#ComplementaryServiceFoodTypeModule'
         },

         //AUTH
         {
            path: 'auth_location',
            loadChildren: './CRUD/AUTH/AuthLocation/authlocation.module#AuthLocationModule'
         },
         {
            path: 'account_rol',
            loadChildren: './CRUD/AUTH/AccountRol/accountrol.module#AccountRolModule'
         },
         {
            path: 'account_rol_assigment',
            loadChildren: './CRUD/AUTH/AccountRolAssigment/accountrolassigment.module#AccountRolAssigmentModule'
         },

         //FINANCIERO
         {
            path: 'declaration',
            loadChildren: './CRUD/FINANCIERO/Declaration/declaration.module#DeclarationModule'
         },
         {
            path: 'declaration_item',
            loadChildren: './CRUD/FINANCIERO/DeclarationItem/declarationitem.module#DeclarationItemModule'
         },
         {
            path: 'declaration_item_category',
            loadChildren: './CRUD/FINANCIERO/DeclarationItemCategory/declarationitemcategory.module#DeclarationItemCategoryModule'
         },
         {
            path: 'state-financiero',
            loadChildren: './CRUD/FINANCIERO/State/state.module#StateModule'
         },
         {
            path: 'state_declaration',
            loadChildren: './CRUD/FINANCIERO/StateDeclaration/statedeclaration.module#StateDeclarationModule'
         },
         {
            path: 'pay',
            loadChildren: './CRUD/FINANCIERO/Pay/pay.module#PayModule'
         },
         {
            path: 'declaration_item_value',
            loadChildren: './CRUD/FINANCIERO/DeclarationItemValue/declarationitemvalue.module#DeclarationItemValueModule'
         },
         {
            path: 'pay_attachment',
            loadChildren: './CRUD/FINANCIERO/PayAttachment/payattachment.module#PayAttachmentModule'
         },
         {
            path: 'declaration_attachment',
            loadChildren: './CRUD/FINANCIERO/DeclarationAttachment/declarationattachment.module#DeclarationAttachmentModule'
         },
         {
            path: 'approval',
            loadChildren: './CRUD/FINANCIERO/Approval/approval.module#ApprovalModule'
         },
         {
            path: 'approval_state',
            loadChildren: './CRUD/FINANCIERO/ApprovalState/approvalstate.module#ApprovalStateModule'
         },

         // INTERNO
         {
            path: 'interno-registro',
            loadChildren: './INTERNO/registro/registro.module#RegistroModule'
         },
         {
            path: 'agendamiento-inspecciones',
            loadChildren: './INTERNO/agendamiento-inspecciones/agendamiento-inspecciones.module#AgendamientoInspeccionesModule'
         },
         {
            path: 'coordinador',
            loadChildren: './INTERNO/coordinador/coordinador.module#CoordinadorModule'
         },
         {
            path: 'interno-account-admin',
            loadChildren: './INTERNO/account-admin/account-admin.module#AccountAdminModule'
         },
         {
            path: 'inner-account-admin',
            loadChildren: './INTERNO/inner-account-admin/inner-account-admin.module#InnerAccountAdminModule'
         },
         {
            path: 'tecnico-financiero',
            loadChildren: './INTERNO/tecnico-financiero/tecnico-financiero.module#TecnicoFinancieroModule'
         },

         // EXTERNO
         {
            path: 'externo-registro',
            loadChildren: './EXTERNO/registro/registro.module#RegistroModule'
         },
         {
            path: '**',
            redirectTo: 'not-found'
         }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class LayoutRoutingModule {}
