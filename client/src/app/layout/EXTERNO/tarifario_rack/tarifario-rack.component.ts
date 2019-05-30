import { CapacityTypeService } from './../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { CapacityType } from './../../../models/ALOJAMIENTO/CapacityType';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifario-rack',
  templateUrl: './tarifario-rack.component.html',
  styleUrls: ['./tarifario-rack.component.scss']
})
export class TarifarioRackComponent implements OnInit {
  alowed_capacity_types: CapacityType[] = [];

  constructor( private capacityTypeDataService: CapacityTypeService) {}

  ngOnInit() {}

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
}
