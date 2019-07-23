import { Movie } from '@app/core/models/movie';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { environment } from '@env/environment';
import { of } from 'rxjs';
import { HttpRequest } from '@angular/common/http';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let httpTestingController: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };
  let movies_url: string;
  let movies_key: string;
  let exp: Movie[];

  beforeEach(async () => TestBed.configureTestingModule({ providers: [MoviesService], imports: [HttpClientTestingModule] }));

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    moviesService = TestBed.get(MoviesService);
    httpTestingController = TestBed.get(HttpTestingController);
    movies_url = environment.movies_url;
    movies_key = environment.movies_key;
    exp = [
      {
        id: 420818,
        title: 'The Lion King',
        overview: 'Spider-Man: Far from Home',
        poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
        release_date: '2019-07-12',
        vote_average: '0',
        runtime: '100',
        budget: 1,
        genres: [{ id: 35, name: 'Comedy' }]
      }
    ];
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(moviesService).toBeTruthy();
  });

  it('should test get api call: getPopular Movies', () => {
    const fakeData = {
      dates: { maximum: '2019-07-27', minimum: '2019-06-30' },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          genre_ids: [1],
          id: 420818,
          original_language: 'en',
          original_title: 'The Lion King',
          overview: 'Spider-Man: Far from Home',
          popularity: 253.781,
          poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          release_date: '2019-07-12',
          title: 'The Lion King',
          video: false,
          vote_average: '0',
          vote_count: 72,
          runtime: '100',
          budget: 1,
          genres: [{ id: 35, name: 'Comedy' }]
        }
      ],
      total_pages: 1,
      total_results: 1
    };
    httpClientSpy.get.and.returnValue(of(fakeData));
    moviesService.getPopularMovies().subscribe((data: Movie[]) => {
      expect(data).toBeDefined();
      expect(data[0]).toEqual(exp[0]);
    });
    const req = httpTestingController.expectOne(movies_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + movies_key);
    req.flush(fakeData);
    expect(req.request.method).toEqual('GET');
  });

  it('should test get api call: getTopRated Movies', () => {
    const fakeData = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          genre_ids: [1],
          id: 420818,
          original_language: 'en',
          original_title: 'The Lion King',
          overview: 'Spider-Man: Far from Home',
          popularity: 253.781,
          poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          release_date: '2019-07-12',
          title: 'The Lion King',
          video: false,
          vote_average: '0',
          vote_count: 72,
          runtime: '100',
          budget: 1,
          genres: [{ id: 35, name: 'Comedy' }]
        }
      ],
      total_pages: 1,
      total_results: 1
    };
    httpClientSpy.get.and.returnValue(of(fakeData));

    moviesService.getTopRatedMovies().subscribe((data: Movie[]) => {
      expect(data).toBeDefined();
      expect(data[0]).toEqual(exp[0]);
    });

    const req = httpTestingController.expectOne(movies_url + 'movie/top_rated' + '?api_key=' + movies_key);
    req.flush(fakeData);
    expect(req.request.method).toEqual('GET');
  });

  it('should test get api call: getMovie', () => {
    const fakeData = {};
    moviesService.getMovie(420818).subscribe((data: Movie) => {
      expect(data).toBeDefined();
    });
    const req = httpTestingController.expectOne(movies_url + 'movie/' + 420818 + '?api_key=' + movies_key);
    req.flush(fakeData);
    expect(req.request.method).toEqual('GET');
  });

  it('should test get api call: getUpcoming Movies', () => {
    const fakeData = {
      dates: { maximum: '2019-07-27', minimum: '2019-06-30' },
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          genre_ids: [1],
          id: 420818,
          original_language: 'en',
          original_title: 'The Lion King',
          overview: 'Spider-Man: Far from Home',
          popularity: 253.781,
          poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          release_date: '2019-07-12',
          title: 'The Lion King',
          video: false,
          vote_average: '0',
          vote_count: 72,
          runtime: '100',
          budget: 1,
          genres: [{ id: 35, name: 'Comedy' }]
        },
        {
          adult: false,
          backdrop_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          genre_ids: [1],
          id: 420818,
          original_language: 'en',
          original_title: 'The Lion King',
          overview: 'Spider-Man: Far from Home',
          popularity: 253.781,
          poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
          release_date: '2019-06-12',
          title: 'The Lion King',
          video: false,
          vote_average: '0',
          vote_count: 72,
          runtime: '100',
          budget: 1,
          genres: [{ id: 35, name: 'Comedy' }]
        }
      ],
      total_pages: 1,
      total_results: 1
    };
    httpClientSpy.get.and.returnValue(of(fakeData));
    moviesService.getUpcomingMovies().subscribe((data: Movie[]) => {
      expect(data).toBeDefined();
      expect(data[0]).toEqual(exp[0]);
    });
    const req = httpTestingController.expectOne(movies_url + 'movie/upcoming' + '?api_key=' + movies_key);
    req.flush(fakeData);
    expect(req.request.method).toEqual('GET');
  });
});
