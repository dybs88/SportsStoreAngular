import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModelModule } from "../store/models/store.model.module";
import { CartSummaryComponent } from "../store/components/cart/cartSummary.component";
import { NavbarComponent } from "./navbar.component";
import { AuthorizationModule } from "../authorization/auth.module";

@NgModule({
  imports: [StoreModelModule, RouterModule, BrowserModule, AuthorizationModule],
  declarations: [NavbarComponent, CartSummaryComponent],
  exports: [NavbarComponent]
})

export class NavbarModule { }
