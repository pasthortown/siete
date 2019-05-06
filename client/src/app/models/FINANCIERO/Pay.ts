export class Pay {
   id: number;
   amount_payed: number;
   amount_to_pay: number;
   pay_date: Date;
   annotation: String;
   code: String;
   max_pay_date: Date;
   taxes: number;
   ruc_id: number;
   constructor() {
      this.annotation = '';
      this.ruc_id = 0;
      this.max_pay_date = new Date();
      this.id = 0;
      this.amount_payed = -1;
   }
}
