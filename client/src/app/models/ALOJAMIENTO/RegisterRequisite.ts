export class RegisterRequisite {
   id: number;
   fullfill: Boolean;
   value: String;
   requisite_id: number;
   register_id: number;
   requisite_name: String;
   requisite_father_code: String;
   constructor() {
      this.requisite_name = '';
      this.value = '';
      this.fullfill = true;
   }
}