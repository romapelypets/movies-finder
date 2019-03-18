import { MoviesService } from './core/services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-finder';

  constructor(private moviesService: MoviesService) {
    moviesService.getPopularMovies().subscribe(item => {
      console.log(item);
    });
  }
}
