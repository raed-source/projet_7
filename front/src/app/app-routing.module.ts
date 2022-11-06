import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {path:'post', component:PostComponent},
  {path:'',component:LandingPageComponent},
  {path:'create',component:NewPostComponent},
  {path:'posts',component:PostsListComponent},
  {path:'posts/:id',component:SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
