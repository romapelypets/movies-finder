import { LocalStorageService } from './../../../core/services/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '@app/core/models/user';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
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
        this.signinForm.enable();
        firebase.auth().onAuthStateChanged(currentUser => {
          if (currentUser) {
            currentUser.getIdToken().then(data => {
              this.localStorage.setItem('token', data);
              this.router.navigate(['/movies', 'popular'], { relativeTo: this.route });
            });
          }
        });
      })
      .then(() => {})
      .catch((error: HttpErrorResponse) => {
        this.signinForm.enable();
        this.toastr.error(error.message);
      });
  }

  signinWithGoogle() {
    this.authService
      .signinWithGoogle()
      .then(() => {
        firebase.auth().onAuthStateChanged(currentUser => {
          if (currentUser) {
            currentUser.getIdToken().then(data => {
              this.localStorage.setItem('token', data);
              this.router.navigate(['/movies', 'popular'], { relativeTo: this.route });
            });
          }
        });
      })
      .then(() => {
        console.log(this.route);
        // this.router.navigate(['/movies', 'popular'], { relativeTo: this.route });
      })
      .catch((error: HttpErrorResponse) => {
        this.toastr.error(error.message);
      });
  }
}
