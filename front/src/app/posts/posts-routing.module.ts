import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'create', component: NewPostComponent ,canActivate:[AuthGuard]},
  { path: ':id', component: SinglePostComponent,canActivate:[AuthGuard] },
  { path: '', component: PostsListComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
