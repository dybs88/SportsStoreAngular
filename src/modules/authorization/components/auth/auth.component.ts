import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../../services/auth.service";
import { User } from "src/modules/common/models/user/user.model";

@Component({
  templateUrl: "auth.component.html"
})

export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private authService: AuthService) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password).subscribe((response) => {
        if (response.success) {
          this.router.navigateByUrl("/admin/main");
        } else {
          this.errorMessage = "Niepoprawne dane";
        }
      });
    }
  }
}
