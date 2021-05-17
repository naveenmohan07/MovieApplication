import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MylistComponent } from './mylist.component';

const routes: Routes = [
  {
    path: 'mylist',
    component: MylistComponent,
    data: {
      title: 'MyList'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MylistRoutingModule { }
