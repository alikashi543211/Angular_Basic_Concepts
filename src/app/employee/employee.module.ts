import { EmployeeApiServiceService } from './services/employee-api-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';



@NgModule({
  declarations: [
    EmployeeDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    EmployeeApiServiceService
  ],
  bootstrap: [
    EmployeeDashboardComponent
  ]
})
export class EmployeeModule { }
