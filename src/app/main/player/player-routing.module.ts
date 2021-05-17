import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  {
    path: 'playmovie/:name',
      component: PlayerComponent,
      data: {
        title: 'Player'
      }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
