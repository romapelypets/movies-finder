import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'popular' },
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: 'popular', component: PopularMoviesComponent },
      { path: 'detailed/:id', component: SingleMovieComponent },
      { path: 'top-rated', component: TopRatedMoviesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
