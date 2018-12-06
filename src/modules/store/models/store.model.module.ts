
import { NgModule } from '@angular/core';
import { ProductRepository } from 'src/dal/product.repository';
import { OrderRepository } from 'src/dal/order.repository';
import { HttpClientModule } from '@angular/common/http';
import { Order } from './order/order.model';
import { Cart } from './cart/cart.model';

@NgModule({
  imports: [HttpClientModule],
  providers: [Cart, Order],
})

export class StoreModelModule { }
