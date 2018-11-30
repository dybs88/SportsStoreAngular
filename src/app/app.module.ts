import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from 'src/modules/store/store.module';
import { StoreComponent } from 'src/modules/store/store.component';
import { CartDetailComponent } from 'src/modules/store/components/cart/cartDetail.component';
import { OrderComponent } from 'src/modules/store/components/order/order.component';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: "order", component: OrderComponent, canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
  schemas: [RouterModule]
})
export class AppModule { }
