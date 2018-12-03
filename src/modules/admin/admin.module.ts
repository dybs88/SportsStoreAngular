import { RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AdminComponent } from "./components/admin/admin.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./infrastructure/auth.guard";
import { QuickAuthComponent } from "./components/quickauth/quickauth.component";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  // { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [AuthComponent, AdminComponent, QuickAuthComponent],
  exports: [QuickAuthComponent]
})

export class AdminModule { }
