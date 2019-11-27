import { FoodItem } from "src/app/food/food-item";

export interface CartItem {
  foodItems: FoodItem[];
  total: number;
}
