import { environment } from '@env/environment';
import { LocalStorageService } from './local-storage.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from '@app/core/models/user';
import { AngularFireModule } from '@angular/fire';

describe('AuthService', () => {
  let authService: AuthService;
  let angularFireAuth: jasmine.SpyObj<AngularFireAuth>;
  const user: User = { email: 'email', password: 'password' };
  const localStorage: any = { getItem: jasmine.createSpy('getItem') };

  const mockAngularFireAuth: any = {
    auth: jasmine.createSpyObj('auth', {
      signInWithPopup: Promise.resolve(),
      createUserWithEmailAndPassword: Promise.resolve(),
      signInWithEmailAndPassword: Promise.resolve(),
      signOut: Promise.resolve()
    })
  };

  beforeEach(async () =>
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
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

  it('should call createUserWithEmailAndPassword', () => {
    authService.signupUser(user).then(() => {});
    expect(mockAngularFireAuth.auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);
  });

  it('should call signInWithEmailAndPassword', () => {
    authService.signinUser(user).then(() => {});
    expect(mockAngularFireAuth.auth.signInWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);
  });

  it('should call signInWithGoogle', () => {
    authService.signinWithGoogle().then(() => {});
    expect(mockAngularFireAuth.auth.signInWithPopup).toHaveBeenCalled();
  });

  it('should call signOut', () => {
    authService.signOut().then(() => {});
    expect(mockAngularFireAuth.auth.signOut).toHaveBeenCalled();
  });

  it('should call getToken', () => {
    authService.getToken();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
