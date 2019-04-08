import { AuthService } from '@app/core/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate(['/auth', 'login']);
      return of(false);
    }
  }
}
