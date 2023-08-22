import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
  user: any
  fatching = false
  status = 'No data found'

  constructor(private http: HttpClient) { }
  fetcDetails() {
    this.fatching = true
    this.status = 'Fatching...'
    this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(retry(2)).subscribe(
      (res) => {
        this.user = res
        this.fatching = false
        this.status = 'Data Fatched'
      },
      (err) => {
        this.fatching = false
        this.status = 'Found some problem with data fatching.'
      }
    )
  }
}
