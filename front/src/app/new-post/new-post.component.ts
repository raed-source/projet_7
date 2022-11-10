import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { Post } from '../models/postModel';
import { PostService } from '../services/postService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
postForm!:FormGroup;
postPreview$!: Observable<Post>;
urlRegex!: RegExp;
  constructor(private formBuilder:FormBuilder, private postService:PostService,private router:Router) { }

  ngOnInit(): void {
    this.urlRegex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.postForm=this.formBuilder.group({
      title : [null,Validators.required],
      content : [null,Validators.required],
      imgUrl : [null,[Validators.required, Validators.pattern(this.urlRegex)]],
      location:[null],
    }, {
      updateOn: 'blur'
  });
    this.postPreview$=this.postForm.valueChanges.pipe(map(formValue=>({
      ...formValue,
      createDate:new Date(),
      id:0,
      post:0
    })))
  }
onSubmitForm():void{
  console.log(this.postForm.value);
  // this.postService.addPost(this.postForm.value);
  // this.router.navigateByUrl('/posts');
  this.postService.addPost(this.postForm.value).pipe(
    tap(()=>this.router.navigateByUrl('/posts'))
  ).subscribe();
}
}
