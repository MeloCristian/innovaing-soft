import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any> {
    let route = [environment.apiUrl, 'person'].join('/');
    return this.http.get(route);
  }

  getPersonById(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'person', id].join('/');
    return this.http.get(ruta);
  }

  createPerson(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'person'].join('/');
    return this.http.post(ruta, usr);
  }

  updatePerson(usr: any, id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'person', id].join('/');
    return this.http.put(ruta, usr);
  }

  deletePerson(id: any): Observable<any> {
    let ruta = [environment.apiUrl, 'person', id].join('/');
    return this.http.delete(ruta);
  }
}
