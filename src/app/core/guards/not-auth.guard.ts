import { getAuthenticated } from './../store/selectors/auth.selector';
import { Store, select } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  isAuthenticated: boolean = false;
  constructor(private router: Router, private store: Store<AppState>) {
    this.store.pipe(select(getAuthenticated)).subscribe(isAuthenticated => {
      console.log(isAuthenticated);
      this.isAuthenticated = isAuthenticated;
    });
  }
  canActivate(next?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<boolean> {
    console.log(this.isAuthenticated);
    if (!this.isAuthenticated) {
      return of(true);
    } else {
      this.router.navigate(['/movies', 'popular']);
      return of(false);
    }
  }
}
