import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guard/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  exclusive = false
  isLogedIn = false
  constructor(private designService: DesignUtilityService, private authService: AuthService, private serviceApi: ApiService, private router: Router) {
    designService.exclusive.subscribe(res => {
      this.exclusive = res
    })
  }

  onLoginClick() {
    this.serviceApi.getJsonData().subscribe({
      next: (res) => {
        sessionStorage.setItem('permission', JSON.stringify(res))
        sessionStorage.setItem('isLogin', 'true')
        this.isLogedIn = sessionStorage.getItem('isLogin') ? true : false
        this.router.navigate(['promise'])
      }
    })
  }
  onLogoutClick() {
    sessionStorage.clear()
    this.isLogedIn = sessionStorage.getItem('isLogin') ? true : false
    this.router.navigate([''])
  }

}
