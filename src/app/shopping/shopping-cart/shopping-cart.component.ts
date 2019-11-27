import { Component, OnInit } from "@angular/core";
import { CartServiceService as CartService } from "../cart-service.service";
import { FoodItem } from "src/app/food/food-item";
import { CartItem } from "./cart-item";
import { Router } from "@angular/router";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";
import { AuthServiceService } from "src/app/services/authentication-service.service";

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"]
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private service2: AuthServiceService,
    private router: Router,
    public menuService: MenuItemServiceService
  ) {}
  displayCart: any;
  isEmpty: boolean;
  // dcart:CartItem={
  //   fooditems:[],
  //   total:0
  // };

  isCustomer: boolean = this.service2.isAdmin();
  userName: string = this.service2.getUserName();
  isRemoved: boolean;

  ngOnInit() {
    this.isRemoved = false;
    this.menuService.getCart(this.service2.getUserName()).subscribe(data => {
      console.log(data);
      this.displayCart = data;
      if (data == null || this.displayCart.total == 0) this.isEmpty = true;
      else this.isEmpty = false;
    });
  }

  logOut() {
    this.service2.logOut();
    this.userName = this.service2.getUserName();
    this.router.navigateByUrl("/login");
  }

  removeCart(id: number) {
    this.menuService.removeCart(this.service2.getUserName(), id).subscribe(() =>
      this.menuService.getCart(this.service2.getUserName()).subscribe(data => {
        console.log(data);
        this.displayCart = data;
        if (this.displayCart.total == 0) {
          this.isEmpty = true;
        } else this.isEmpty = false;
      })
    );
    this.isRemoved = true;
  }
}
