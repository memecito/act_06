import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { User } from '../interfaces/user.type=interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string= 'https://peticiones.online/api/users';
  private http= inject(HttpClient);

  getAllUsers(): Promise<User[]>{
    return firstValueFrom(this.http.get<User[]>(this.baseUrl))
  }

  constructor() { }
}
