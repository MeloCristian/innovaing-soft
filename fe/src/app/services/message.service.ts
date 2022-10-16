import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(message: any): Observable<any> {
    let ruta = [environment.apiUrl, 'message','send'].join('/');
    return this.http.post(ruta, message);
  }
}
