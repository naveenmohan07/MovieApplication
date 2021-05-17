import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MovielistComponent } from './movielist/movielist.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RecentMoviesComponent } from './recent-movies/recent-movies.component';
import { PlayerComponent } from './player/player.component';
import { MylistComponent } from './mylist/mylist.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DashboardComponent,
    MovielistComponent,
    RecentMoviesComponent,
    PlayerComponent,
    MylistComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    NgxPaginationModule
  ],
  exports: [DashboardComponent]
})
export class MainModule { }
