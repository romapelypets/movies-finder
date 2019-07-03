import { MatSnackBar, MatSnackBarContainer } from '@angular/material';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Overlay } from '@angular/cdk/overlay';

fdescribe('AppComponent', () => {
  // const mat = { openFromComponent: () => {} };
  const matSnackBar = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);
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
          userValue: {}
        }
      ]
    }).compileComponents();
  }));

  fit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  fit('should call detectIOS on init', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'detectIOS');
    fixture.detectChanges();
    expect(app.detectIOS).toHaveBeenCalled();
  });

  fit('should call detect userAgent', done => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'detectIOS').and.callThrough();
    fixture.detectChanges();

    spyOnProperty(window.navigator, 'userAgent').and.returnValue('iphone');
    // spyOnProperty(window as any, 'standalone').and.returnValue(false);
    // expect(window.navigator['standalone']).toBeUndefined();

    // setTimeout(() => {
    //   expect(matSnackBar.openFromComponent).toHaveBeenCalled();
    //   done();
    // });

    // app.detectIOS();

    // app.isIos();
  });

  fit('should call standalone', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // spyOn(app, 'detectIOS').and.callThrough();
    // fixture.detectChanges();

    // app.detectIOS();
    // app.isIos();
  });

  fit('tests something async', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // setTimeout(() => {
    //   expect(app.tost.).toBe(true);
    //   done();
    // });
  });
});
