import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionAssigmentComponent } from './inspectionassigment.component';

const routes: Routes = [
   {
      path: '',
      component: InspectionAssigmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class InspectionAssigmentRoutingModule {}
