import { Component, inject } from '@angular/core';
import { User } from '../../interfaces/user.type=interface';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';
import { UsersService } from '../../services/users.service';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  modelForm:FormGroup;
  ruta:ActivatedRoute= new ActivatedRoute.toString();

  user: User={  _id:"",
    id:0,
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    image:"",
    password:""}
    UService= inject(UsersService)

    checkControl(formControlName:string, validator:string){
      return this.modelForm.get(formControlName)?.hasError(validator) && this.modelForm.get(formControlName)?.touched;
    }
    checkPassword(formValue: AbstractControl): any{
      const password= formValue.get('password')?.value;
      const repass= formValue.get('reptiepass')?.value;
      if(password !== repass){
        return {'checkpassword':true}
      }else{
        
        return null
      }
    }
    async ngOnInit(){
      try{
        this.user=await this.UService.getUserid(this.url);
        this.modelForm= new FormGroup({
          _id: new FormControl(this.user._id,[]),
          id: new FormControl(this.user.id,[]),
          first_name:new FormControl(this.user.first_name,[]),
          last_name:new FormControl(this.user.last_name, []),
          email:new FormControl(this.user.email,[]),
          image: new FormControl(this.user.image, []),
          password:new FormControl(this.user.password,[]),
          repitepass:new FormControl(this.user.password,[]),
        },[])
      }
     
      }
}
