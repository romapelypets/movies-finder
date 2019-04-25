import { Store, select } from '@ngrx/store';
import { AppState } from '@app/core/store/state/app.state';
import { Component, OnInit } from '@angular/core';
import { LoadTopRatedMovies } from '@app/core/store/actions/movie.action';
import { selectMovies } from '@app/core/store/selectors/movie.selector';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  $movies = this.store.pipe(select(selectMovies));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // Init Movies from Service
    this.store.dispatch(new LoadTopRatedMovies());
  }
}
