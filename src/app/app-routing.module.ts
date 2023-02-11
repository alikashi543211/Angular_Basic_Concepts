import { FormArrayConceptComponent } from './form-array-concept/form-array-concept.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:"full"},
    {path:'form-array-concept', component:FormArrayConceptComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    // {path:'**', component:PageNotFoundComponent},
    {path:'**', redirectTo:'', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
