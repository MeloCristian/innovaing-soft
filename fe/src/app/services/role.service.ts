import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(): Observable<any> {
    let route = [environment.apiUrl, 'role'].join('/');
    return this.http.get(route);
  }

  getRoleById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'role', id].join('/');
    return this.http.get(ruta);
  }

  createRole(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'role'].join('/');
    return this.http.post(ruta, usr);
  }

  updateRole(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'role', id].join('/');
    return this.http.put(ruta, usr);
  }

  deleteRole(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'role', id].join('/');
    return this.http.delete(ruta);
  }
}
