import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { CounterDirective } from 'src/modules/store/infrastructure/counter.directive';
import { StoreModelModule } from './models/store.model.module';
import { OrderComponent } from './components/order/order.component';
import { CartDetailComponent } from './components/cart/cartDetail.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  imports: [StoreModelModule, BrowserModule, FormsModule, RouterModule, NavbarModule],
  declarations: [StoreComponent, CounterDirective, OrderComponent, CartDetailComponent],
  exports: [StoreComponent, OrderComponent, CartDetailComponent]
})

export class StoreModule {

}
