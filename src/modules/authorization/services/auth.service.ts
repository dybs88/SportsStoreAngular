import { Injectable } from "@angular/core";
import { RestDataSource } from "src/modules/store/models/rest.datasource";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDataSource) { }

  authenticate(username: string, pass: string): Observable<boolean> {
    return this.dataSource.authenticate(username, pass);
  }

  get autheticated(): boolean {
    return this.dataSource.auth_token != null;
  }

  clear() {
    this.dataSource.auth_token = null;
  }
}