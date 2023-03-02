import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'person',
        component: PersonComponent,
        children: [
            {
                path: 'person-list',
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
