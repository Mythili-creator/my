import { Injectable } from "@angular/core";
import { CartItem } from "./shopping-cart/cart-item";
import { FoodItem } from "../food/food-item";

@Injectable({
  providedIn: "root"
})
export class CartServiceService {
  cart: CartItem = {
    foodItems: [],
    total: 0
  };

  constructor() {}

  getCart() {
    return this.cart;
  }

  emptyCart() {
    this.cart = { foodItems: [], total: 0 };
  }

  addToCart(cartItem: FoodItem) {
    this.cart.foodItems.push(cartItem);
    this.totalCalcalculate(cartItem.price);
    console.log(this.cart);
  }

  totalCalcalculate(total: any) {
    let x = parseInt(total);
    this.cart.total = this.cart.total + x;
  }

  removeCart(id: number) {
    const index = this.cart.foodItems.findIndex(food => food.id == id);
    const itemToRemove = this.cart.foodItems.splice(index, 1)[0];
    this.cart.total -= itemToRemove.price;
  }
}
