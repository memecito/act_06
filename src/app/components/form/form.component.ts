import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  modelForm:FormGroup;
  constructor(){
    this.modelForm=new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      email:new FormControl(null,[Validators.required, Validators.pattern(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)]),
      edad:new FormControl(null,[]),
      dni:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[]),
      repitepass:new FormControl(null,[]),
    },[])
  }
  getDataForm(){
    console.log(this.modelForm.value)
  }
  checkControl(formControlName:string, validator:string){
    return this.modelForm.get(formControlName)?.hasError(validator) && this.modelForm.get(formControlName)?.touched;
  }
}
