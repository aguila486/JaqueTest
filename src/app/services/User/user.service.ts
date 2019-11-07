import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
import { URL_SERVICES } from 'src/app/config/config';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.models';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  menu: any = [
    {
      picture: "http://www.fillmurray.com/200/300",
      name: "Ricardo",
      fathersLastName: "Gallardo",
      mothersLastName: "Marquez",
      email: "rgm486@gmail.com",
      roleId: 1,
      active: false
    }
  ];

  lstUser: User[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio cargado de usuarios');
  }

  getUsers(): Observable<any> {
    let url = URL_SERVICES + '/users';
    return this.http.get(url);
  }
}