import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
  path: 'allmovie',
  loadChildren: () => import('./main/movielist/movielist.module').then((m) => m.MovielistModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./main/mylist/mylist.module').then((m) => m.MylistModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./main/player/player.module').then((m) => m.PlayerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
