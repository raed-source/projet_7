import { Component, OnInit } from '@angular/core';
import { Post } from '../models/postModel';
import { PostService } from '../services/postService';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  myPosts!:Post[];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.myPosts=this.postService.myPosts;
        }

}