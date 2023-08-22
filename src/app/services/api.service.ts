import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, map } from 'rxjs';
import { Users } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }

  getAllPost(): Observable<Users[]> {
    return this.httpService.get('users').pipe(map(data => data as Users[]))
  }
}
