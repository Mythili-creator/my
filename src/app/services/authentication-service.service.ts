import { Injectable } from "@angular/core";
import { CartServiceService } from "../shopping/cart-service.service";
import { UserAuthServiceService } from "./user-auth-service.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  loggedInUser: boolean;
  adminFlag: boolean;
  loggedUserName: string;
  flag: boolean;
  Invalid: boolean = false;

  error: string;
  constructor(
    private userService: UserAuthServiceService,
    public router: Router
  ) { }
  getUserName() {
    return this.loggedUserName;
  }
  logOut() {
    this.loggedInUser = false;
    this.adminFlag = false;
    //this.service1.emptyCart();
    this.loggedUserName = "";
    this.userService.setToken("");
  }
  isLogged() {
    return this.loggedInUser;
  }

  authenticateUser(userName: string, password: string) {
    console.log("Authentication called");
    this.userService.authenticate(userName, password).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.userService.setRole(data.role);
        this.loggedUserName = userName;
        let x = data.role;
        if (x == "ROLE_ADMIN") {
          this.adminFlag = true;
        } else {

          this.adminFlag = false;

        }
        this.loggedInUser = true;
        this.router.navigateByUrl("/food-search");
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
  isAdmin() {
    return this.adminFlag;
  }
}
