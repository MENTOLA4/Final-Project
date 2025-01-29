import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn: boolean = false;
  user: any;
  registeredUsers: any[] = [];

  constructor() { }

  logIn(user: {username: string, password: string}) {
    const loginUser = this.registeredUsers.find(val => val.username === user.username && val.password === user.password);
    if (loginUser) {
      this.isLoggedIn = true;
      return of(true);
    }
    return of(false);
  }

  logOut() {
    this.isLoggedIn = false;
    return of(true);
  }

  register(registerUser: {username: string, password: string, email: string}) {
    this.registeredUsers.push(registerUser);
    return of(true);
  }

}
