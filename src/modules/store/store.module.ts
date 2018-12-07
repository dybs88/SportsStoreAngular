import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { StoreModelModule } from './models/store.model.module';
import { OrderComponent } from './components/order/order.component';
import { CartDetailComponent } from './components/cart/cartDetail.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SsCommonModule } from '../common/ss.common.module';
import { CounterDirective } from '../common/infrastructure/counter.directive';



@NgModule({
  imports: [StoreModelModule, CommonModule, FormsModule, RouterModule, NavbarModule, SsCommonModule],
  declarations: [StoreComponent, OrderComponent, CartDetailComponent],
  exports: [StoreComponent, OrderComponent, CartDetailComponent]
})

export class StoreModule {

}
