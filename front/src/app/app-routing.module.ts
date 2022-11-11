import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './posts/components/post/post.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { PostsListComponent } from './posts/components/posts-list/posts-list.component';
import { SinglePostComponent } from './posts/components/single-post/single-post.component';
import { NewPostComponent } from './posts/components/new-post/new-post.component';

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
