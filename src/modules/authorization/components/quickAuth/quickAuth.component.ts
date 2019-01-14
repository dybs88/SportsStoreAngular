import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../../services/auth.service";
import { NgForm } from "@angular/forms";
import { User } from "src/modules/common/models/user/user.model";

@Component({
  selector: "ss-quickauth",
  templateUrl: "quickauth.component.html"
})

export class QuickAuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private authService: AuthService) { }

  get authenticated(): boolean {
    return this.authService.authenticated;
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password)
        .subscribe(response => {
          if (response.success) {
            this.router.navigateByUrl("/admin/main");
          } else {
            this.router.navigateByUrl("/auth");
          }
        });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}
