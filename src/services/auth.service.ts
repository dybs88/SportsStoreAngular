import { Injectable } from "@angular/core";
import { RestDataSource } from "src/dal/rest/rest.datasource";
import { Observable } from "rxjs";
import { User } from "src/modules/common/models/user/user.model";
import { SessionKeys } from "src/app/infrastructure/session.keys";

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDataSource) { }

  authenticate(userName: string, password: string): Observable<any> {
    return this.dataSource.authenticate(userName, password);
  }

  get authenticated(): boolean {
    return (localStorage.getItem(SessionKeys.SignedUser) !== null);
  }

  logout() {
    localStorage.removeItem(SessionKeys.SignedUser);
  }
}
