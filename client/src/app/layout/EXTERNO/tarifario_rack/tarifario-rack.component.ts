import { CapacityTypeService } from './../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { CapacityType } from './../../../models/ALOJAMIENTO/CapacityType';
import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/ALOJAMIENTO/Register';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { User } from 'src/app/models/profile/User';
import { UserService } from 'src/app/services/profile/user.service';

@Component({
  selector: 'app-tarifario-rack',
  templateUrl: './tarifario-rack.component.html',
  styleUrls: ['./tarifario-rack.component.scss']
})
export class TarifarioRackComponent implements OnInit {
  alowed_capacity_types: CapacityType[] = [];
  registers_mintur = [];
  registerMinturSelected: Register = new Register();
  user: User = new User();

  constructor( private capacityTypeDataService: CapacityTypeService,
               private registerDataService: RegisterService,
               private userDataService: UserService,
    ) {}

  ngOnInit() {
    this.getUser();
  }

  refresh() {
    this.getRegistersMintur();
  }

  getAllowedCapacityTypes() {
    /*this.alowed_capacity_types = [];
    this.capacityTypeDataService.get_filtered_by_register_type(this.rucEstablishmentRegisterSelected.register_type_id).then( r2 => {
      this.alowed_capacity_types = r2 as CapacityType[];
      this.mostrarDataRegister = true;
      this.rucEstablishmentRegisterSelected.capacities_on_register.forEach(capacity => {
        this.getMaxBed(capacity);
        this.calcBeds(capacity);
      });
      this.calcSpaces();
    }).catch( e => { console.log(e); });*/
  }

  getUser() {
    this.userDataService.get(JSON.parse(sessionStorage.getItem('user')).id).then( r => {
      this.user = r as User;
      this.refresh();
    }).catch( e => console.log(e));
  }

  getRegistersMintur() {
    this.registers_mintur = [];
    this.registerMinturSelected = new Register();
    this.registerDataService.get_registers_by_ruc(this.user.ruc).then( r => {
       this.registers_mintur = r as Register[];
       if (this.registers_mintur.length > 0) {
         
       }
    }).catch( e => console.log(e) );
  }

  
}
