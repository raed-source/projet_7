import { Injectable } from "@angular/core";
import { Post } from "../models/postModel";
@Injectable({
  providedIn:'root'
})
export class PostService{
  myPosts:Post[]=[
  {
    title:'post1',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dignissimos nesciunt nobis dolores, distinctio obcaecati!',
   imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
   like: '',
   dislike: '',
    dateCreate:new Date(),
    location:'Paris'
  },
   {
    title:'post2',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dignissimos nesciunt nobis dolores, distinctio obcaecati!',
   imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
   like: '',
   dislike: '',
    dateCreate:new Date(),
    location:'departemente'
  },
   {
    title:'post2',
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum dignissimos nesciunt nobis dolores, distinctio obcaecati!',
   imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
   like: '',
   dislike: '',
    dateCreate:new Date(),
    location:'departemente'
  }
]

}
