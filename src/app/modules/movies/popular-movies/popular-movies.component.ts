import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '@app/core/store/state/app.state';
import { selectMovies } from '@app/core/store/selectors/movie.selector';
import { LoadMovies } from '@app/core/store/actions/movie.action';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  $movies = this.store.pipe(select(selectMovies));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // Init Movies from Service
    this.store.dispatch(new LoadMovies());

    // Test Subscrive for Movies
    // this.$movies.subscribe(item => {
    //   console.log(item);
    // });
  }
}
