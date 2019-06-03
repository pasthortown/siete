import { BedTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/bedtype.service';
import { BedType } from './../../../models/ALOJAMIENTO/BedType';
import { CapacityTypeService } from './../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { State } from 'src/app/models/ALOJAMIENTO/State';
import { CapacityType } from './../../../models/ALOJAMIENTO/CapacityType';
import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/ALOJAMIENTO/Register';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { User } from 'src/app/models/profile/User';
import { UserService } from 'src/app/services/profile/user.service';
import { RegisterType } from 'src/app/models/ALOJAMIENTO/RegisterType';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { Tariff } from 'src/app/models/ALOJAMIENTO/Tariff';
import { TariffTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/tarifftype.service';
import { TariffType } from 'src/app/models/ALOJAMIENTO/TariffType';
import { Capacity } from 'src/app/models/ALOJAMIENTO/Capacity';

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
  mostrarDatos = false;
  config: any = {
    paging: true,
    filtering: {filterString: ''},
    className: ['table-striped', 'table-hover', 'table-bordered']
  };
  rowsRegister = [];
  columnsRegister = [];
  dataRegister = [];
  currentPageRegister = 1;
  lastPageRegister = 1;
  recordsByPageRegister = 5;
  states: State[] = [];
  estado_tramite_selected_code: String = '1';
  register_types: RegisterType[] = [];
  specific_states: State[];
  tarifarioResponse: Tariff[] = [];
  tarifarioRack = {cabecera: [], valores: []};
  tarifas: any[] = [];
  categories_registers: RegisterType[] = [];
  categorySelectedCode = '-';
  alowed_bed_types: BedType[] = []; 
  yearSelected = 0;
  years = [];
  searchingYears = false;
  constructor(private registerDataService: RegisterService,
              private userDataService: UserService,
              private register_typeDataService: RegisterTypeService,
              private stateDataService: StateService,
              private capacityTypeDataService: CapacityTypeService,
              private bedTypeDataService: BedTypeService,
              private tariffTypeDataService: TariffTypeService,
    ) {}

  ngOnInit() {
    this.getUser();
    this.getTariffs();
    this.getStates();
  }

  refresh() {
    this.getRegistersMintur();
  }

  getStates() {
    this.states = [];
    this.stateDataService.get().then( r => {
       this.states = r as State[];
       this.getRegisterTypes();
       this.getSpecificStates();
    }).catch( e => { console.log(e); });
  }

  getRegisterTypes() {
    this.register_typeDataService.get().then( r => {
       this.register_types = r as RegisterType[];
    }).catch( e => { console.log(e); });
  }

  getSpecificStates() {
    this.specific_states = [];
    this.states.forEach(element => {
       if (element.father_code == this.estado_tramite_selected_code) {
          this.specific_states.push(element);
       }
    });
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
         this.buildDataTableRegister();
       }
    }).catch( e => console.log(e) );
  }

  onChangeTableRegister(config: any, page: any = {page: this.currentPageRegister, itemsPerPage: this.recordsByPageRegister}): any {
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
 
   changeFilterRegister(data: any, config: any): any {
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
         {title: 'Seleccionado', name: 'selected'},
         {title: 'Código del Establecimiento', name: 'establishment_code'},
         {title: 'Ubicación del Establecimiento', name: 'address'},
         {title: 'Código del Registro', name: 'register_code'},
         {title: 'Tipo de Registro', name: 'register_type'},
         {title: 'Estado', name: 'state'},
         {title: 'Observaciones', name: 'notes'},
      ];
      const data = [];
      this.registers_mintur.forEach(item => {
          let date_assigment_alert = '';
          let date1 = new Date();
          const registerState = this.getRegisterState(item.status_register.state_id);
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
             establishment_code: item.establishment.ruc_code_id,
             address: item.establishment.address_main_street + ' ' + item.establishment.address_number + ' ' + item.establishment.address_secondary_street,
             register_code: item.register.code,
             register_type: item.type.register_category.name + ' / ' + item.type.register_type.name,
             state: registerState,
             notes: '<div class="col-12 text-justify">' + item.status_register.justification + '</div>',
          });
      });
      this.dataRegister = data;
      this.onChangeTableRegister(this.config);
   }
 
   onCellClickRegister(event) {
    this.registers_mintur.forEach(element => {
       if (element.register.id == event.row.id) {
          this.selectRegister(element.register);
       }
    });
    this.rowsRegister.forEach(row => {
       if (row.id == event.row.id) {
          row.selected = '<div class="col-12 text-right"><span class="far fa-hand-point-right"></span></div>';
       } else {
          row.selected = '';
       }
    });
   }

   selectRegister(register: Register) {
    this.registerDataService.get_register_data(register.id).then( r => {
      this.registerMinturSelected = r.register;
      this.registerMinturSelected.status = r.status.state_id;
      this.registerMinturSelected.capacities_on_register = r.capacities_on_register as Capacity[];
      this.getTarifarioRack(register.id);
      this.getAllowedInfo();
      this.alowed_capacity_types = [];
      this.capacityTypeDataService.get_filtered_by_register_type(this.registerMinturSelected.register_type_id).then( r2 => {
        this.alowed_capacity_types = r2 as CapacityType[];
        this.registerMinturSelected.capacities_on_register.forEach(capacity => {
          this.getMaxBed(capacity);
          this.calcBeds(capacity);
        });
        this.calcSpaces();
      }).catch( e => { console.log(e); });
    }).catch( e => { console.log(e); });
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

   getTarifarioRack(register_id: number) {
    this.searchingYears = true;
    this.registerDataService.get_tarifario(register_id).then( r => {
       this.tarifarioResponse = r as Tariff[];
       this.searchingYears = false;
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
       this.years = [];
       this.tarifarioResponse.forEach(element => {
          let existe = false;
          this.years.forEach(year => {
             if ( year == element.year) {
                existe = true;
             }
          });
          if (!existe) {
            this.years.push(element.year);
          }
       });
       this.years.sort();
    }).catch( e => { console.log(e); });
   }

   newTariffRack() {
      const today = new Date();
      console.log("nuevo");
   }

   seleccionadoYear() {
      console.log(this.yearSelected);
   }

   getAllowedInfo() {
    this.getBedTypes();
    this.getCapacityTypes();
   }

   getCapacityTypes() {
    this.alowed_capacity_types = [];
    this.capacityTypeDataService.get_filtered_by_register_type(this.registerMinturSelected.register_type_id).then( r => {
       this.alowed_capacity_types = r as CapacityType[];
    }).catch( e => { console.log(e); });
   }

   getBedTypes() {
    this.alowed_bed_types = [];
    this.bedTypeDataService.get_filtered_by_register_type(this.registerMinturSelected.register_type_id).then( r => {
       this.alowed_bed_types = r as BedType[];
    }).catch( e => console.log(e) );
   }

   getMaxBed(capacity: Capacity) {
    this.alowed_capacity_types.forEach(capacityType => {
       if(capacityType.id == capacity.capacity_type_id) {
          capacity.max_bed = capacityType.bed_quantity;
          capacity.max_spaces = capacityType.spaces;
          if(capacityType.spaces == 999) {
             capacity.max_bed = 0;
             capacity.max_spaces = 0;
             capacity.editable = true;
          } else {
             capacity.editable = false;
             capacity.editable_beds = capacityType.editable_beds;
             capacity.editable_spaces = capacityType.editable_spaces;
          }
       }
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

   validateTariffs() {
    return true;
   }

   calcSpaces(capacity?) {
    if(typeof capacity !== 'undefined') {
       this.alowed_capacity_types.forEach(capacityType => {
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
    this.registerMinturSelected.total_spaces = 0;
    this.registerMinturSelected.total_habitations = 0;
    this.registerMinturSelected.total_beds = 0;
    if (this.tarifarioRack.valores.length == this.registerMinturSelected.capacities_on_register.length) {
       for (let i = 0; i<this.registerMinturSelected.capacities_on_register.length ; i++) {
          this.tarifarioRack.valores[i].idTipoCapacidad = this.registerMinturSelected.capacities_on_register[i].capacity_type_id;
       }
    } else {
       this.tarifarioRack.valores = [];
       this.registerMinturSelected.capacities_on_register.forEach(capacity => {
          const childs = [];
          let idTipoCapacidad = capacity.capacity_type_id;
          this.tarifas.forEach(tariffType => {
             tariffType.childs.forEach(tariffTypeChild => {
                const es_referencia = tariffType.father.is_reference;
                let plazasHabitacion = 0;
                this.alowed_capacity_types.forEach(capacityType => {
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
          let topush = {idTipoCapacidad: idTipoCapacidad, tariffs: childs};
          this.tarifarioRack.valores.push(topush);
       });
    }
    this.registerMinturSelected.capacities_on_register.forEach(capacity => {
       capacity.editable = false;
       this.alowed_capacity_types.forEach(capacityType => {
          if (capacityType.id == capacity.capacity_type_id) {
             capacity.editable_beds = capacityType.editable_beds;
             capacity.editable_spaces = capacityType.editable_spaces;
             if (capacityType.spaces == 999) {
                capacity.editable = true;
             }
          }
       });
       this.registerMinturSelected.total_spaces += capacity.max_spaces;
       this.registerMinturSelected.total_habitations += capacity.quantity;
       this.registerMinturSelected.total_beds += (capacity.max_bed * capacity.quantity);
    });
   }
 
}
