import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";

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
      this.authService.authenticate(this.username, this.password)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl("/admin/main");
          } else {
            this.router.navigateByUrl("/auth");
          }
        });
    }
  }

  get authenticated(): boolean {
    return this.authService.autheticated;
  }
}
