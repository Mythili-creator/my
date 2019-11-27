import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FoodItemInfoComponent } from "./food/food-item-info/food-item-info.component";
import { FoodMenuComponent } from "./food/food-menu/food-menu.component";
import { FoodSearchComponent } from "./food/food-search/food-search.component";
import { ShoppingCartComponent } from "./shopping/shopping-cart/shopping-cart.component";
import { FoodItemEditComponent } from "./food/food-item-edit/food-item-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./site/signup/signup.component";
import { LoginComponent } from "./site/login/login.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FoodItemInfoComponent,
    FoodMenuComponent,
    FoodSearchComponent,
    ShoppingCartComponent,
    FoodItemEditComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
