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

  constructor(private registerDataService: RegisterService,
              private userDataService: UserService,
              private register_typeDataService: RegisterTypeService,
              private stateDataService: StateService,
    ) {}

  ngOnInit() {
    this.getUser();
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
    this.registerDataService.get_tarifario(register.id).then( r => {
      console.log(r);
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
 
}
