import { Component } from '@angular/core';
import { MenuItem } from '@app/core/models/menu-item';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  navigation: MenuItem[] = [
    {
      title: 'Popular',
      url: 'popular'
    },
    {
      title: 'Top Rated',
      url: 'top-rated'
    },
    {
      title: 'Upcoming',
      url: 'upcoming'
    }
  ];
  constructor() {}
}
