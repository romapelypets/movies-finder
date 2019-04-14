import { Movie } from '@app/core/models/movie';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MoviesService } from '@app/core/services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit, OnDestroy {
  movieID: number;
  paramsSubscription: Subscription;
  movie: Movie;
  $movie: Observable<Movie>;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.movieID = params['id'];
    });
    this.$movie = this.moviesService.getMovie(this.movieID);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
