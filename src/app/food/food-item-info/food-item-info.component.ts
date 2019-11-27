import { Component, OnInit, Input } from "@angular/core";
import { FoodItem } from "../food-item";
import { CartServiceService } from "src/app/shopping/cart-service.service";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/services/authentication-service.service";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";

@Component({
  selector: "app-food-item-info",
  templateUrl: "./food-item-info.component.html",
  styleUrls: ["./food-item-info.component.css"]
})
export class FoodItemInfoComponent implements OnInit {
  isAdmin: boolean = false;
  added: boolean = false;
  plsLogin: boolean = false;
  addedId: number = 0;
  ClickOnAdd: boolean = false;
  @Input() food: any;
  constructor(
    public service: MenuItemServiceService,
    public service2: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isAdmin = this.service2.isAdmin();
    if (this.isAdmin) {
      this.service.getAllMenuItems().subscribe(data => (this.food = data));
    }
  }
  addToCart(item: number) {
    if (this.service2.isLogged()) {
      this.service.addCartItem(this.service2.getUserName(), item).subscribe();
      this.added = true;
      this.addedId=item;
    } else {
      this.service.ClickOnAdd=true;
      this.router.navigateByUrl("/login");
    }
  }
}
