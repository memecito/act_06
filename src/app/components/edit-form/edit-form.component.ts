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
activeRoute=inject(ActivatedRoute);
usuario!:User;
uservicio=inject(UsersService)
constructor(){
  this.modelForm=new FormGroup({

    first_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    last_name:new FormControl(null, [Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.required, Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)]),
    image: new FormControl(null, [Validators.required]),
    password:new FormControl(null,[Validators.required, Validators.minLength(4)]),
    repitepass:new FormControl(null,[Validators.required]),
  },[])
}
 ngOnInit(){
  this.activeRoute.params.subscribe(
    async (params:any)=>{
      try{

        this.usuario=await this.uservicio.getUserid(params.url)
      }catch(error){
        console.log(error);
      }
    }
  )

    this.modelForm= new FormGroup({
      first_name:new FormControl('luis',[]),
      last_name:new FormControl(this.usuario.last_name, []),
      email:new FormControl(this.usuario.email,[]),
      image: new FormControl(this.usuario.image, []),
      password:new FormControl(this.usuario.password,[]),
      repitepass:new FormControl(this.usuario.password,[]),
    },[])
   }
  getDataForm(){

  }
  checkControl(formControlName:string, validator:string){
    return this.modelForm.get(formControlName)?.hasError(validator) && this.modelForm.get(formControlName)?.touched;
  }
}
