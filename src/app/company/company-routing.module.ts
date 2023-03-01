import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const companyRoutes: Routes = [
    {path:'company', component:CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(companyRoutes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
