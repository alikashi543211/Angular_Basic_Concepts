import { AddressRoutingModule } from './address-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressListComponent } from './address-list/address-list.component';



@NgModule({
  declarations: [
    AddressComponent,
    AddressListComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule
  ]
})
export class AddressModule { }
