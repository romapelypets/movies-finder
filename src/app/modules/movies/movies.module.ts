import { SharedModule } from './../../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
    PopularMoviesComponent,
    MovieCardComponent,
    SingleMovieComponent,
    TopRatedMoviesComponent,
    UpcomingMoviesComponent
  ],
  imports: [SharedModule, MoviesRoutingModule, CommonModule]
})
export class MoviesModule {}
