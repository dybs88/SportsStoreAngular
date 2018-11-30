import { NgModule } from "@angular/core";
import { CartSummaryComponent } from "../cart/cartSummary.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModelModule } from "../../models/store.model.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
  imports: [StoreModelModule, RouterModule, BrowserModule],
  declarations: [NavbarComponent, CartSummaryComponent],
  exports: [NavbarComponent]
})

export class NavbarModule { }
