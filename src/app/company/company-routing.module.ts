import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const companyRoutes: Routes = [
    {
        path:'company',
        component: CompanyComponent,
        children: [
            {
                path: 'company-list',
                component: CompanyListComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(companyRoutes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
    constructor()
    {
        console.log("Hi, Company Routing Module");
    }
}
