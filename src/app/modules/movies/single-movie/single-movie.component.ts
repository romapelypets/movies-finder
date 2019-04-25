import { LoadMovie } from './../../../core/store/actions/movie.action';
import { Store, select } from '@ngrx/store';
import { AppState } from './../../../core/store/state/app.state';
import { Movie } from '@app/core/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MoviesService } from '@app/core/services/movies.service';
import { selectMovie } from '@app/core/store/selectors/movie.selector';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  $movie: Observable<Movie>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.store.dispatch(new LoadMovie(params['id']));
    });
    this.$movie = this.store.pipe(select(selectMovie));
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
