import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: User={  _id:"",
    id:0,
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    image:"",
    password:""}
    UService= inject(UsersService)
    async ngOnInit(){
      try{
        this.user=await this.UService.getUserid(this.url);
      }
    }
}
