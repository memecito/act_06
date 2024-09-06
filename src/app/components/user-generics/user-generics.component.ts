import { Component, inject, Input } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { UsersService } from '../../services/users.service';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-generics',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-generics.component.html',
  styleUrl: './user-generics.component.css'
})
export class UserGenericsComponent {
uservicio=inject(UsersService);
  // @Input() user: User={  _id:"",
  //   id:0,
  //   first_name:"",
  //   last_name:"",
  //   username:"",
  //   email:"",
  //   image:"",
  //   password:""}
  @Input() user!: User;
  usuario2!:User;
 
  constructor(private router:Router){

  }
  editar(arg0: number) {
  }

  async eliminar(){
    if(confirm("esta seguro que desea eliminar el usuario")){
      
      try{
        this.usuario2= await this.uservicio.delUser(this.user._id!)

      }catch(error){
        console.log(error)
      }

      console.log(this.usuario2)
      this.router.navigate(['/inicio'])
  
    }
  }
}
