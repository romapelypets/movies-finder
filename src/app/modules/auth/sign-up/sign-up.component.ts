import { Store } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { User } from './../../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Signup } from '@app/core/store/actions/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitForm() {
    const user: User = {
      email: this.signupForm.controls['email'].value,
      password: this.signupForm.controls['password'].value
    };
    this.store.dispatch(new Signup(user));
  }
}
