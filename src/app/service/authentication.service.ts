import { Injectable } from '@angular/core';
import { UserService } from "./user.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedInUser: boolean;
  loggedUserName: string;
  flag: boolean;
  Invalid: boolean = false;

  error: string;
  constructor(
    private userService: UserService,
    public router: Router
  ) { }
  getUserName() {
    return this.loggedUserName;
  }
  logOut() {
    this.loggedInUser = false;
    this.loggedUserName = "";
    this.userService.setToken("");
  }
  isLogged() {
    return this.loggedInUser;
  }

  authenticateUser(userName: string, password: string) {
    this.userService.authenticate(userName, password).subscribe(
      data => {
         this.userService.setToken(data.token);
        this.userService.setRole(data.role);
        this.loggedUserName = userName;
        this.router.navigateByUrl("/display");
      },
      error => {
        console.log(error);
        if (error.status == 401) {
          this.error = "Invalid user ";
          this.Invalid = true;
          console.log(this.error);
          this.router.navigateByUrl("/login");
        }
      }
    );
  }
}
