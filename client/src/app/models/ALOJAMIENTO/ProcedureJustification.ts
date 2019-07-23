export class ProcedureJustification {
   id: number;
   justification: String;
   code: String;
   father_code: String;
   constructor() {
      this.justification = '';
      this.code = '';
      this.father_code = '';
   }
}