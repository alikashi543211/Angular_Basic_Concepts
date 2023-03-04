import { AddressListComponent } from './address-list/address-list.component';
import { AddressComponent } from './address.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const addressRoutes: Routes = [
    {
        path:'',
        component: AddressComponent,
        children: [
            {
                path: 'address-list',
                component: AddressListComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(addressRoutes)],
  exports: [RouterModule]
})
export class AddressRoutingModule {
    constructor()
    {
        console.log("Hi, Address Routing Module");
    }
}
