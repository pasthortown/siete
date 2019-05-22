import { Tariff } from './Tariff';

import { Bed } from './Bed';

export class Capacity {
   id: number;
   quantity: number;
   beds_on_capacity: Bed[];
   capacity_type_id: number;
   total_spaces: number;
   max_bed: number;
   max_bed_ok: boolean;
   max_beds: number;
   max_spaces: number;
   editable: boolean;
   constructor() {
      this.beds_on_capacity = [];
      this.max_bed = 0;
      this.capacity_type_id = 0;
      this.editable = false;
      this.max_spaces = 0;
      this.max_beds = 0;
   }
}