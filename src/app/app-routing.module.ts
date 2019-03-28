import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** TODO: Add firebase login */
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  {
    path: 'movies',
    loadChildren: './modules/movies/movies.module#MoviesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
