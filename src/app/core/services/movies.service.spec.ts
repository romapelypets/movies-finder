import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { environment } from '@env/environment';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let httpTestingController: HttpTestingController;
  let movies_url: string;
  let movies_key: string;

  beforeEach(async () => TestBed.configureTestingModule({ providers: [MoviesService], imports: [HttpClientTestingModule] }));

  beforeEach(() => {
    moviesService = TestBed.get(MoviesService);
    httpTestingController = TestBed.get(HttpTestingController);
    movies_url = environment.movies_url;
    movies_key = environment.movies_key;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(moviesService).toBeTruthy();
  });

  it('should test get api call: getPopular Movies', () => {
    moviesService.getPopularMovies().subscribe(data => {
      expect(data).toBeDefined();
      expect(data[0].title).toEqual('Dark Phoenix');
      expect(data.length).toBe(20);
    });
    const req = httpTestingController.expectOne(movies_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + movies_key);
    expect(req.request.method).toEqual('GET');
  });
});
