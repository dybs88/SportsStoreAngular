import { Injectable } from "@angular/core";
import { RestDataSource } from "src/dal/rest/rest.datasource";
import { Observable } from "rxjs";
import { User } from "src/modules/common/models/user/user.model";

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDataSource) { }

  authenticate(user: User): Observable<any> {
    return this.dataSource.authenticate(user);
  }

  get authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }

  clear() {
    this.dataSource.auth_token = null;
  }
}
