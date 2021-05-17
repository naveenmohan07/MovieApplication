import { Component, OnInit } from '@angular/core';
import { MovieList } from 'src/app/core/model/movie';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit {

  constructor(private movieService: MoviesService) { }
  movieList: MovieList[] = [];
  remove = true;
  /**
   * get my movie list
   */
  ngOnInit(): void {
    this.movieList = this.movieService.getMyList();
  }

}
