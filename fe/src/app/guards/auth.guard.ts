import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  rutas = []
  constructor(private _authService: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this._authService.validateToken()
      .then(resp => {
        if (resp) {
          return true;
        }
        this.router.navigate(['/auth/sign-in'])
        return false;
      })
      .catch(err => {
        this.router.navigate(['/auth/sign-in'])
        return err;
      });
  }
}
