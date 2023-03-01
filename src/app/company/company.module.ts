import { CompanyRoutingModule } from './company-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';



@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
    constructor()
    {
        console.log("Hi, this is company module");
    }
}
