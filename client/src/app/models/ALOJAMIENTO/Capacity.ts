import { Tariff } from './Tariff';

import { Bed } from './Bed';

export class Capacity {
   id: number;
   quantity: number;
   tariffs_on_capacity: Tariff[];
   beds_on_capacity: Bed[];
   capacity_type_id: number;
   total_spaces: number;
   max_bed: number;
   max_bed_ok: boolean;
   tariffsValidated: boolean;
   constructor() {
      this.tariffs_on_capacity = [];
      this.beds_on_capacity = [];
      this.max_bed = 0;
      this.capacity_type_id = 0;
      this.tariffsValidated = false;
   }
}