import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from 'src/modules/store/store.module';
import { StoreComponent } from 'src/modules/store/store.component';
import { CartDetailComponent } from 'src/modules/store/components/cart/cartDetail.component';
import { OrderComponent } from 'src/modules/store/components/order/order.component';
import { StoreFirstGuard } from './storeFirst.guard';
import { RestDataSource } from 'src/dal/rest/rest.datasource';
import { AuthService } from 'src/services/auth.service';
import { ProductRepository } from 'src/dal/product.repository';
import { OrderRepository } from 'src/dal/order.repository';
import { SessionStorage } from './infrastructure/session.storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './infrastructure/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './infrastructure/interceptors/error.interceptor';
import { NavbarModule } from 'src/modules/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    StoreModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      { path: "order", component: OrderComponent, canActivate: [StoreFirstGuard] },
      { path: "auth", loadChildren: "src/modules/authorization/auth.module#AuthorizationModule", canActivate: [StoreFirstGuard] },
      { path: "admin", loadChildren: "src/modules/admin/admin.module#AdminModule", canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [StoreFirstGuard, RestDataSource, SessionStorage, AuthService, ProductRepository, OrderRepository,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas: [RouterModule]
})
export class AppModule { }
