import { Component, OnInit } from "@angular/core";
import { UserList } from "../user-list";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: UserList = {
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: ""
  };
  userForm: FormGroup;
  passwordMatch: Boolean;


  constructor(private service: MenuItemServiceService, public router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Zs]*$")
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Zs]*$")
      ]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
    this.userForm
      .get("userName")
      .valueChanges.subscribe(value => (this.user.userName = value));
    this.userForm
      .get("firstName")
      .valueChanges.subscribe(value => (this.user.firstName = value));
    this.userForm
      .get("lastName")
      .valueChanges.subscribe(value => (this.user.lastName = value));
    this.userForm
      .get("password")
      .valueChanges.subscribe(value => (this.user.password = value));
    this.userForm
      .get("confirmPassword")
      .valueChanges.subscribe(value => (this.user.confirmPassword = value));
  }

  onSubmit() {
    console.log(this.user);
    if (this.user.confirmPassword == this.user.password) {
    this.service.addUser(this.user).subscribe();
    this.router.navigateByUrl("/login");
    } else {
      this.passwordMatch = true;
    }
  }

  get userName() {
    return this.userForm.get("userName");
  }
  get firstName() {
    return this.userForm.get("firstName");
  }
  get lastName() {
    return this.userForm.get("lastName");
  }
  get password() {
    return this.userForm.get("password");
  }
  get confirmPassword() {
    return this.userForm.get("confirmPassword");
  }
}
