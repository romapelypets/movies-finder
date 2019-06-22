import { appReducer } from '@app/core/store/reducers/app.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { User } from '@app/core/models/user';
import { Signin, SigninGoogle } from '@app/core/store/actions/auth.action';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [StoreModule.forRoot(appReducer), ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.signinForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const name = component.signinForm.controls['email'];
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('test@gmail.com');
    expect(name.hasError('email')).toBeFalsy();
    expect(name.hasError('required')).toBeFalsy();

    name.setValue('testgmail.com');
    expect(name.hasError('email')).toBeTruthy();
  });

  it('should test sign in with email and password and dispatch the store', () => {
    const user: User = {
      email: component.signinForm.controls['email'].value,
      password: component.signinForm.controls['password'].value
    };
    const action = new Signin(user);
    component.onSubmitForm();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should test sign in with Google and dispatch the store', () => {
    const action = new SigninGoogle();
    component.signinWithGoogle();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
