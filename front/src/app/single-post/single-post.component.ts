import { Component, OnInit } from '@angular/core';
import { Post } from '../models/postModel';
import { PostService } from '../services/postService';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post !:Post;
  // statique bouton***********
  buttonText!:string;

  constructor(private postService:PostService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = +this.route.snapshot.params['id'];
    this.buttonText='Like';
    this.post = this.postService.getPostById(postId);
  }
  // method like*****************************
  liked(){
    if(this.buttonText==='DisLike'){
      this.postService.likedPostById(this.post.id, 'DisLike');
      this.buttonText='Like';
    }else{
      this.postService.likedPostById(this.post.id, 'Like');
      this.buttonText='DisLike';

    }
  }


}
