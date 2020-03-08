import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {FirstBlogComponent} from './first-blog/first-blog.component';
import {SecondBlogComponent} from './second-blog/second-blog.component';


const route: Routes = [
  {path: 'first', component: FirstBlogComponent},
  {path: 'second', component: SecondBlogComponent},
  { path: '', redirectTo: '/first', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(route),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
