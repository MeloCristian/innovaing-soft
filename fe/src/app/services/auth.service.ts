import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = environment.apiUrl;
  token;
  user$ = new AsyncSubject<any>();
  authentication$ = new BehaviorSubject<boolean>(undefined);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login({ email, password }): Observable<any> {
    return this.http.post(this.uri + '/auth/sig-in', { email: email, password: password });
  }

  logout(redirect: boolean) {
    sessionStorage.clear();
    if (redirect) {
      location.href = '/';
    }
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  validateToken(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        reject(false);
      }
      this.http.get(this.uri + '/auth/verify-session', { headers: { authorization: `Bearer ${token}` } }).subscribe({
        next: (resp: any) => {
          if (resp.token) {
            resolve(true);
          } else {
            reject(false);
          }
        },
        error: (err) => {
          reject(false);
        }
      })
    })
  }
}
