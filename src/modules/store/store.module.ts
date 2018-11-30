import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { CounterDirective } from 'src/modules/store/infrastructure/counter.directive';
import { StoreModelModule } from './models/store.model.module';
import { OrderComponent } from './components/order/order.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { CartDetailComponent } from './components/cart/cartDetail.component';


@NgModule({
  imports: [StoreModelModule, BrowserModule, FormsModule, RouterModule, NavbarModule],
  declarations: [StoreComponent, CounterDirective, OrderComponent, CartDetailComponent],
  exports: [StoreComponent, OrderComponent, CartDetailComponent]
})

export class StoreModule {

}
