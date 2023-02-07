import { CustomerApiServiceService } from './services/customer-api-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';



@NgModule({
  declarations: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CustomerApiServiceService
  ],
  bootstrap: [
    CustomerDashboardComponent
  ]
})
export class CustomerModule { }
