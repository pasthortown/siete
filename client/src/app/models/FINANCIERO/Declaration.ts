import { DeclarationItem } from './DeclarationItem';

import { ApprovalState } from './ApprovalState';

export class Declaration {
   id: number;
   establishment_id: number;
   declaration_date: Date;
   year: number;
   max_date_to_pay: Date;
   declaration_items_on_declaration: DeclarationItem[];
   approval_states_on_declaration: ApprovalState[];
   constructor() {
      this.declaration_items_on_declaration = [];
      this.approval_states_on_declaration = [];
   }
}