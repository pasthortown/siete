export class Pay {
   id: number;
   amount_payed: number;
   amount_to_pay: number;
   pay_date: Date;
   annotation: String;
   declaration_id: number;
   constructor() {
      this.amount_payed = 0;
      this.amount_to_pay = 0;
   }
}