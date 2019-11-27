import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthServiceService } from "./authentication-service.service";
import { UserAuthServiceService } from "./user-auth-service.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { FoodItem } from "../food/food-item";
import { CartItem } from "../shopping/shopping-cart/cart-item";
import { UserList } from "../site/user-list";

@Injectable({
  providedIn: "root"
})
export class MenuItemServiceService {
  food: FoodItem[] = [];
  cart: any;
  ClickOnAdd: boolean= false;

  constructor(
    private http: HttpClient,
    public service: UserAuthServiceService,
    public authService: AuthServiceService
  ) {}

  private baseUrl = environment.baseUrl;

  getAllMenuItems(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.get(this.baseUrl + "/menu-items", httpOptions);
  }

  getMenuItem(id: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/menu-items/${id}`, httpOptions);
  }

  addUser(newuser: UserList) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("Adduser" + newuser);
    return this.http.post(`${this.baseUrl}/users`, newuser, httpOptions);
  }

  updateFoodItem(editFood: any) {
    console.log(editFood);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.put(`${this.baseUrl}/menu-items`, editFood, httpOptions);
  }

  addCartItem(id: string, cartItem: number) {
    console.log(cartItem);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("addCartItem");
    return this.http.post<void>(
      this.baseUrl + "/carts/" + id + "/" + cartItem,
      cartItem,
      httpOptions
    );
  }

  getCart(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.get(`${this.baseUrl}/carts/` + id, httpOptions);
  }

  removeCart(userId: string, id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.delete<void>(
      this.baseUrl + "/carts/" + userId + "/" + id,
      httpOptions
    );
  }

  getFoodItems1(searchText: string) {
    if (this.authService.isAdmin()) {
      if (searchText == "") {
        this.getAllMenuItems().subscribe(data => (this.food = data));
        return this.food;
      } else {
        this.getAllMenuItems().subscribe(data => (this.food = data));
        let filteredFood = this.food.filter(
          x => x.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
        return filteredFood;
      }
    } else {
      if (searchText == "") {
        this.getAllMenuItems().subscribe(data => (this.food = data));
        return this.food;
      } else {
        this.getAllMenuItems().subscribe(data => (this.food = data));
        let filteredFood = this.food.filter(
          x => x.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
        );
        return filteredFood;
      }
    }
  }
}
