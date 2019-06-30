import { environment } from '@env/environment';
import { LocalStorageService } from './local-storage.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '@app/core/models/user';
import { AngularFireModule } from '@angular/fire';

fdescribe('AuthService', () => {
  let authService: AuthService;
  let angularFireAuth: jasmine.SpyObj<AngularFireAuth>;
  const user: User = { email: 'email', password: 'password' };

  const afAuth: any = { auth: jasmine.createSpy('signInWithEmailAndPassword') };
  const localStorage: any = { getItem: jasmine.createSpy('getItem') };

  // const authState: MockUser = {
  //   displayName: null,
  //   isAnonymous: true,
  //   uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
  // };

  // const mockAngularFireAuth: any = {
  //   auth: jasmine.createSpyObj('auth', {
  //     'signInAnonymously': Promise.reject({
  //       code: 'auth/operation-not-allowed'
  //     }),
  //     // 'signInWithPopup': Promise.reject(),
  //     // 'signOut': Promise.reject()
  //   }),
  //   authState: Observable.of(authState)
  // };

  beforeEach(async () =>
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule],
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

  fit('should be created', () => {
    expect(authService).toBeTruthy();
  });

  fit('should call signInWithEmailAndPassword', () => {
    // const spy = spyOn(angularFireAuth, 'signInWithEmailAndPassword').and.callThrough();
    authService.signinUser(user);

    expect(afAuth.auth).toHaveBeenCalledWith(user);
    // expect(afAuth).toHaveBeenCalledWith(user.email, user.password);
  });
});
