import { Injectable } from "@angular/core";
import { Product } from "../product/product.model";

@Injectable()
export class CartItem {

  constructor(public product: Product, public quantity: number) { }

  getItemTotal() {
    return this.product.price * this.quantity;
  }
}
