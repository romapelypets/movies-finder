import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create movies component', () => {
    expect(component).toBeTruthy();
  });

  it('should check menu item', () => {
    const element = fixture.debugElement.query(By.css('app-header'));
    expect(element).toBeTruthy();
    const child: HeaderComponent = element.componentInstance;
    expect(child.navigation).toBe(component.navigation);
  });
});
