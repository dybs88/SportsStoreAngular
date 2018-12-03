import { NgModule } from "@angular/core";
import { CartSummaryComponent } from "../cart/cartSummary.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModelModule } from "../../models/store.model.module";
import { NavbarComponent } from "./navbar.component";
import { AdminModule } from "src/modules/admin/admin.module";

@NgModule({
  imports: [StoreModelModule, RouterModule, BrowserModule, AdminModule],
  declarations: [NavbarComponent, CartSummaryComponent],
  exports: [NavbarComponent]
})

export class NavbarModule { }
