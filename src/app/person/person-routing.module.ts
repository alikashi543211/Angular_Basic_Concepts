import { PersonListComponent } from './../person-list/person-list.component';
import { PersonComponent } from './person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'company',
        component: PersonComponent,
        children: [
            {
                path: 'company-list',
                component: PersonListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
