import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { UsersService } from '../../services/users.service';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';

@Component({
  selector: 'app-user-generics',
  standalone: true,
  imports: [],
  templateUrl: './user-generics.component.html',
  styleUrl: './user-generics.component.css'
})
export class UserGenericsComponent {
  arrUsers: User[]=[];
  respuesta:Respuestahttp={ page:-1,per_page:-1,total:-1,total_pages:-1,results: this.arrUsers};
  
  UService= inject(UsersService);

  async ngOnInit(){
    try{
     this.respuesta= await this.UService.getObjet();
      console.log(this.respuesta.results)
      
      
    }catch(error){
      console.log(error)
    }
  }
  async paginasiguiente(){
    if(this.respuesta.page<this.respuesta.total_pages){
      try{
        this.respuesta= await this.UService.getObjetPage(this.respuesta.page++);
         console.log(this.respuesta.results)
         
         
       }catch(error){
         console.log(error)
       }
    }
   
  }

}
