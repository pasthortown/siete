import { ComplementaryServiceType } from './ComplementaryServiceType';
import { RegisterRequisite } from './RegisterRequisite';
import { ComplementaryServiceFood } from './ComplementaryServiceFood';
import { Capacity } from './Capacity';

export class Register {
   id: number;
   code: String;
   autorized_complementary_capacities: Boolean;
   autorized_complementary_food_capacities: Boolean;
   establishment_id: number;
   complementary_service_types_on_register: ComplementaryServiceType[];
   complementary_service_foods_on_register: ComplementaryServiceFood[];
   register_type_id: number;
   capacities_on_register: Capacity[];
   requisites: RegisterRequisite[];
   editable: Boolean;
   total_spaces: number;
   total_habitations: number;
   status: number;
   constructor() {
      this.id = 0;
      this.editable = true;
      this.complementary_service_types_on_register = [];
      this.complementary_service_foods_on_register = [];
      this.capacities_on_register = [];
      this.establishment_id = 0;
      this.autorized_complementary_capacities = false;
      this.autorized_complementary_food_capacities = false;
      this.requisites = [];
      this.register_type_id = 0;
      this.total_spaces = 0;
      this.total_habitations = 0;
      this.status = 4;
      this.code = 'PENDIENTE';
   }
}