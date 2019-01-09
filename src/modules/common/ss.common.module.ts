import { NgModule } from "@angular/core";
import { CounterDirective } from "./infrastructure/counter.directive";
import { CommonModule } from "@angular/common";
import { Order } from "./models/order/order.model";
import { Cart } from "./models/cart/cart.model";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [CounterDirective],
  exports: [CounterDirective],
  providers: [Cart, Order]
})

export class SsCommonModule { }
