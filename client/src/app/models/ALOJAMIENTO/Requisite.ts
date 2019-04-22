export class Requisite {
   id: number;
   name: String;
   description: String;
   father_code: String;
   to_approve: number;
   register_type_id: number;
   type_full_name: String;
   constructor() {
      this.register_type_id = 0;
      this.father_code = '-';
      this.to_approve = 1;
      this.type_full_name = '';
   }
}