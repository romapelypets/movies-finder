import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosInstallComponent } from './ios-install.component';
import { MatSnackBarRef } from '@angular/material';

describe('IosInstallComponent', () => {
  let component: IosInstallComponent;
  let fixture: ComponentFixture<IosInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IosInstallComponent],
      providers: [
        {
          provide: MatSnackBarRef,
          useValue: { dismiss: () => {} }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosInstallComponent);
    component = fixture.componentInstance;
    spyOn(component, 'close').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('handleErrors should open the snacker', () => {
    component.close();
    expect(component.close).toHaveBeenCalled();
  });
});
