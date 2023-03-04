import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
    addresses:any;
    constructor() { }
    ngOnInit(): void {
        this.addresses = [
            {
                "code" : "001",
                "Name" : "DHA",
            },
            {
                "code" : "002",
                "Name" : "Model Town"
            },
            {
                "code" : "003",
                "Name" : "Iqbal Town"
            }
        ];
    }

}
