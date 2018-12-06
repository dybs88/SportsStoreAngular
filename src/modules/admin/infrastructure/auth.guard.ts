import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/services/auth.service";

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.authenticated) {
      return true;
    }
    this.router.navigateByUrl("/auth");
    return false;
  }
}
