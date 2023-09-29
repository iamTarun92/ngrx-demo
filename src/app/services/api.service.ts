import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import { Post } from '../store/posts/posts.state';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService, private http: HttpClient) { }

  getAllPost(): Observable<Post[]> {
    return this.httpService.get('posts')
  }
  addPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }
}
