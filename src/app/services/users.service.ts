import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.type=interface';
import { Respuestahttp } from '../interfaces/responsehttp.type=interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string= 'https://peticiones.online/api/users?page=';
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

  constructor() { }
}
