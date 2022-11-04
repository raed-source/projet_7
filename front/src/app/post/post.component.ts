import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
title!:string;
content!:string;
imgUrl!:string;
like!:string;
dislike!:string
  constructor() { }

  ngOnInit(): void {
    this.title='post1';
    this.content='welcome';
    this.imgUrl='';
    this.like='ok';
    this.dislike=''
  }

}
