import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/core/model/movie';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  throttle = 50;
  scrollDistance = 1;
  direction = '';
  page = 1;
  toTop = false;
  dascending = false;
  nascending = false;
  constructor(private movieService: MoviesService) { }
  movieList: MovieList[] = [];
  movieTemp: any;
  /**
   * infinte Scroll implementation on scroll down
   */
  onScrollDown(): any {
    this.page++;
    this.direction = 'down';
    this.movieTemp = this.movieService.getAllMovies();
    this.movieList = this.movieList.concat(this.movieTemp);
  }
  /**
   * Get all movies from api
   * @returns movielist array
   */
  getMovies(): any{
    // return this.movieService.getMovies(this.page).subscribe(data => {
    //   this.movieList = data.results;
    // });
    return this.movieList = this.movieService.getAllMovies();
  }
  /**
   * sort date in decending order
   * @returns decending dates
   */
  sort(): any {
    this.dascending = ! this.dascending;
    if (this.dascending === true) {
      console.log(this.movieList);
      return this.movieList.sort((a: any, b: any): any => {
        return (new Date(a.releasedon) as any) - (new Date(b.releasedon) as any);
      });
    }
    else {
      console.log(this.movieList);
      return this.movieList.sort((a: any, b: any): any => {
        return (new Date(b.releasedon) as any) - (new Date(a.releasedon) as any);
      });
    }
   }
  sortname(): any {
    this.nascending = !this.nascending;
    if (this.nascending !== true) {
      this.movieList.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    else {
      this.movieList.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    console.log(this.movieList);
    return this.movieList;
  }
  ngOnInit(): void {
    this.getMovies();
  }

}


