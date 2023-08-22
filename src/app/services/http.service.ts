import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://jsonplaceholder.typicode.com/'
  AUTH_TOKEN = 'auth_token'

  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    const data = { params, headers: this.getAuthHeader() }
    return this.httpClient.get(`${this.baseUrl}${url}`, data).pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(res: any) {
    const error = res.error
    const keys = Object.keys(error)
    const key = keys[0]
    let msg = error[key]
    return throwError({ messages: msg, error })
  }

  private getAuthHeader(): { [header: string]: string | string[] } {
    return {
      Authorization: `Bearer${localStorage.getItem(this.AUTH_TOKEN)}`
    }
  }
}
