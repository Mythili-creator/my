import { Component, OnInit, Input } from "@angular/core";
import { FoodItem } from "../food-item";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";
import { UserAuthServiceService } from "src/app/services/user-auth-service.service";

@Component({
  selector: "app-food-menu",
  templateUrl: "./food-menu.component.html",
  styleUrls: ["./food-menu.component.css"]
})
export class FoodMenuComponent implements OnInit {
  role: string;
  @Input()
  public foodItems: any;

  constructor(
    public menuItemService: MenuItemServiceService,
    public userService: UserAuthServiceService
  ) {}

  ngOnInit() {
    //this.fooditems=this.service.getFoodItems();
    this.role = this.userService.getRole();
    console.log(this.role);
    this.menuItemService
      .getAllMenuItems()
      .subscribe(data => (this.foodItems = data));
    console.log(this.foodItems);
    //x.subscribe(data => this.fooditems=data);
  }
}
