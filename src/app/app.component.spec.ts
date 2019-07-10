import { IosInstallComponent } from './shared/components/ios-install/ios-install.component';
import { MatSnackBar, MatSnackBarContainer, MatSnackBarModule } from '@angular/material';
import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Overlay } from '@angular/cdk/overlay';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { tick } from '@angular/core/src/render3';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

describe('AppComponent', () => {
  const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);
  const overlay = jasmine.createSpyObj('Overlay', ['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: MatSnackBar,
          useValue: { matSnackBar }
        },
        {
          provide: Overlay,
          userValue: { overlay }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call detectIOS on init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'detectIOS');
    fixture.detectChanges();
    expect(app.detectIOS).toHaveBeenCalled();
  });

  it('should call detect userAgent and doesn"t call modal', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // spyOnProperty(window.navigator, 'userAgent').and.returnValue(true);
    // window.navigator['__defineGetter__']('standalone', () => {
    //   return false;
    // });
    app.toast.openFromComponent(IosInstallComponent, {
      duration: 8000,
      horizontalPosition: 'start',
      panelClass: ['mat-elevation-z3']
    });
    fixture.detectChanges();
    expect(matSnackBar.openFromComponent.calls.count()).toEqual(0);
    expect(matSnackBar.openFromComponent).not.toHaveBeenCalled();
  });
});
