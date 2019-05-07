export class Pay {
   id: number;
   amount_payed: number;
   amount_to_pay: number;
   pay_date: Date;
   payed: Boolean;
   code: String;
   max_pay_date: Date;
   ruc_id: number;
   constructor() {
      this.id = 0;
      this.payed = false;
      this.ruc_id = 0;
      this.max_pay_date = new Date();
      this.amount_payed = -1;
   }
}
