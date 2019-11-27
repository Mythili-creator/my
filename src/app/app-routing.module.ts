import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FoodItemEditComponent } from "./food/food-item-edit/food-item-edit.component";
import { FoodItemInfoComponent } from "./food/food-item-info/food-item-info.component";
import { FoodMenuComponent } from "./food/food-menu/food-menu.component";
import { FoodSearchComponent } from "./food/food-search/food-search.component";
import { ShoppingCartComponent } from "./shopping/shopping-cart/shopping-cart.component";
import { LoginComponent } from "./site/login/login.component";
import { SignupComponent } from "./site/signup/signup.component";
import { AuthGuardServiceGuard } from "./site/auth-guard-service.guard";

const routes: Routes = [
  { path: "food-item-edit/:id", component: FoodItemEditComponent },
  { path: "food-item-info", component: FoodItemInfoComponent },
  { path: "food-menu", component: FoodMenuComponent },
  { path: "food-search", component: FoodSearchComponent },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent,
    canActivate: [AuthGuardServiceGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "food-search", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
