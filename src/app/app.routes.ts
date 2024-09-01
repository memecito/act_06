import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio',pathMatch:'full'},
    {path: 'inicio', component:UsuariosComponent},
    {path: 'nuevo', component: FormComponent}
];
