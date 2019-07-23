import { AppState } from '@app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Movie } from '@app/core/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { selectMovie } from '@app/core/store/selectors/movie.selector';
import { LoadMovie } from '@app/core/store/actions/movie.action';

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
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
