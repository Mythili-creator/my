import { Injectable } from '@angular/core';
import {userList} from "src/app/list/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {UserService} from "src/app/service/user.service";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,
    public service: UserService,) { }
   addUser(newuser: userList) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("Adduser" + newuser);
    return this.http.post(`${this.baseUrl}/users`, newuser, httpOptions);
  }
}
