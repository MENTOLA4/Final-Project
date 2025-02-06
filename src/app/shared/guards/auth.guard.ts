import { Inject, Injectable } from '@angular/core';
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router, private userService:UserService ) { }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log(this.userService.isLoggedIn)
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['auth', 'login']);
      return false;
    }
    return this.userService.isLoggedIn;
  }
}
