import { AppState } from '@app/core/store/state/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user';
import { Signin, SigninGoogle } from '@app/core/store/actions/auth.action';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

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
    this.store.dispatch(new Signin(user));
  }

  signinWithGoogle() {
    this.store.dispatch(new SigninGoogle());
  }
}
