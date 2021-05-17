import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoaderComponent } from './components/loader/loader.component';
// import { PlaymovieComponent } from './components/playmovie/playmovie.component';
import { AlertComponent } from './components/alert/alert.component';

const componentList = [
  HeaderComponent,
  MovieTileComponent,
  CarouselComponent,
  LoaderComponent,
  // PlaymovieComponent,
  AlertComponent,
];
@NgModule({
  declarations: componentList,
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ],
  exports: componentList,
  providers: []
})
export class SharedModule { }
