import { SetToken } from '@core/store/actions/auth.action';
import { User } from '@app/core/models/user';
import { LocalStorageService } from './../../services/local-storage.service';
import { AppState } from './../state/app.state';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Signin, SIGNIN, Signup, SIGNUP, Logout, LOGOUT, SET_TOKEN, SigninGoogle, SIGNIN_GOOGLE } from './../actions/auth.action';
import { AuthService } from '@app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  $signin = this.actions$.pipe(
    ofType<Signin>(SIGNIN),
    map((action: Signin) => action.payload),
    switchMap((user: User) => {
      return this.authService
        .signinUser(user)
        .then(client => {
          this.store.dispatch(new SetToken(client.user['ra']));
        })
        .catch((error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        });
    })
  );

  @Effect({ dispatch: false })
  $signinGoogle = this.actions$.pipe(
    ofType<SigninGoogle>(SIGNIN_GOOGLE),
    switchMap(() => {
      return this.authService
        .signinWithGoogle()
        .then(client => {
          this.store.dispatch(new SetToken(client.user['ra']));
        })
        .catch((error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        });
    })
  );

  @Effect({ dispatch: false })
  $signup = this.actions$.pipe(
    ofType<Signup>(SIGNUP),
    map((action: Signup) => action.payload),
    switchMap((user: User) => {
      return this.authService
        .signupUser(user)
        .then(() => {
          this.toastr.success('You have successfully registered', 'Congratulations');
          this.router.navigate(['/auth', 'login'], { relativeTo: this.route });
        })
        .catch((error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        });
    })
  );

  @Effect({ dispatch: false })
  $logout = this.actions$.pipe(
    ofType<Logout>(LOGOUT),
    switchMap(() => {
      return this.authService
        .signOut()
        .then(() => {
          this.router.navigate(['/auth', 'login'], { relativeTo: this.route });
          this.localStorage.clear();
        })
        .catch((error: HttpErrorResponse) => {
          this.toastr.error(error.message);
        });
    })
  );

  @Effect({ dispatch: false })
  $setToken = this.actions$.pipe(
    ofType<SetToken>(SET_TOKEN),
    map((action: SetToken) => action.payload),
    tap((token: string) => {
      this.localStorage.setItem('token', token);
      this.ngZone.run(() => {
        this.router.navigate(['/movies', 'popular'], { relativeTo: this.route });
      });
    })
  );

  constructor(
    private localStorage: LocalStorageService,
    private store: Store<AppState>,
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ngZone: NgZone
  ) {}
}
