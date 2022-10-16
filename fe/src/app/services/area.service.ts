import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  getArea(): Observable<any> {
    let route = [environment.apiUrl, 'area'].join('/');
    return this.http.get(route);
  }

  getAreaById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'area', id].join('/');
    return this.http.get(ruta);
  }

  createArea(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'area'].join('/');
    return this.http.post(ruta, usr);
  }

  updateArea(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'area', id].join('/');
    return this.http.put(ruta, usr);
  }

  deleteArea(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'area', id].join('/');
    return this.http.delete(ruta);
  }
}
