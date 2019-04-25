import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/core/models/menu-item';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  navigation: MenuItem[] = [
    {
      title: 'Popular',
      url: 'popular'
    },
    {
      title: 'Top Rated',
      url: 'top-rated'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
