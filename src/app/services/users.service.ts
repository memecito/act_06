import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.type=interface';
import { Respuestahttp } from '../interfaces/responsehttp.type=interface';
import { withHttpTransferCacheOptions } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string= 'https://peticiones.online/api/users?page=';
  private userUrl: string= 'https://peticiones.online/api/users/';
  private http= inject(HttpClient);
  arrUsers: User[]=[];

  getAllUsers(): Promise<User[]>{
  
    return firstValueFrom(this.http.get<User[]>(this.baseUrl));
    
  }
  getObjet(): Promise<Respuestahttp>{
    return firstValueFrom(this.http.get<Respuestahttp>(this.baseUrl));

  }
  getObjetPage(page:number):Promise<Respuestahttp>{
    return firstValueFrom(this.http.get<Respuestahttp>(this.baseUrl+page));

  }
  getUserid(id:string):Promise<User>{
    return firstValueFrom(this.http.get<User>(this.userUrl+id));
  }
  putUser(nuevoUser:User):any{
    let posicion = this.arrUsers.findIndex(user =>user.email===nuevoUser.email)
    if(posicion===-1){
      return firstValueFrom(this.http.post<User>(this.userUrl,`?first_name:${nuevoUser.first_name}&last_name=${nuevoUser.last_name}&email:${nuevoUser.email}&nuevoUsername:${nuevoUser.username}&password:${nuevoUser.password}`))
    }
  }

  delUser(_id:string):Promise<User>{
    console.log(_id)
    return firstValueFrom(this.http.delete<User>(this.userUrl+_id))
  }
  constructor() { }
}
