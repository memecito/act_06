import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.type=interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {
modelForm:FormGroup;
activRoute=inject(ActivatedRoute);
usuario!:User;
uservicio=inject(UsersService)
id!:string;
constructor(){
 
  this.modelForm=new FormGroup({
    first_name:new FormControl(null,[]),
    last_name:new FormControl(null, []),
    image: new FormControl(null, []),
    password:new FormControl(null,[]),
    repitepass:new FormControl(null,[]),
  },[])
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
  this.modelForm=new FormGroup({
    first_name:new FormControl(this.usuario.first_name,[]),
    last_name:new FormControl(this.usuario.last_name, []),
    email:new FormControl(this.usuario.email,[]),
    image: new FormControl(this.usuario.image, []),
    password:new FormControl(null,[]),
    repitepass:new FormControl(null,[]),
  },[])
    
   }
  getDataForm(){

  }
  checkControl(formControlName:string, validator:string){
    return this.modelForm.get(formControlName)?.hasError(validator) && this.modelForm.get(formControlName)?.touched;
  }
}
