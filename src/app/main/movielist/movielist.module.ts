import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovielistRoutingModule } from './movielist-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MovielistRoutingModule,
    SharedModule
  ]
})
export class MovielistModule { }
