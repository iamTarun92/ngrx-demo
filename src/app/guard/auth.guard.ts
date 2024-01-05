import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { EditUserComponent } from '../feature-module/user-list/edit-user/edit-user.component';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router, private apiService: ApiService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogedIn = sessionStorage.getItem('isLogin')
    const moduleData = route.data['module'];
    const actionData = route.data['action'];
    
    if (isLogedIn && this.authService.checkPermission(moduleData, actionData)) {
      return true
    } else {
      alert("Please connect with admin.")
      return this.router.navigate(['/'])
    }
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route, state)
  }
  canDeactivate(
    component: EditUserComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit();
  }

}
