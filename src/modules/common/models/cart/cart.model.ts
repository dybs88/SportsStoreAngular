import { Injectable } from "@angular/core";
import { Product } from "src/modules/common/models/product/product.model";
import { CartItem } from "./cartItem.model";

@Injectable()
export class Cart {
  public items: CartItem[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addItem(product: Product, quantity: number = 1) {
    let item = this.items.find(i => i.product.productID === product.productID);

    if (item === undefined) {
      item = new CartItem(product, quantity);
      this.items.push(item);
    } else {
      item.quantity += quantity;
    }

    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    let item = this.items.find(i => i.product.productID === product.productID);
    if (item !== undefined) {
      item.quantity = Number(quantity);
    }

    this.recalculate();
  }

  removeItem(productId: number) {
    let index = this.items.findIndex(i => i.product.productID === productId);
    this.items.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.items = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;

    this.items.forEach(i => {
      this.itemCount += i.quantity;
      this.cartPrice += (i.product.grossPrice * i.quantity);
    });
  }
}

