import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/Models/i-user-login';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: IUserLogin = {} as IUserLogin;
  loginStatus: boolean = false;
  constructor(
    private UserAuthService: UserAuthService,
    private router: Router,
    private location: Location
  ) {}

  login() {
    this.UserAuthService.login(this.user).subscribe(
      (userData) => {
        localStorage.setItem('token', userData.data.token);
        localStorage.setItem('cartId', userData.data.user_data.cart_id);
        this.loginStatus = false;
        this.router.navigate(['/']);
        alert('welcome to gallery app');
        // window.location.reload();
      },
      (error) => {
        // Handle error
        this.loginStatus = true;
        console.log(this.loginStatus);
        console.log('An error occurred :', error);
      }
    );
  }
}
