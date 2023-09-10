import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<Users[]> {
    // return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
    return this.http.get<Users[]>('../../../assets/json/users.json')
  }
  getUserById(id: string): Observable<Users[]> {
    return this.http.get<Users[]>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  getAllData(searchTerm: string): Observable<Users[]> {
    return this.http.get<Users[]>(`https://jsonplaceholder.typicode.com/users?q=${searchTerm}`)
  }
}
