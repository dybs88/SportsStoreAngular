import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CartSummaryComponent } from "../store/components/cart/cartSummary.component";
import { NavbarComponent } from "./navbar.component";
import { AuthorizationModule } from "../authorization/auth.module";
import { CommonModule } from "@angular/common";
import { SsCommonModule } from "../common/ss.common.module";

@NgModule({
  imports: [SsCommonModule, RouterModule, CommonModule, AuthorizationModule],
  declarations: [NavbarComponent, CartSummaryComponent],
  exports: [NavbarComponent]
})

export class NavbarModule { }
