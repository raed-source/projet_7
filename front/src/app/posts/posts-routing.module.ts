import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
  { path: 'create', component: NewPostComponent },
  { path: ':id', component: SinglePostComponent },
  { path: '', component: PostsListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
