import { Router, NavigationStart, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { appReducer } from '@app/core/store/reducers/app.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA, Renderer2, Type } from '@angular/core';
import { Logout } from '@app/core/store/actions/auth.action';
import { NavigationEnd } from '@angular/router';

describe('HeaderComponent', () => {
  let renderer2: Renderer2;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer), RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    router = TestBed.get(Router) as Router;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch store on logout', () => {
    const action = new Logout();
    const event = jasmine.createSpyObj('event', ['preventDefault']);
    component.logout(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should subscrive on router change', () => {
    expect(component.isActiveMenu).toBeFalsy();
    router.navigate(['/']).then(() => {
      expect(component.isActiveMenu).toBeFalsy();
    });
  });

  it('should call renderer and remove class', () => {
    spyOn(renderer2, 'removeClass').and.callThrough();
    component.toggleMenu();
    component.toggleMenu();
    expect(renderer2.removeClass).toHaveBeenCalledWith(jasmine.any(Object), 'no-scroll');
  });

  it('should call renderer and add class', () => {
    spyOn(renderer2, 'addClass').and.callThrough();
    component.toggleMenu();
    expect(renderer2.addClass).toHaveBeenCalledWith(jasmine.any(Object), 'no-scroll');
  });
});
