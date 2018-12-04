import { NgModule } from "@angular/core";
import { AuthComponent } from "./components/auth/auth.component";
import { QuickAuthComponent } from "./components/quickAuth/quickAuth.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../admin/infrastructure/auth.guard";

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent, QuickAuthComponent],
  exports: [QuickAuthComponent]
})

export class AuthorizationModule { }
