import { LoadTopRatedMovies } from '@app/core/store/actions/movie.action';
import { appReducer } from '@app/core/store/reducers/app.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedMoviesComponent } from './top-rated-movies.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopRatedMoviesComponent', () => {
  let component: TopRatedMoviesComponent;
  let fixture: ComponentFixture<TopRatedMoviesComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer)],
      declarations: [TopRatedMoviesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(TopRatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when created', () => {
    const action = new LoadTopRatedMovies();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
