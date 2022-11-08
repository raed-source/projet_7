import { Injectable } from "@angular/core";
import { Post } from "../models/postModel";
@Injectable({
  providedIn:'root'
})
export class PostService{
  myPosts:Post[]=[
  {
    id:1,
    title:'post1',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dignissimos nesciunt nobis dolores, distinctio obcaecati!',
   imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
   like: '',
   dislike: '',
    dateCreate:new Date(),
    location:'Paris'
  },
   {
    id: 2,
    title:'post2',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dignissimos nesciunt nobis dolores, distinctio obcaecati!',
   imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
   like: '',
   dislike: '',
    dateCreate:new Date(),
    location:'departemente'
  },
   {
    id: 3,
    title:'post2',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dignissimos nesciunt nobis dolores, distinctio obcaecati!',
   imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
   like: '',
   dislike: '',
    dateCreate:new Date(),
    location:'departemente'
  }
]
getAllPosts(): Post[] {
  return this.myPosts;
}
likedPostById(id: number, likeType:string): void {
  const post = this.getPostById(id);
 likeType==='Like'?post.like='Ok':post.like='';
}
disLikedById(id: number): void {
  const post = this.myPosts.find(post => post.id === id);
  if (post) {
      post.like='';
  } else {
      throw new Error('Post not found!');
  }
}
getPostById(id: number): Post {
  const post = this.myPosts.find(post => post.id === id);
  if (!post) {
      throw new Error('Post not found!');
  } else {
      return post;
  }
}
addPost(formValue:{ title: string, content: string, imgUrl: string, location?: string }):void{
const post:Post={
  ...formValue,
  dateCreate:new Date,
  like:'0',
  dislike:'0',
  id:this.myPosts[this.myPosts.length-1].id+1
}
this.myPosts.push(post);
}
}
