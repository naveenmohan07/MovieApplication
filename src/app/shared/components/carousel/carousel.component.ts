import { trigger, transition, animate, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('600ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('600ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  constructor(private upcomingMovies: MoviesService) { }
  moviesList: any;
  current = 0;
  /**
   * change upcoming movie posters
   */
  ngOnInit(): void {
    this.moviesList = this.upcomingMovies.upcomingMovies;
    setInterval(() => {
      this.current = ++this.current % this.moviesList.length;
    }, 10000);
  }

}
