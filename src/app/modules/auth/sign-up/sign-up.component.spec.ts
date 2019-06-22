import { AppState } from '@app/core/store/state/app.state';
import { Store, StoreModule } from '@ngrx/store';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { appReducer } from '@app/core/store/reducers/app.reducer';
import { Signup } from '@app/core/store/actions/auth.action';
import { User } from '@app/core/models/user';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [StoreModule.forRoot(appReducer), ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.signupForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const name = component.signupForm.controls['email'];
    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('test@gmail.com');
    expect(name.hasError('email')).toBeFalsy();
    expect(name.hasError('required')).toBeFalsy();

    name.setValue('testgmail.com');
    expect(name.hasError('email')).toBeTruthy();
  });

  it('should dispatch an action when form submit', () => {
    const user: User = {
      email: component.signupForm.controls['email'].value,
      password: component.signupForm.controls['password'].value
    };
    const action = new Signup(user);
    component.onSubmitForm();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
