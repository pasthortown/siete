import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectorReportAttachmentComponent } from './inspectorreportattachment.component';

const routes: Routes = [
   {
      path: '',
      component: InspectorReportAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class InspectorReportAttachmentRoutingModule {}
