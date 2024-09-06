import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Respuestahttp } from '../../interfaces/responsehttp.type=interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  modelForm:FormGroup;
  Uservice=inject(UsersService)

  constructor(){
    this.modelForm=new FormGroup({
      first_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      last_name:new FormControl(null, [Validators.required,Validators.minLength(3)]),
      email:new FormControl(null,[Validators.required, Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)]),
      image: new FormControl(null, [Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.minLength(4)]),
      repitepass:new FormControl(null,[Validators.required]),
    },[this.checkPassword])
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
  async getDataForm(){
    try{
      console.log(this.Uservice.putUser(this.modelForm.value));
    }catch(error)
    {
      console.log('No se ha introducido el usuario');
      console.log(error)
    }
  }
  checkControl(formControlName:string, validator:string){
    return this.modelForm.get(formControlName)?.hasError(validator) && this.modelForm.get(formControlName)?.touched;
  }

  // ngOnInit(){
  //   this.modelForm= new FormGroup({
  //     _id: new FormControl(null,[]),
  //     id: new FormControl(null,[]),
  //     first_name:new FormControl(null,[]),
  //     last_name:new FormControl(null, []),
  //     email:new FormControl(null,[]),
  //     image: new FormControl(null, []),
  //     password:new FormControl(null,[]),
  //     repitepass:new FormControl(null,[]),
  //   },[])
  // }
}
