import { AuthService } from '@app/core/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(next?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<boolean> {
    if (!this.authService.getToken()) {
      return of(true);
    } else {
      this.router.navigate(['/movies', 'popular']);
      return of(false);
    }
  }
}
