import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router, private toastr: ToastrService) {}

  signupUser(user: User) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.toastr.success('You have successfully registered', 'Congratulations');
        this.router.navigate(['/auth', 'login']);
      })
      .catch(() => {
        this.toastr.error('Something happened...Try again!');
      });
  }

  signinUser(user: User) {
    this.afAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        console.log('signined');
      })
      .catch(() => {
        console.log('error');
      });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
}
