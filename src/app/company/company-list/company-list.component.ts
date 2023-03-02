import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
    companies:any;
    constructor() { }

    ngOnInit(): void {
        this.companies = [
            {
                "code" : "001",
                "Name" : "HCL",
            },
            {
                "code" : "002",
                "Name" : "TCS"
            },
            {
                "code" : "003",
                "Name" : "Nokia"
            }
        ];
    }

}
