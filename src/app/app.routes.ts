import { Routes } from '@angular/router';
import { UserGenericsComponent } from './components/user-generics/user-generics.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio',pathMatch:'full'},
    {path: 'inicio', component: UserGenericsComponent},
    {path: 'nuevo', component: FormComponent}
];
