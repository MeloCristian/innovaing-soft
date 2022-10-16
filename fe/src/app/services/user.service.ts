import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any> {
    let route = [environment.apiUrl, 'user'].join('/');
    return this.http.get(route);
  }

  getUserById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'user', id].join('/');
    return this.http.get(ruta);
  }

  createUser(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'user'].join('/');
    return this.http.post(ruta, usr);
  }

  updateUser(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'user', id].join('/');
    return this.http.put(ruta, usr);
  }

  deleteUser(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'user', id].join('/');
    return this.http.delete(ruta);
  }

}
