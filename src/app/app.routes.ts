import { Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetalleusuarioComponent } from './pages/usuarios/detalleusuario/detalleusuario.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
    {path: '', redirectTo:'/inicio',pathMatch:'full'},
    {path: 'inicio', component:UsuariosComponent},
    {path: 'usuarios/:url', component:DetalleusuarioComponent},
    {path: 'edit/:url', component:EditFormComponent},
    {path: 'nuevo', component:FormComponent}
];
