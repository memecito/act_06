import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { User } from '../../../interfaces/user.type=interface';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-detalleusuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalleusuario.component.html',
  styleUrl: './detalleusuario.component.css'
})
export class DetalleusuarioComponent {
activRoute= inject(ActivatedRoute);
usuario!:User;
usuario2!:User;
uservicio=inject(UsersService)
id!:string;


constructor(private router: Router){

}
 ngOnInit(){
   this.activRoute.params.subscribe(async (params:any)=>{
    
   this.id= params.url;
    console.log(this.id)
    try{
    this.usuario=  await this.uservicio.getUserid(this.id)
    console.log(this.usuario)
    }catch(error){
      console.log(error);
    }
  })
}
async eliminar(){
  if(confirm("esta seguro que desea eliminar el usuario")){
    this.usuario2= await this.uservicio.delUser(this.id)
    console.log(this.usuario2)
    this.router.navigate(['/inicio'])

  }
}
}
