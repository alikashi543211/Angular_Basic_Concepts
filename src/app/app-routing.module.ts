import { AddressModule } from './address/address.module';
import { AngularMaterialConceptComponent } from './angular-material-concept/angular-material-concept.component';
import { RadioChecBoxComponent } from './radio-chec-box/radio-chec-box.component';
import { FormArrayConceptComponent } from './form-array-concept/form-array-concept.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'', redirectTo:'company', pathMatch:"full"},
    {path : 'form-array-concept', component:FormArrayConceptComponent},
    {
        path : 'company',
        loadChildren : () => import('./company/company.module').then(
            module => module.CompanyModule
        ),
        data : { preload: true }
    },
    {
        path: 'person',
        loadChildren : () => import('./person/person.module').then(
            module => module.PersonModule
        ),
        data : { preload: true }
    },
    {
        path: 'address',
        loadChildren : () => import('./address/address.module').then(
            module => module.AddressModule
        )
    },
    {path:'radio-checkbox-concept', component:RadioChecBoxComponent},
    {path:'radio-checkbox-concept', component:RadioChecBoxComponent},
    {path:'angular-material-concept', component:AngularMaterialConceptComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    // {path:'**', component:PageNotFoundComponent},
    {path:'**', redirectTo:'', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule {
    constructor()
    {
        console.log("Hi, App Routing module");
    }
}
