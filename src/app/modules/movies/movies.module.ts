import { SharedModule } from './../../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [MoviesComponent, PopularMoviesComponent, MovieComponent],
  imports: [SharedModule, MoviesRoutingModule, CommonModule]
})
export class MoviesModule {}
