import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Signup } from '@app/core/store/actions/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmitForm() {
    const user: User = {
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value
    };
    this.signupForm.disable();
    this.authService
      .signupUser(user)
      .then(() => {
        this.store.dispatch(new Signup());
        this.signupForm.enable();
        this.toastr.success('You have successfully registered', 'Congratulations');
        this.router.navigate(['/auth', 'login']);
      })
      .catch((error: HttpErrorResponse) => {
        this.signupForm.enable();
        this.toastr.error(error.message);
      });
  }
}
