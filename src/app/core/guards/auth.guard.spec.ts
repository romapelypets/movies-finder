import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { TestBed, async } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { LocalStorageService } from '../services/local-storage.service';

describe('AuthGuard', () => {
  let authService: AuthService;
  let authGuard: AuthGuard;
  const routeMock: any = { snapshot: {} };
  const routeStateMock: any = { snapshot: {}, url: '/login' };
  const router: any = { navigate: jasmine.createSpy('navigate') };
  const afAuth: any = { signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword') };
  const localStorage: any = { getItem: jasmine.createSpy('getItem') };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: router },
        { provide: AngularFireAuth, useValue: afAuth },
        { provide: LocalStorageService, useValue: localStorage }
      ]
    });
  });

  beforeEach(() => {
    authService = TestBed.get(AuthService);
    authGuard = TestBed.get(AuthGuard);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    expect(authGuard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(router.navigate).toHaveBeenCalledWith(['/auth', 'login']);
  });

  it('should allow the authenticated user to access app', () => {
    spyOn(authService, 'getToken').and.returnValue(true);
    expect(authGuard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
});
