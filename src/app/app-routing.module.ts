import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotAuthGuard } from './core/guards/not-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule', canActivate: [NotAuthGuard] },
  {
    path: 'movies',
    loadChildren: './modules/movies/movies.module#MoviesModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
