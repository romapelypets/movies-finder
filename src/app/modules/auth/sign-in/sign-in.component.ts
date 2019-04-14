import { SetToken } from '@core/store/actions/auth.action';
import { AppState } from '@app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import * as firebase from 'firebase/app';
import { getAuth } from '@app/core/store/selectors/auth.selector';
import { Signin } from '@app/core/store/actions/auth.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  auth$ = this.store.pipe(select(getAuth));

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.initSigninForm();
  }

  initSigninForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
    const user: User = {
      email: this.signinForm.controls['email'].value,
      password: this.signinForm.controls['password'].value
    };
    this.signinForm.disable();
    this.authService
      .signinUser(user)
      .then(() => {
        this.store.dispatch(new Signin());
        this.signinForm.enable();
        firebase.auth().onAuthStateChanged(currentUser => {
          if (currentUser) {
            currentUser.getIdToken().then(data => {
              this.store.dispatch(new SetToken(data));
            });
          }
        });
      })
      .then(() => {
        this.router.navigate(['/movies', 'popular'], { relativeTo: this.route });
      })
      .catch((error: HttpErrorResponse) => {
        this.signinForm.enable();
        this.toastr.error(error.message);
      });
  }

  signinWithGoogle() {
    this.authService
      .signinWithGoogle()
      .then(() => {
        this.store.dispatch(new Signin());
        firebase.auth().onAuthStateChanged(currentUser => {
          if (currentUser) {
            currentUser.getIdToken().then(data => {
              this.store.dispatch(new SetToken(data));
            });
          }
        });
      })
      .then(() => {
        this.router.navigate(['/movies', 'popular'], { relativeTo: this.route });
      })
      .catch((error: HttpErrorResponse) => {
        this.toastr.error(error.message);
      });
  }
}
