export class Tariff {
   id: number;
   price: number;
   tariff_type_id: number;
   tariff_name: string;
   tariff_father_name: string;
   year: number;
   id_ruc: number;
   capacity_type_id: number;
   constructor() {
      this.price = 0;
      this.tariff_type_id = 0;
      this.tariff_father_name = '';
      this.tariff_name = '';
      this.id_ruc = 0;
      this.capacity_type_id = 0;
      this.year = 0;
   }
}