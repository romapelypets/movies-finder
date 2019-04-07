import { AuthService } from '@app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

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
    this.authService.signinUser(user);
  }
}
