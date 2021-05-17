import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist.component';

const routes: Routes = [
  {
    path: 'listmovies',
      component: MovielistComponent,
      data: {
        title: 'MovieList'
      }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovielistRoutingModule { }
