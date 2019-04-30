import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorReportComponent } from './inspectorreport.component';

const routes: Routes = [
   {
      path: '',
      component: InspectorReportComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class InspectorReportRoutingModule {}
