import { TestService } from './../test.service';
import { DecoratorConceptServiceService } from './../services/decorator-concept-service.service';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

    @Component({
        selector: 'app-custom-app',
        templateUrl: './custom-app.component.html',
        styleUrls: ['./custom-app.component.css'],
        preserveWhitespaces: true,
    })
    export class CustomAppComponent implements OnInit {
        signupForm:FormGroup;
        title = 'AngularBasics';
        userIsActive = true;
        userPoints = 5;
        userList = [
            {name: 'Kashif Ali', email: 'alikashi@gmail.com', age: 25},
            {name: 'Haseeb', email: 'alikashi@gmail.com', age: 25},
            {name: 'Asad', email: 'alikashi@gmail.com', age: 25},
            {name: 'Abid', email: 'alikashi@gmail.com', age: 25},
            {name: 'Awais', email: 'alikashi@gmail.com', age: 25},
            {name: 'Ali Mazhar', email: 'alikashi@gmail.com', age: 25},
            {name: 'Akbar', email: 'alikashi@gmail.com', age: 25},
            {name: 'Bilal', email: 'alikashi@gmail.com', age: 25},
            {name: 'Irfan', email: 'alikashi@gmail.com', age: 25},
            {name: 'Fahad', email: 'alikashi@gmail.com', age: 25},
        ]
        userListTrackBy = [
            {name: 'Kashif Ali', email: 'alikashi@gmail.com', age: 25},
            {name: 'Haseeb', email: 'alikashi@gmail.com', age: 25},
            {name: 'Asad', email: 'alikashi@gmail.com', age: 25},
            {name: 'Abid', email: 'alikashi@gmail.com', age: 25},
            {name: 'Awais', email: 'alikashi@gmail.com', age: 25},
            {name: 'Ali Mazhar', email: 'alikashi@gmail.com', age: 25},
            {name: 'Akbar', email: 'alikashi@gmail.com', age: 25},
            {name: 'Bilal', email: 'alikashi@gmail.com', age: 25},
            {name: 'Irfan', email: 'alikashi@gmail.com', age: 25},
            {name: 'Fahad', email: 'alikashi@gmail.com', age: 25},
        ];

        countryList = [
            {
                name:'Pakistan',
                people: [
                    'Asad',
                    'Jawad',
                    'Mazhar',
                ],
            },
            {
                name:'USA',
                people: [
                    'Buttler',
                    'Jahangir',
                    'Abid',
                ],
            },
            {
                name:'Newzeland',
                people: [
                    'Guptill',
                    'Taylor',
                    'Soodhi',
                ],
            },
        ];

        userListWithNameAndCountry = [
            {
                name:'Asad',
                country: 'USA',

            },
            {
                name:'Fahad',
                country: 'Pakistan',

            },
            {
                name:'Awais',
                country: 'USA',

            },
            {
                name:'Mateen',
                country: 'UK',

            },
            {
                name:'Irfan',
                country: 'UK',

            },
            {
                name:'Bilal',
                country: 'Pakistan',

            },

        ]

        countryColorList = [
            {
                name:'Pakistan',
                people: [
                    'Asad',
                    'Jawad',
                    'Mazhar',
                ],
            },
            {
                name:'USA',
                people: [
                    'Buttler',
                    'Jahangir',
                    'Abid',
                ],
            },
            {
                name:'Newzeland',
                people: [
                    'Guptill',
                    'Taylor',
                    'Soodhi',
                ],
            },
        ];
        constructor(@Inject(TestService) testService:any, private router:Router, private formBuilder:FormBuilder) {
            console.log(testService)
            console.log('Constructor Called');
            this.signupForm = this.formBuilder.group({
                user_fname: ['', Validators.required],
                user_lname: ['', [Validators.required, Validators.maxLength(10)]],
                user_email: ['', [Validators.required, Validators.email]],
                user_password: ['', [Validators.required]]
            });
        }

        ngOnInit(): void {
            console.log("Ng On Init Called");
            this.formGroupValueChangesMethodConcept();
            this.formGroupStatusChangesMethodConcept();
            this.formArrayConcept();
        }



        addMoreUsers()
        {
            this.userListTrackBy = [
                {name: 'Kashif Ali', email: 'alikashi@gmail.com', age: 25},
                {name: 'Haseeb', email: 'alikashi@gmail.com', age: 25},
                {name: 'Asad', email: 'alikashi@gmail.com', age: 25},
                {name: 'Abid', email: 'alikashi@gmail.com', age: 25},
                {name: 'Awais', email: 'alikashi@gmail.com', age: 25},
                {name: 'Ali Mazhar', email: 'alikashi@gmail.com', age: 25},
                {name: 'Akbar', email: 'alikashi@gmail.com', age: 25},
                {name: 'Bilal', email: 'alikashi@gmail.com', age: 25},
                {name: 'Irfan', email: 'alikashi@gmail.com', age: 25},
                {name: 'Fahad', email: 'alikashi@gmail.com', age: 25},
                // More Users
                {name: 'Scott', email: 'alikashi@gmail.com', age: 25},
                {name: 'Morgan', email: 'alikashi@gmail.com', age: 25},
                {name: 'Buttler', email: 'alikashi@gmail.com', age: 25},
            ]
        }

        getUserCountryColor(country:string)
        {
            switch(country)
            {
                case 'USA':
                    return 'green';
                case 'Pakistan':
                    return 'red';
                case 'UK':
                    return 'blue';
                default:
                    return 'black';
            }
        }

        getClassesFromComponent(type:string)
        {
            let cssclasses = {};
            if(type == 'mode')
            {
                cssclasses = {
                    'three':true,
                    'two': true
                }
            }else{
                cssclasses = {
                    'one':true,
                    'two': false
                }
            }
            return cssclasses;
        }

        trackByUserName(index:number, user:any):string
        {
            return user.name;
        }

        get signupFormControl(){
            return this.signupForm.value;
        }


    // @HostListener('click', ['$event'])
    // onhostclick(event:Event){
    //     console.log("User clicked");
    // }

        serverSideRouterLink()
        {
            this.router.navigate(['/about']);
        }

        tdfFormSubmit(newForm:NgForm)
        {
            console.log(newForm.value);
            newForm.reset({
                email:"default@gmail.com"
            });
        }

        mdfFormSubmit(signupForm:FormGroup)
        {
            console.log(signupForm.controls);
            var user_fname = this.signupForm.controls['user_fname'].value;
            var user_lname = signupForm.controls['user_lname'].value;
            console.log(user_fname);
            console.log(user_lname);
        }

        postData()
        {
            console.log(" First Name = " + this.signupForm.get('user_fname')?.value);
            console.log(" Last Name = " + this.signupForm.get('user_lname')?.value);
            console.log(" Email = " + this.signupForm.get('user_email')?.value);
            console.log(" Password = " + this.signupForm.get('user_password')?.value);
            console.log("All Form Values");
            console.log(this.signupForm.value);
        }

        resetMdfForm()
        {
            this.signupForm.reset({
                user_fname:"Default",
                user_lname:"User",
            });
        }

        setValueFromApiToFormToFillAllFields()
        {
            this.signupForm.reset(); // Empty Form Controls
            var responseData = {
                user_fname: 'Ali',
                user_lname: 'Jawad',
                user_email: 'jawad@devstudio.us',
                user_password: 'jawad123',
            };
            this.signupForm.setValue(responseData);
        }

        patchValueFromApiToFormToFillMendatoryFields()
        {
            this.signupForm.reset(); // Empty Form Controls
            var responseData = {
                user_fname: 'Ali',
                user_lname: 'Jawad',
                user_password: 'jawad123',
            };
            this.signupForm.patchValue(responseData);
        }

        formGroupValueChangesMethodConcept()
        {
            /*
                // Any Change in Any Control in FormGroup in Template
                this.signupForm.valueChanges.subscribe(res => {
                    console.log(res);
                });
            */

            // Any Change in Particular Control in FormGroup
            this.signupForm.get('user_fname')?.valueChanges.subscribe(res => {
                console.log(res);
            });
        }

        formGroupStatusChangesMethodConcept()
        {
            /*
                // Any Change in Any Control in FormGroup in Template
                    // When All Validations For All Controls Are Valid Then Response Will Be Valid Otherwise Not.
                this.signupForm.statusChanges.subscribe(res => {
                    console.log(res);
                });
            */
            // Any Change in Particular Control in FormGroup
                // When All Validations For Particular Control Are Valid Then Response Will Be Valid Otherwise Not.
            this.signupForm.get('user_lname')?.statusChanges.subscribe(res => {
                console.log(res);
            });
        }

        formArrayConcept()
        {
            // Set Of Form Controls is Called FormArray
            var formArrayData = new FormArray([
                new FormControl("Jawad"),
                new FormControl("jawad@gmail.com"),
                new FormControl("Male"),
            ]);
            console.log(formArrayData);
        }

}
