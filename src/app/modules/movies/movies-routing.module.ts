import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'popular', component: PopularMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
