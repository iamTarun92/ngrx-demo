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

  getAllPost(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { observe: "response" })
  }
  addPost(post: Post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post)
  }

  apiurl = 'http://localhost:3000/users';
  getAll() {
    return this.http.get(this.apiurl)
  }
  getJsonData() {
    return this.http.get('assets/json/role.json')
  }
  isLoggedIn() {
    return sessionStorage.getItem('isLogin')
  }
}
