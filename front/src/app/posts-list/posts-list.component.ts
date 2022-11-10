import { Component, OnInit } from '@angular/core';
import { Post } from '../models/postModel';
import { PostService } from '../services/postService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  // myPosts=Post[]; remplacé par observable
  myPosts$!:Observable<Post[]>; // un observable emet un tableau de posts ou lieu d'une variable statique
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    // this.myPosts=this.postService.myPosts;
    this.myPosts$=this.postService.getAllPosts();
        }

}
