import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ICategory } from 'src/app/Models/i-category';
import { CategoryService } from 'src/app/services/category.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icon = faCartShopping;
  loginStatus: boolean = false;
  categList: ICategory[] = [];
  constructor(
    private CategoryService: CategoryService,
    private UserAuthService: UserAuthService,
    private ChangeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.CategoryService.getAllCategories().subscribe((categories) => {
      this.categList = categories.data;
    });

    this.loginStatus = this.UserAuthService.isUserLogged();
  }
  ngOnInit(): void {}

  logOut() {
    alert('you sure that you want to log out');
    this.UserAuthService.logOut();
    window.location.reload();
  }

  checkLoginStatus() {
    if (!localStorage.getItem('token')) {
      alert('you should log in to see yor cart');
      this.router.navigate(['auth/login']);
    } else {
      this.router.navigate(['/cart']);
    }
  }
}
