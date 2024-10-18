import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { UsersService } from '../../services/users.service';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-generics',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-generics.component.html',
  styleUrl: './user-generics.component.css'
})
export class UserGenericsComponent {

  @Input() user: User={  _id:"",
    id:0,
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    image:"",
    password:""}
  editar(arg0: number) {
  }
}
