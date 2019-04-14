import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getAuthenticated } from '../store/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean = false;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.pipe(select(getAuthenticated)).subscribe(isAuthenticated => {
      console.log(isAuthenticated);
      this.isAuthenticated = isAuthenticated;
    });
  }

  canActivate(next?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<boolean> {
    console.log(this.isAuthenticated);
    if (this.isAuthenticated) {
      return of(true);
    } else {
      this.router.navigate(['/auth', 'login']);
      return of(false);
    }
  }
}
