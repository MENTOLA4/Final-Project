import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class CanAuthGuard implements CanLoad, CanActivate {

  constructor(private userService: UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.userService.isLoggedIn) {
      this.router.navigate(['home']);
      return false;
    }
    return !this.userService.isLoggedIn;
  }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log(this.userService.isLoggedIn)
    if (this.userService.isLoggedIn) {
      this.router.navigate(['home']);
      return false;
    }
    return !this.userService.isLoggedIn;
  }


}
