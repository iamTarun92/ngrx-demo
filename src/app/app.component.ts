import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-demo';
  environment = environment.production
  isLogin = false
  constructor(private serviceApi: ApiService) {
    this.isLogin = sessionStorage.getItem('isLogin') ? true : false
  }
}
