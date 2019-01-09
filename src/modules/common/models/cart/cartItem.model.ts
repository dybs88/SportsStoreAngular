import { Injectable } from "@angular/core";
import { Product } from "src/modules/common/models/product/product.model";

@Injectable()
export class CartItem {

  constructor(public product: Product, public quantity: number) { }

  getItemTotal() {
    return this.product.grossPrice * this.quantity;
  }
}
