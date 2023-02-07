import { HrApiServiceService } from './services/hr-api-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';



@NgModule({
  declarations: [
    HrDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HrApiServiceService,
  ],
  bootstrap: [
    HrDashboardComponent
  ],
})
export class HrModule { }
