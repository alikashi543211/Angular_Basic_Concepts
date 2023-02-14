import { User } from './../User';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-chec-box',
  templateUrl: './radio-chec-box.component.html',
  styleUrls: ['./radio-chec-box.component.css']
})
export class RadioChecBoxComponent implements OnInit {
    user = new User();
    constructor() { }

    ngOnInit(): void {
    }

    submitRadioCheckboxForm(form:NgForm)
    {
        debugger;
        if(form.invalid)
        {
            return;
        }
        console.log("Name " + form.controls['name'].value);
        console.log("Gender " + form.controls['gender'].value);
        console.log("Married " + form.controls['married'].value);
        console.log("T & C Accepted " + form.controls['tc'].value);
    }

    setDefaultValues()
    {
        this.user.name = "Default User";
        this.user.gender = "Male";
        this.user.married = false;
        this.user.isTCAccepted = true;
    }

    resetForm(form:NgForm)
    {
        this.user = new User();
        form.resetForm({
            married:false,
        })
    }

}
