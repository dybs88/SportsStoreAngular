import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product/product.model";
import { Order } from "./order/order.model";
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = "3500";

@Injectable({
  providedIn: "root"
})
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "products", product, this.getOptions());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}products/${product.id}`, product, this.getOptions());
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${productId}`, this.getOptions());
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders");
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`, order, this.getOptions());
  }

  deleteOrder(orderId: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}/orders/${orderId}`, this.getOptions());
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", { name: user, password: pass })
      .pipe(map(response => {
        this.auth_token = response.success ? response.token : null;
        console.log(`auth_token = ${this.auth_token}`);
        return response.success;
      }));
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    };
  }
}
