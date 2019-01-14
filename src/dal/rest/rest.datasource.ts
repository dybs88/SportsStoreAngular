import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "src/modules/common/models/user/user.model";
import { Product } from "src/modules/common/models/product/product.model";
import { Order } from "src/modules/common/models/order/order.model";
import { SessionKeys } from "src/app/infrastructure/session.keys";

const PROTOCOL = "http";
const PORT = "45000";
const api = "api";

@Injectable({
  providedIn: "root"
})
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/${api}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "products", product);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${productId}`);
  }

  getOrders(): Observable<Order[]> {
    let orders = this.http.get<Order[]>(`${this.baseUrl}orders/`);
    console.log("restDataSource");
    orders.subscribe(sub => console.log(sub));
    return orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`, order);
  }

  deleteOrder(orderId: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}/orders/${orderId}`);
  }

  authenticate(userName: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}auth/login`, { userName: userName, password: password })
      .pipe(map(response => {
        let signedUser = new User(
          response.user.userName,
          response.user.token,
          response.user.email,
          response.user.firstName,
          response.user.lastName,
          response.user.phoneNumber
        );

        localStorage.setItem(SessionKeys.SignedUser, JSON.stringify(signedUser));
        return response;
      }));
  }
}
