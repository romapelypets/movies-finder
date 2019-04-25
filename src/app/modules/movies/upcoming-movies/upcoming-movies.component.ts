import { LoadUpcomingMovies } from './../../../core/store/actions/movie.action';
import { AppState } from '@app/core/store/state/app.state';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectMovies } from '@app/core/store/selectors/movie.selector';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  $movies = this.store.pipe(select(selectMovies));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // Init Movies from Service
    this.store.dispatch(new LoadUpcomingMovies());
  }
}
