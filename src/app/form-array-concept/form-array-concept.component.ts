import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array-concept',
  templateUrl: './form-array-concept.component.html',
  styleUrls: ['./form-array-concept.component.css']
})
export class FormArrayConceptComponent implements OnInit {

    // formGroup:FormGroup;
    form:any;
    formGroupForDynamicRow:any;
    constructor(private _fb:FormBuilder) {}
    ngOnInit(): void {
        this.formArrayMethodConcept();
        // Nested Form Array Concept
        this.form = new FormGroup({
            work_order_numbers: new FormArray([
                new FormControl(null, [Validators.required]),
            ])
        });

        // Dynamically Rows Add and Remove
        this.formGroupForDynamicRow = this._fb.group({
            products: this._fb.array([this.initProductRow()]),
        })
    }

    initProductRow()
    {
        this._fb.group({
            id:null,
            name:null,
            quantity:null,
            value:null,
        })
    }

    formArrayMethodConcept()
    {
        var form_array = new FormArray([
            new FormControl('testing ksldjf sdljf dslkfjdsf lksjfds lkfjdslkf', [Validators.required, Validators.maxLength(10)]),
            new FormControl('kashif@gmail.com'),
        ]);
        console.log(form_array.value);
        console.log(form_array.status);
    }

    nestedFormArraySubmitConcept(form:any)
    {
        console.log(form.value);
    }

    addNestedFormControlMethodConcept()
    {
        this.form.get("work_order_numbers").push(new FormControl(null, [Validators.required]));
        console.log(this.form.controls.work_order_numbers.controls)
    }

    removeNestedFormControlMethodConcept(i:any)
    {
        this.form.get("work_order_numbers").removeAt(i);
    }

    setPresetValue()
    {
        this.form.get("work_order_numbers").patchValue(["W90","W91"]);
    }

}
