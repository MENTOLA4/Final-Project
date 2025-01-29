import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:false,
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private userService: UserService, private router: Router){}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onLogIn() {
    this.userService.logIn(this.loginForm.value).subscribe(val => {
      if (val) {
        this.router.navigate(['home']);
      }
    })
  }
}
