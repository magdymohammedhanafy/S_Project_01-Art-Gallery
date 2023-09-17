import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IUserRegister } from 'src/app/Models/i-user-register';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  newUser: IUserRegister = {} as IUserRegister;
  registrationStatus: boolean = false;
  constructor(
    private UserAuthService: UserAuthService,
    private router: Router
  ) {}
  addNewUser() {
    this.UserAuthService.register(this.newUser).subscribe(
      (userData) => {
        console.log(userData);
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        // Handle error
        this.registrationStatus = true;
        console.log('An error occurred :', error);
      }
    );
  }
}
