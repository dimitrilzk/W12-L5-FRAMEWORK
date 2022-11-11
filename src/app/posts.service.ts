import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  getPosts() {
    //return this.posts;
    return this.http.get<Post[]>(environment.urlAPI+"posts");
  }

  getPost(id: number) {
    //return this.posts.find((post) => post.id == id);
    return this.http.get<Post>(environment.urlAPI+"posts/"+id);
  }

  updatePost(data: Partial<Post>, id: number) {
    /* this.posts = this.posts.map((post) =>
      post.id == id ? { ...post, ...data } : post
    );
    return this.posts.find((post) => post.id == id) as Post; */
    console.log(data, id);
    return this.http.patch<Post>(environment.urlAPI+"posts/"+id, data);
  }
}
