import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogedIn = false
  login() {
    this.isLogedIn = true
  }
  logout() {
    this.isLogedIn = false
  }

}
