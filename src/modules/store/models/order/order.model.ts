import { Injectable } from "@angular/core";
import { Cart } from "../cart/cart.model";

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zipCode: string;
  public country: string;
  public shipped: boolean = false;
  public cart: Cart;

  constructor(cart: Cart) {
    this.cart = cart;
  }

  clear() {
    this.id = null;
    this.name = this.address = this.city = this.state = this.zipCode = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
