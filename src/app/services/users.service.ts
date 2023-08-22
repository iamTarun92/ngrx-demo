import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('../../../assets/json/users.json')
  }
  getAllData(searchTerm: string): Observable<Users[]> {
    return this.http.get<Users[]>(`https://jsonplaceholder.typicode.com/users?q=${searchTerm}`)
  }
  fn(val: Users): Users {
    return val
  }
}
