import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MoviesService } from '../../services/movies/movies.service';
@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {

  @Input() movie: any;
  @Input() remove: any;
  msg: any;
  List: any;
  movieList: any;
  constructor(private movieService: MoviesService,
              private router: Router) { }
  /**
   * Adding particular movie to mylist
   * @param newMovie single movie
   */
  addtoMyList(newMovie: any): any {
    this.movieService.addToMyList(newMovie);
    this.msg = 'Movie added to your List!!';
    setTimeout(() => {
      this.msg = false;
    }, 1000);
  }
  /**
   * remove movie from added list
   * @param newMovie particular movie
   * @returns deleted movie list
   */
  removeFromMyList(newMovie: any): any {
    this.List = this.movieService.getMyList();
    const requiredIndex = this.List.findIndex((each: any) => {
        return each.name === newMovie.name;
      });
    return !!this.List.splice(requiredIndex, 1);
  }
  routePlayer(movieName: any): void {
    this.router.navigate(['/player/playmovie', movieName]);
  }
  ngOnInit(): void {
  }

}
