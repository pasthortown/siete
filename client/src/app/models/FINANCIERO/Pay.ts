export class Pay {
   id: number;
   amount_payed: number;
   amount_to_pay: number;
   pay_date: Date;
   payed: Boolean;
   code: String;
   max_pay_date: Date;
   ruc_id: number;
   amount_to_pay_taxes: number;
   amount_to_pay_base: number;
   amount_to_pay_fines: number;
   notes: String;
   constructor() {
      this.id = 0;
      this.payed = false;
      this.ruc_id = 0;
      this.max_pay_date = new Date();
      this.amount_payed = -1;
      this.amount_to_pay_taxes = 0;
      this.amount_to_pay_base = 0;
      this.amount_to_pay_fines = 0;
      this.notes = '';
   }
}
