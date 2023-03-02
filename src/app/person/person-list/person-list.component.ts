import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

    constructor() { }
    persons:any;
    ngOnInit(): void {
        this.persons = [
            {
                "code" : "001",
                "Name" : "Abid",
            },
            {
                "code" : "002",
                "Name" : "Ali"
            },
            {
                "code" : "003",
                "Name" : "Fahad"
            }
        ];
    }

}
