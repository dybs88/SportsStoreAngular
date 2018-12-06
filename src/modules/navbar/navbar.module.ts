import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StoreModelModule } from "../store/models/store.model.module";
import { CartSummaryComponent } from "../store/components/cart/cartSummary.component";
import { NavbarComponent } from "./navbar.component";
import { AuthorizationModule } from "../authorization/auth.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [StoreModelModule, RouterModule, CommonModule, AuthorizationModule],
  declarations: [NavbarComponent, CartSummaryComponent],
  exports: [NavbarComponent]
})

export class NavbarModule { }
