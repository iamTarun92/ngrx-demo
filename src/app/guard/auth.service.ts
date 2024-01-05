import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  permissions:any ={}
  constructor(private serviceApi: ApiService) {
    serviceApi.getJsonData().subscribe({
      next: (res) => this.permissions = res
    })
  }
  isLogedIn = false
  login() {
    this.isLogedIn = true
  }
  logout() {
    this.isLogedIn = false
  }
  isAuthenticated() {
    return this.isLogedIn
  }
  checkPermission(module: string, action: string): boolean {
    return this.permissions[module] && this.permissions[module][action] === 1;
  }

}
