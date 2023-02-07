import { AccountsApiServiceService } from './services/accounts-api-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsDashboardComponent } from './accounts-dashboard/accounts-dashboard.component';



@NgModule({
  declarations: [
    AccountsDashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AccountsApiServiceService
  ],
  bootstrap: [
    AccountsDashboardComponent
  ]
})
export class AccountsModule { }
