import { Component, OnInit } from '@angular/core';
import {userList} from 'src/app/list/user';
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/service/authentication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
authenticated: boolean = true;
  loggedUser: userList;
  Invalid:boolean;
  constructor(private service: AuthenticationService, public router: Router ) {}

  ngOnInit() {
    this.service.Invalid=false;
    this.loggedUser = {
      userName: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword:""
    };
  }
  onLogin() {
    console.log(this.loggedUser.userName);
    this.service.authenticateUser(
      this.loggedUser.userName,
      this.loggedUser.password
    );
  }

}
