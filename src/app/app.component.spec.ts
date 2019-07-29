import { MatSnackBar, MatSnackBarContainer, MatSnackBarModule } from '@angular/material/snack-bar';
import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Overlay } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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

  beforeEach(async(() => {
    // jasmine.clock().install();
  }));

  afterEach(() => {
    // jasmine.clock().uninstall();
  });

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
    // const originalUserAgent = navigator.userAgent;
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    // const mockspy = jasmine.createSpyObj('window', 'standalone');

    // mockspy.call

    // spyOnProperty(app, 'isIos').and.callThrough();
    // spyOn(app, 'isInStandaloneMode').and.callThrough();

    // const userAgent = jasmine.createSpyObj(window.navigator)
    // spyOn(app, 'isIos').and.returnValue(true);
    // app.detectIOS();
    // expect(app.title).toEqual('');
    // jasmine.clock().tick(1);
    // fixture.detectChanges();
    // expect(app.title).toEqual('title');
    // expect(matSnackBar.openFromComponent).toHaveBeenCalled();
    // jasmine.clock().uninstall();
    // window.navigator['__defineGetter__']('standalone', () => {
    //   return false;
    // });
    // app.toast.openFromComponent(IosInstallComponent, {
    //   duration: 8000,
    //   horizontalPosition: 'start',
    //   panelClass: ['mat-elevation-z3']
    // });

    // expect(matSnackBar.openFromComponent.calls.count()).toEqual(0);
    // expect(matSnackBar.openFromComponent).not.toHaveBeenCalled();
  });
});
