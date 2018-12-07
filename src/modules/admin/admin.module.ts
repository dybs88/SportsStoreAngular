import { RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AuthGuard } from "./infrastructure/auth.guard";
import { EditProductComponent } from "./components/productComponents/editProduct/editProduct.component";
import { ProductTableComponent } from "./components/productComponents/productTable/productTable.component";
import { OrderTableComponent } from "./components/orderComponents/orderTable/orderTable.component";
import { NavbarModule } from "../navbar/navbar.module";
import { AdminMenuComponent } from "./components/adminMenu/adminMenu.component";
import { SsCommonModule } from "../common/ss.common.module";
import { CounterDirective } from "../common/infrastructure/counter.directive";

let routing = RouterModule.forChild([
  { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "products/:mode/:id", component: EditProductComponent },
  { path: "products/:mode", component: EditProductComponent },
  { path: "products", component: ProductTableComponent },
  { path: "orders", component: OrderTableComponent },
  { path: "**", redirectTo: "products" },
  { path: "**", redirectTo: "/auth" }
]);

@NgModule({
  imports: [FormsModule, routing, NavbarModule, CommonModule, SsCommonModule],
  providers: [AuthGuard],
  declarations: [AdminComponent, EditProductComponent, ProductTableComponent, OrderTableComponent, AdminMenuComponent]
})

export class AdminModule { }
