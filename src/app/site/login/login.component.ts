import { Component, OnInit } from "@angular/core";
import { UserList } from "../user-list";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/authentication-service.service";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  authenticated: boolean = true;
  loggedUser: UserList;
  constructor(private service: AuthServiceService, public router: Router,private  menuItemServiceService :  MenuItemServiceService ) {}

  ngOnInit() {
    console.log(this.service.Invalid)
    this.service.Invalid=false;
    this.loggedUser = {
      userName: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: ""
    };
  }
  onLogin() {
    console.log(this.loggedUser.userName);
    this.service.authenticateUser(
      this.loggedUser.userName,
      this.loggedUser.password
    );
    this.menuItemServiceService.ClickOnAdd=false;
  }
  
}
