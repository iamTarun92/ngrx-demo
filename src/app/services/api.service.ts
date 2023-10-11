import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/common';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService, private http: HttpClient) { }

  getAllPost(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  addPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }
}
