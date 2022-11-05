import { Input } from "@angular/core";

export class Post {
  title !: String;
  content !: String;
  imgUrl !: String;
  like !: String;
  dislike !: String;
  dateCreate !: Date;
  location?:string;
}
