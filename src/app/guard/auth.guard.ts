import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { EditUserComponent } from '../component/edit-user/edit-user.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private service: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogedIn = this.service.isLogedIn
    if (isLogedIn) {

      return true
    } else {
      alert("You don't have permission to view this page. Please connect with admin.")
      return this.router.navigate(['/'])
    }
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogedIn = this.service.isLogedIn
    return this.canActivate(route, state)
  }
  canDeactivate(component: EditUserComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit();

  }

}
