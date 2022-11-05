import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/postModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post !:Post;
  // statique bouton***********
  buttonText!:string;

  constructor() { }

  ngOnInit(): void {

    this.buttonText='Like';
  }
  // method like*****************************
  liked(){
    if(this.buttonText=='DisLike'){
      this.post.like='';
      this.buttonText='Like';
    }else{
      this.post.like='Ok';
      this.buttonText='DisLike';

    }
  }

}
