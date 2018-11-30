import { RouterModule } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { AdminComponent } from "./components/admin/admin.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent },
  { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent, AdminComponent]
})

export class AdminModule { }
