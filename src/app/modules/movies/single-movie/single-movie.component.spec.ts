import { ActivatedRoute, Params } from '@angular/router';
import { AppState } from '@app/core/store/state/app.state';
import { Store, StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieComponent } from './single-movie.component';
import { appReducer } from '@app/core/store/reducers/app.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MinuteToHourPipe } from '@app/shared/pipes/minute-to-hour.pipe';
import { of } from 'rxjs';

describe('SingleMovieComponent', () => {
  let component: SingleMovieComponent;
  let fixture: ComponentFixture<SingleMovieComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
      declarations: [SingleMovieComponent, MinuteToHourPipe],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: Params) => void) =>
                fn({
                  tab: 0
                })
            }
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(SingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe on destroy', () => {
    component['paramsSubscription'] = of(true).subscribe();
    component.ngOnDestroy();
    expect(component['paramsSubscription'].closed).toBeTruthy();
  });
});
