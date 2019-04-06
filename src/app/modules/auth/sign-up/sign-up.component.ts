import { User } from './../../../core/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

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
    this.authService.signupUser(user);
  }
}
