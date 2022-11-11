import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../core/models/postModel';
import { PostService } from '../../../core/services/postService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post !:Post;
  // statique bouton***********
  buttonText!:string;

  constructor(private postService:PostService, private router:Router) { }

  ngOnInit(): void {

    this.buttonText='Like';
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
  onViewPost() {
    this.router.navigateByUrl(`posts/${this.post.id}`);
}
}
