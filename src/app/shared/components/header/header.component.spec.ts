import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { appReducer } from '@app/core/store/reducers/app.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Logout } from '@app/core/store/actions/auth.action';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
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
});
