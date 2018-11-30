import { Injectable } from "@angular/core";
import { RestDataSource } from "src/modules/store/models/rest.datasource";
import { Observable } from "rxjs";
import { Order } from "src/modules/store/models/order/order.model";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: RestDataSource) { }

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
