import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";
import { NgForm } from "@angular/forms";
import { User } from "src/modules/admin/models/user.model";

@Component({
  selector: "ss-quickauth",
  templateUrl: "quickauth.component.html"
})

export class QuickAuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private authService: AuthService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(new User(this.username, this.password))
        .subscribe(response => {
          if (response.success) {
            this.router.navigateByUrl("/admin/main");
          } else {
            this.router.navigateByUrl("/auth");
          }
        });
    }
  }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  logout() {
    this.authService.clear();
    this.router.navigateByUrl("/");
  }
}
