export class CapacityType {
   id: number;
   name: String;
   description: String;
   bed_quantity: number;
   register_type_id: number;
   is_island: Boolean;
   constructor() {
      this.bed_quantity = 0;
      this.is_island = false;
      this.register_type_id = 0;
   }
}
