import { DecoratorConceptServiceService } from './services/decorator-concept-service.service';
import { TestService } from './test.service';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { HrModule } from './hr/hr.module';
import { AccountsModule } from './accounts/accounts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAppComponent } from './custom-app/custom-app.component';
import { DecoratorConceptComponent } from './decorator-concept/decorator-concept.component';
import { WhatIsComponentComponent } from './what-is-component/what-is-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomAppComponent,
    DecoratorConceptComponent,
    WhatIsComponentComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    TdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountsModule,
    HrModule,
    EmployeeModule,
    CustomerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TestService,
    DecoratorConceptServiceService
  ],
  bootstrap: [CustomAppComponent]
})
export class AppModule {
    constructor()
    {
        console.log("Hi, this is module");
    }
}
