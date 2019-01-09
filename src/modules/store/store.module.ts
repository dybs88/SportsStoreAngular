import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { OrderComponent } from './components/order/order.component';
import { CartDetailComponent } from './components/cart/cartDetail.component';
import { NavbarModule } from '../navbar/navbar.module';
import { SsCommonModule } from '../common/ss.common.module';



@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, NavbarModule, SsCommonModule],
  declarations: [StoreComponent, OrderComponent, CartDetailComponent],
  exports: [StoreComponent, OrderComponent, CartDetailComponent]
})

export class StoreModule {

}
