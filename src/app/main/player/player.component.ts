import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Playmovie } from 'src/app/core/model/movie';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private movieService: MoviesService, private activateRoute: ActivatedRoute, private tabTitle: Title) { }
  movieDetails: Playmovie[] = [];
  movie: any;
  name: any | null;
  /**
   * get single movie details
   */
  ngOnInit(): void {
    this.movieDetails = this.movieService.getMovieDetails();
    this.name = this.activateRoute.snapshot.params.name;
    this.tabTitle.setTitle('CinePlay | ' + this.name + ' - Play Movie');
    this.movie = this.movieDetails.filter((data: any) => {
      return data.name === this.name;
    });
    // this.movie = this.movieDetails.filter((data: any) => {
    //   return data.name === name;
    // }
  }
}


