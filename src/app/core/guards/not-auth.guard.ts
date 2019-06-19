import { AuthService } from '@app/core/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(next?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    if (!this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/movies', 'popular']);
      return false;
    }
  }
}
