import { LocalStorageService } from './../services/local-storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { TestBed, async, inject } from '@angular/core/testing';

import { NotAuthGuard } from './not-auth.guard';

describe('NotAuthGuard', () => {
  let authService: AuthService;
  let notAuthGuard: NotAuthGuard;
  const routeMock: any = { snapshot: {} };
  const routeStateMock: any = { snapshot: {}, url: '/popular' };
  const router: any = { navigate: jasmine.createSpy('navigate') };
  const afAuth: any = { signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword') };
  const localStorage: any = { getItem: jasmine.createSpy('getItem') };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        NotAuthGuard,
        { provide: Router, useValue: router },
        { provide: AngularFireAuth, useValue: afAuth },
        { provide: LocalStorageService, useValue: localStorage }
      ]
    });
  });
  beforeEach(() => {
    authService = TestBed.get(AuthService);
    notAuthGuard = TestBed.get(NotAuthGuard);
  });

  it('should be created', () => {
    expect(notAuthGuard).toBeTruthy();
  });

  it('should redirect an authenticated user to the popular movies route', () => {
    spyOn(authService, 'getToken').and.returnValue(true);
    expect(notAuthGuard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(router.navigate).toHaveBeenCalledWith(['/movies', 'popular']);
  });

  it('should not allow the authenticated user to access app', () => {
    spyOn(authService, 'getToken').and.returnValue(false);
    expect(notAuthGuard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
});
