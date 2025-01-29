import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone:false,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('' ,[ Validators.required])
  })

  constructor(private userService: UserService, private router: Router) {}

  onRegister() {
    this.userService.register(this.registerForm.value).subscribe(val => {
      if (val) {
        this.router.navigate(['auth', 'login']);
      }
    })
  }
}
