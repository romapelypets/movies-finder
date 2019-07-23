import { RouterTestingModule } from '@angular/router/testing';
import { appReducer } from '@app/core/store/reducers/app.reducer';
import { StoreModule, Store } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviesComponent } from './popular-movies.component';
import { AppState } from '@app/core/store/state/app.state';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadMovies } from '@app/core/store/actions/movie.action';

describe('PopularMoviesComponent', () => {
  let component: PopularMoviesComponent;
  let fixture: ComponentFixture<PopularMoviesComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(appReducer), RouterTestingModule],
      declarations: [PopularMoviesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(PopularMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an action to load data when created', () => {
    const action = new LoadMovies();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
