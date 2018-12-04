import { RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin/admin.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./infrastructure/auth.guard";
import { EditProductComponent } from "./components/productComponents/editProduct/editProduct.component";
import { ProductTableComponent } from "./components/productComponents/productTable/productTable.component";
import { OrderTableComponent } from "./components/orderComponents/orderTable/orderTable.component";
import { NavbarModule } from "../navbar/navbar.module";

let routing = RouterModule.forChild([
  { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "/auth" }
]);

@NgModule({
  imports: [FormsModule, routing, NavbarModule],
  declarations: [AdminComponent, EditProductComponent, ProductTableComponent, OrderTableComponent]
})

export class AdminModule { }
