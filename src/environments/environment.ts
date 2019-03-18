// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// https://api.themoviedb.org/3/movie/550?api_key=b56980830d6b7535c3b79e1953f13f34

export const environment = {
  production: false,
  movies_url: 'https://api.themoviedb.org/3/',
  movies_key: 'b56980830d6b7535c3b79e1953f13f34',
  // firebase: {
  //   apiKey: 'AIzaSyCo5SxrosrtNqsvaHSzl3dnbwZtpeR4rQY',
  //   authDomain: 'movies-finder-77cb9.firebaseapp.com',
  //   databaseURL: 'https://movies-finder-77cb9.firebaseio.com',
  //   projectId: 'movies-finder-77cb9',
  //   storageBucket: 'movies-finder-77cb9.appspot.com',
  //   messagingSenderId: '401313975866'
  // }
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
