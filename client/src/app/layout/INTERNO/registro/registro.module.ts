import { UserService } from 'src/app/services/profile/user.service';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxBarcodeModule } from 'ngx-barcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { WorkerService } from 'src/app/services/CRUD/BASE/worker.service';
import { TaxPayerTypeService } from 'src/app/services/CRUD/BASE/taxpayertype.service';
import { FranchiseChainNameService } from 'src/app/services/CRUD/BASE/franchisechainname.service';
import { RucService } from 'src/app/services/CRUD/BASE/ruc.service';
import { EstablishmentService } from 'src/app/services/CRUD/BASE/establishment.service';
import { EstablishmentCertificationService } from 'src/app/services/CRUD/BASE/establishmentcertification.service';
import { EstablishmentPropertyTypeService } from 'src/app/services/CRUD/BASE/establishmentpropertytype.service';
import { RequisiteService } from 'src/app/services/CRUD/ALOJAMIENTO/requisite.service';
import { LanguageService } from 'src/app/services/CRUD/BASE/language.service';
import { PreviewRegisterCodeService } from 'src/app/services/CRUD/BASE/previewregistercode.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { GroupTypeService } from 'src/app/services/CRUD/BASE/grouptype.service';
import { SystemNameService } from 'src/app/services/CRUD/BASE/systemname.service';
import { WorkerGroupService } from 'src/app/services/CRUD/BASE/workergroup.service';
import { GenderService } from 'src/app/services/CRUD/BASE/gender.service';
import { EstablishmentCertificationTypeService } from 'src/app/services/CRUD/BASE/establishmentcertificationtype.service';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { ComplementaryServiceTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/complementaryservicetype.service';
import { BedTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/bedtype.service';
import { TariffTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/tarifftype.service';
import { RucNameTypeService } from 'src/app/services/CRUD/BASE/rucnametype.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { CapacityTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/capacitytype.service';
import { DinardapService } from 'src/app/services/negocio/dinardap.service';

@NgModule({
  imports: [CommonModule,
    CKEditorModule,
    NgxBarcodeModule,
    AgmCoreModule.forRoot({apiKey: environment.gmapapiKey}),
    RegistroRoutingModule,
    NgxQRCodeModule,
    NgbModule,
    FormsModule],
  declarations: [RegistroComponent],
  providers: [NgbModal,
    UserService,
    DinardapService,
    TaxPayerTypeService,
    EstablishmentCertificationService,
    EstablishmentPropertyTypeService,
    RequisiteService,
    UbicationService,
    CapacityTypeService,
    StateService,
    RucNameTypeService,
    ComplementaryServiceTypeService,
    GenderService,
    GroupTypeService,
    RegisterTypeService,
    WorkerGroupService,
    TariffTypeService,
    PreviewRegisterCodeService,
    EstablishmentCertificationTypeService,
    LanguageService,
    EstablishmentService,
    WorkerService,
    BedTypeService,
    FranchiseChainNameService,
    SystemNameService,
    RucService]
})
export class RegistroModule {}
