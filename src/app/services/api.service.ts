import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/common';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://jsonplaceholder.typicode.com'
  constructor(private httpService: HttpService, private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpService.get(`/users`).pipe(map(data => data as User[]))
  }
  getUserById(id: string): Observable<User> {
    return this.httpService.get(`/users/${id}`).pipe(map(data => data as User))
  }
  getUserByString(searchTerm: string): Observable<User[]> {
    return this.httpService.get(`/users?q=${searchTerm}`)
  }
  getAllPost(): Observable<Post[]> {
    return this.httpService.get(`/posts`, { observe: "response" }).pipe(map(data => data.slice(0, 5)))
  }
  addPost(post: Post) {
    return this.http.post(this.baseUrl + `/posts`, post)
  }

  apiurl = 'http://localhost:3000/users';
  getAll() {
    return this.httpService.get('/users')
  }

  getJsonData() {
    return this.http.get('assets/json/role.json')
  }
  isLoggedIn() {
    return sessionStorage.getItem('isLogin')
  }
}
