import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-recent-movies',
  templateUrl: './recent-movies.component.html',
  styleUrls: ['./recent-movies.component.scss']
})
export class RecentMoviesComponent implements OnInit {
  showMovies = 3;
  clicked: any;
  trending: any;
  page = 1;
  count = 0;
  pageSize = 4;
  res: any;
  movieList: any;
  constructor(private movieService: MoviesService) { }


  /**
   * sort date in decending order
   * @returns decending dates
   */
  sort(): any {
    return this.movieList.sort((a: any, b: any) => {
      return (new Date(b.releasedon) as any) - (new Date(a.releasedon) as any);
    });
  }
  /**
   * set current page number
   * @param event current page
   */
  handlePageChange(event: any): void {
    this.page = event;
  }
  ngOnInit(): void {
    this.movieList = this.movieService.getrecentMovies();
    this.trending = this.movieList.length;
    this.sort();
  }

}
