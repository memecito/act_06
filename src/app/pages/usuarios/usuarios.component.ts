import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';
import { UsersService } from '../../services/users.service';
import { RouterLink } from '@angular/router';
import { UserGenericsComponent } from "../../components/user-generics/user-generics.component";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink, UserGenericsComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
arrUser: User[]=[];
respuesta: Respuestahttp={page:-1,per_page:-1,total:-1,total_pages:-1,results: this.arrUser};
UService= inject(UsersService)

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
      console.log(this.respuesta.page+1)
      this.respuesta= await this.UService.getObjetPage(this.respuesta.page+1);
       console.log(this.respuesta.results)
       
       
     }catch(error){
       console.log(error)
     }
  }
  
 
}
async paginaanterior(){
  if(this.respuesta.page>1){
    try{
      console.log(this.respuesta.page+1)
      this.respuesta= await this.UService.getObjetPage(this.respuesta.page-1);
       console.log(this.respuesta.results)
       
       
     }catch(error){
       console.log(error)
     }
  }
  
 
}
async irpagina(pag:number){
 
    try{
   
      this.respuesta= await this.UService.getObjetPage(pag);
       console.log(this.respuesta.results)
       
       
     }catch(error){
       console.log(error)
     }
  
}
async editar(id:number){
  // try{
   
  //   this.respuesta= await this.UService.getUserid(id);
  //    console.log(this.respuesta.results)
     
     
  //  }catch(error){
  //    console.log(error)
  //  }
}
}
