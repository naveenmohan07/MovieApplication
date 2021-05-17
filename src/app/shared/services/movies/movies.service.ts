import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from 'src/app/core/model/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  myList: MovieList[] = [];

  upcomingMovies = [{
    image: '../../../assets/upcoming_1.jpg'
  },
    {
      image: '../../../assets/upcoming_2.jpg'
    },
    {
      image: '../../../assets/upcoming_3.jpg'
  }];
  movieList = [{
    name: 'A Mock',
    image: '../../../../assets/a.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/24/2020'
  },
  {
    name: 'B Mock',
    image: '../../../../assets/fast.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/22/2020'
  },
  {
    name: 'C Mock',
    image: '../../../../assets/fast1.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/20/2020'
  },
  {
    name: 'D Mock',
    image: '../../../../assets/blade.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/27/2020'
  },
  {
    name: 'E mock',
    image: '../../../../assets/daredevil.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/30/2020'
  },
  {
    name: 'F Mock',
    image: '../../../../assets/black.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '05/12/2020'
  },
  {
    name: 'G Mock',
    image: '../../../../assets/b.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/20/2020'
  },
  {
    name: 'H Mock',
    image: '../../../../assets/avenger.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/27/2020'
  }
  ];
  movieDetails = [{
    name: 'A Mock',
    src: '../../../assets/sample.mp4',
    genre: ['Action', 'Comedy'],
    cast: ['Actor1 as A', 'Actor2 as B', 'Actor3 as C'],
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  }, {
    name: 'B Mock',
    src: '../../../assets/sample.mp4',
    genre: ['Action', 'Comedy'],
    cast: ['Actor1 as A', 'Actor2 as B', 'Actor3 as C'],
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  }, {
    name: 'C Mock',
    src: '../../../assets/sample.mp4',
    genre: ['Action', 'Comedy'],
    cast: ['Actor1 as A', 'Actor2 as B', 'Actor3 as C'],
    details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      name: 'D Mock',
      src: '../../../assets/sample.mp4',
      genre: ['Action', 'Comedy'],
      cast: ['Actor1 as A', 'Actor2 as B', 'Actor3 as C'],
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      name: 'E Mock',
      src: '../../../assets/sample.mp4',
      genre: ['Action', 'Comedy'],
      cast: ['Actor1 as A', 'Actor2 as B', 'Actor3 as C'],
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      name: 'F Mock',
      src: '../../../assets/sample.mp4',
      genre: ['Action', 'Comedy'],
      cast: ['Actor1 as A', 'Actor2 as B', 'Actor3 as C'],
      details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      }];
  recentMovies = [{
    name: 'A Mock',
    image: '../../../../assets/fast1.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/24/2020'
  },
  {
    name: 'B Mock',
    image: '../../../../assets/fast.jpg',
    genre: ['Action'],
    language: 'English',
    releasedon: '03/22/2020'
  },
  {
    name: 'C Mock',
    image: '../../../../assets/a.jpg',
    genre: ['Action', 'Comedy', 'Adventure'],
    language: 'English',
    releasedon: '03/20/2020'
  },
  {
    name: 'D Mock',
    image: '../../../../assets/b.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/27/2020'
  },
  {
    name: 'E mock',
    image: '../../../../assets/avenger.jpg',
    genre: ['Action', 'Comedy', 'Love'],
    language: 'English',
    releasedon: '03/30/2020'
  },
  {
    name: 'F Mock',
    image: '../../../../assets/daredevil.jpg',
    genre: ['Action', 'Comedy', 'Politics'],
    language: 'English',
    releasedon: '05/12/2020'
  },
  {
    name: 'G Mock',
    image: '../../../../assets/black.jpg',
    genre: ['Action', 'Comedy', 'Love'],
    language: 'English',
    releasedon: '03/20/2020'
  },
  {
    name: 'H Mock',
    image: '../../../../assets/blade.jpg',
    genre: ['Action', 'Comedy', 'Family'],
    language: 'English',
    releasedon: '03/27/2020'
  }];
  constructor() { }

  // getMovies(page: number): Observable<any> {
  //   return this.http.get(`https://ott-details.p.rapidapi.com/getnew?region=US&page=${page}`);
  // }
  /**
   * get all upcoming movie
   * @returns upcoming movie list
   */
  getUpcomingMovies(): any {
    return this.upcomingMovies;
  }
  /**
   * get all movies
   * @returns movie list
   */
  getAllMovies(): any {
    return this.movieList;
  }
  /**
   * get single movie details
   * @returns return detail
   */
  getMovieDetails(): any{
    return this.movieDetails;
  }
  /**
   * add single movie to list
   * @param newMovie single movie to add
   */
  addToMyList(newMovie: any): void {
    this.myList.push(newMovie);
  }
  /**
   * get my movie list
   * @returns movie list
   */
  getMyList(): any{
    return this.myList;
  }

  getrecentMovies(): any{
    return this.recentMovies;
  }
}
