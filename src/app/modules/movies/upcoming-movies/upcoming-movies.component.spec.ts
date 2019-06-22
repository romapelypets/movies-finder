import { appReducer } from '@app/core/store/reducers/app.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMoviesComponent } from './upcoming-movies.component';
import { LoadUpcomingMovies } from '@app/core/store/actions/movie.action';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UpcomingMoviesComponent', () => {
  let component: UpcomingMoviesComponent;
  let fixture: ComponentFixture<UpcomingMoviesComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
      declarations: [UpcomingMoviesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(UpcomingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when created', () => {
    const action = new LoadUpcomingMovies();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
