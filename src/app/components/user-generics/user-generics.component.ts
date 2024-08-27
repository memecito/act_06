import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-generics',
  standalone: true,
  imports: [],
  templateUrl: './user-generics.component.html',
  styleUrl: './user-generics.component.css'
})
export class UserGenericsComponent {
  arrUsers: User[]=[];
  UService= inject(UsersService);

  async ngOnInit(){
    try{
      const response= await this.UService.getAllUsers()
      console.log(response)
      this.arrUsers=response.results;
    }catch(error){
      console.log(error)
    }
  }

}
