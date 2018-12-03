
import { NgModule } from '@angular/core';
import { ProductRepository } from 'src/dal/product.repository';
import { OrderRepository } from 'src/dal/order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from 'src/modules/store/models/rest.datasource';
import { Order } from './order/order.model';
import { Cart } from './cart/cart.model';
import { AuthService } from 'src/modules/admin/services/auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestDataSource, ProductRepository, Cart, Order, OrderRepository, AuthService]
})

export class StoreModelModule {

}
