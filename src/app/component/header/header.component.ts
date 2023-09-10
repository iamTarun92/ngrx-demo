import { Component } from '@angular/core';
import { AuthService } from 'src/app/guard/auth.service';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  exclusive = false
  isLogedIn = false
  constructor(private designService: DesignUtilityService, private authService: AuthService) {
    designService.exclusive.subscribe(res => {
      this.exclusive = res
    })
  }

  onLoginClick() {
    this.authService.login()
    this.isLogedIn = this.authService.isLogedIn
    // console.log(this.authService.isLogedIn);
  }
  onLogoutClick() {
    this.authService.logout()
    this.isLogedIn = this.authService.isLogedIn
    // console.log(this.authService.isLogedIn);
  }

}
