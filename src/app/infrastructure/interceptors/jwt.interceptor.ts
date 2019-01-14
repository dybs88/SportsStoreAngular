import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { SessionKeys } from "../session.keys";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let signedUser = JSON.parse(localStorage.getItem(SessionKeys.SignedUser));
    if (signedUser && signedUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${signedUser.token}`
        }
      });
    }

    return next.handle(request);
  }
}
