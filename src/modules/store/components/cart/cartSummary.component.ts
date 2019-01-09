import { Component } from "@angular/core";
import { Cart } from "src/modules/common/models/cart/cart.model";

@Component({
  selector: "cart-summary",
  templateUrl: "cartSummary.component.html"
})

export class CartSummaryComponent {

  constructor(public cart: Cart) { }
}
