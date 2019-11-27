import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FoodItem } from "../food-item";
import { FoodMenuComponent } from "../food-menu/food-menu.component";
import { AuthServiceService } from "src/app/services/authentication-service.service";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";

@Component({
  selector: "app-food-search",
  templateUrl: "./food-search.component.html",
  styleUrls: ["./food-search.component.css"]
})
export class FoodSearchComponent implements OnInit {
  searchText: string;
  food: FoodItem[];
  isLogged: boolean;
  userName: string = this.service2.getUserName();
  isCustomer: boolean = this.service2.isAdmin();

  constructor(
    private service2: AuthServiceService,
    private router: Router,
    public menuService: MenuItemServiceService
  ) {}

  ngOnInit() {
    this.isLogged = this.service2.isLogged();
    this.userName = this.service2.getUserName();
  }
  search() {
    this.food = this.menuService.getFoodItems1(this.searchText);
  }
  logOut() {
    this.service2.logOut();
    this.userName = this.service2.getUserName();
    this.router.navigateByUrl("/login");
  }
}
