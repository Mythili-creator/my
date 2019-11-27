import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodItem } from "../food-item";
import { MenuItemServiceService } from "src/app/services/menu-item-service.service";
import { AuthServiceService } from "src/app/services/authentication-service.service";
import { formatDate } from '@angular/common';

@Component({
  selector: "app-food-item-edit",
  templateUrl: "./food-item-edit.component.html",
  styleUrls: ["./food-item-edit.component.css"]
})
export class FoodItemEditComponent implements OnInit {
  constructor(
    private menuService: MenuItemServiceService,
    private service2: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  editForm: FormGroup;
  foodId = this.route.snapshot.paramMap.get("id");
  cartItems: any;
  newCartItem: FoodItem = {
    id: 0,
    name: "",
    price: 0,
    isAvailable: false,
    dateOfLaunch: new Date(),
    category: "",
    freeDelivery: false,
    url: ""
  };
  editted: boolean = false;
  userName: string = this.service2.getUserName();
  added: boolean = false;

  ngOnInit() {
    let fid = Number(this.foodId);
    console.log(this.foodId);
    this.menuService.getMenuItem(fid).subscribe(data => {
      console.log(data);
      this.cartItems = data;
      if (fid > 0) {
        this.editForm = new FormGroup({
          'name': new FormControl(this.cartItems.name, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]),
          'price': new FormControl(this.cartItems.price, [
            Validators.required,
            Validators.pattern("^[0-9]*$")
          ]),
          'isAvailable': new FormControl(this.cartItems.isAvailable, [
            Validators.required
          ]),
          'url': new FormControl(this.cartItems.url, [Validators.required]),
          'dateOfLaunch': new FormControl(formatDate(this.cartItems.dateOfLaunch, 'yyyy-MM-dd', 'en'), [
            Validators.required
          ]),
          'category': new FormControl(this.cartItems.category, [
            Validators.required
          ]),
          'freeDelivery': new FormControl(this.cartItems.freeDelivery, []),
          'id': new FormControl(this.cartItems.id, [])
        });
      } else {
        this.editForm = new FormGroup({
          name: new FormControl("", [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]),
          price: new FormControl("", [
            Validators.required,
            Validators.pattern("^[0-9]*$")
          ]),
          isAvailable: new FormControl("", [Validators.required]),
          url: new FormControl("", [Validators.required]),
          dateOfLaunch: new FormControl("", [Validators.required]),
          category: new FormControl("", [Validators.required]),
          freeDelivery: new FormControl("", []),
          id: new FormControl("", [])
        });
      }
      this.editForm
        .get("id")
        .valueChanges.subscribe(value => (this.newCartItem.id = value));
      this.editForm
        .get("name")
        .valueChanges.subscribe(value => (this.newCartItem.name = value));
      this.editForm
        .get("price")
        .valueChanges.subscribe(value => (this.newCartItem.price = value));
      this.editForm
        .get("isAvailable")
        .valueChanges.subscribe(
          value => (this.newCartItem.isAvailable = value)
        );
      this.editForm
        .get("url")
        .valueChanges.subscribe(value => (this.newCartItem.url = value));
      this.editForm
        .get("category")
        .valueChanges.subscribe(value => (this.newCartItem.category = value));
      this.editForm
        .get("freeDelivery")
        .valueChanges.subscribe(
          value => (this.newCartItem.freeDelivery = value)
        );
      this.editForm
        .get("dateOfLaunch")
        .valueChanges.subscribe(
          value => (this.newCartItem.dateOfLaunch = value)
        );
      this.editForm
        .get("id")
        .valueChanges.subscribe(value => (this.cartItems.id = value));
      this.editForm
        .get("name")
        .valueChanges.subscribe(value => (this.cartItems.name = value));
      this.editForm
        .get("price")
        .valueChanges.subscribe(value => (this.cartItems.price = value));
      this.editForm
        .get("isAvailable")
        .valueChanges.subscribe(value => (this.cartItems.isAvailable = value));
      this.editForm
        .get("url")
        .valueChanges.subscribe(value => (this.cartItems.url = value));
      this.editForm
        .get("category")
        .valueChanges.subscribe(value => (this.cartItems.category = value));
      this.editForm
        .get("freeDelivery")
        .valueChanges.subscribe(value => (this.cartItems.freeDelivery = value));
      this.editForm
        .get("dateOfLaunch")
        .valueChanges.subscribe(value => (this.cartItems.dateOfLaunch = value));
    });
  }

  logOut() {
    this.service2.logOut();
    this.router.navigateByUrl("/login");
  }
  onSubmit() {
    this.menuService.updateFoodItem(this.cartItems).subscribe();
    this.editted = true;
  }

  get id() {
    return this.editForm.get("id");
  }
  get name() {
    return this.editForm.get("name");
  }
  get price() {
    return this.editForm.get("price");
  }
  get isAvailable() {
    return this.editForm.get("isAvailable");
  }
  get url() {
    return this.editForm.get("url");
  }
  get category() {
    return this.editForm.get("category");
  }
  get freeDelivery() {
    return this.editForm.get("freeDelivery");
  }
  get dateOfLaunch() {
    return this.editForm.get("dateOfLaunch");
  }
}
