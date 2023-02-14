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
    totalRow:number = 0;
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
            productRows: this._fb.array([this.initProductRow()]),
        })
    }

    initProductRow()
    {
        return this._fb.group({
            id:['', [Validators.compose([Validators.required])]],
            name:['', [Validators.compose([Validators.required, Validators.minLength(2)])]],
            quantity:['', [Validators.compose([Validators.required])]],
            value:['', [Validators.compose([Validators.required])]],
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

    setPresetValueInRow()
    {
        var productRows = <FormArray>this.formGroupForDynamicRow.controls['productRows'];
        productRows.patchValue([
            {
                id:12,
                name:"Door",
                quantity:30,
                value:470,
            },
            {
                id:13,
                name:"Frame",
                quantity:40,
                value:500,
            },
        ])
    }

    nestedFormArrayMultipleRowsSubmitConcept()
    {
        var productRows = <FormArray>this.formGroupForDynamicRow.controls['productRows'];
        console.log(this.formGroupForDynamicRow.value);
        console.log(productRows.value);
    }

    addMultipleFormControlRowMethodConcept()
    {
        const control = <FormArray>this.formGroupForDynamicRow.controls['productRows'];
        control.push(this.initProductRow());
    }

    deleteProductRow(i:any):boolean
    {
        const control = <FormArray>this.formGroupForDynamicRow.controls['productRows'];
        if(control != null)
        {
            this.totalRow = control.value.length;
        }
        if(this.totalRow > 1)
        {
            control.removeAt(i);
        }else{
            alert("One Record is Mandatory.");
            return false;
        }
        return true;
    }
}
