import { LocalStorageService } from './local-storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '@app/core/models/user';

describe('AuthService', () => {
  let authService: AuthService;
  let angularFireAuth: jasmine.SpyObj<AngularFireAuth>;
  const user: User = { email: 'email', password: 'password' };

  // const afAuth: any = { signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword') };
  const localStorage: any = { getItem: jasmine.createSpy('getItem') };

  beforeEach(async () =>
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: angularFireAuth },
        { provide: LocalStorageService, useValue: localStorage }
      ]
    })
  );

  beforeEach(() => {
    authService = TestBed.get(AuthService);
    angularFireAuth = TestBed.get(AngularFireAuth);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  // fit('should call signInWithEmailAndPassword', () => {
  //   const spy = spyOn(angularFireAuth, 'signInWithEmailAndPassword').and.callThrough();
  //   expect(authService.signinUser(user)).toHaveBeenCalledWith(user);
  //   // expect(afAuth).toHaveBeenCalledWith(user.email, user.password);
  // });
});
