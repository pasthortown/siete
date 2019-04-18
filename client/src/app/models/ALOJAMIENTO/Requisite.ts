export class Requisite {
   id: number;
   name: String;
   description: String;
   father_code: String;
   to_approve: number;
   register_type_id: number;
   constructor() {
      this.register_type_id = 0;
      this.father_code = '-';
      this.to_approve = 1;
   }
}