import { Injectable } from "@angular/core";
import { RestDataSource } from "src/dal/rest/rest.datasource";
import { Observable } from "rxjs";
import { Order } from "src/modules/common/models/order/order.model";

@Injectable({
  providedIn: "root"
})
export class OrderRepository {
  private orders: Order[] = [];

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getOrders()
      .subscribe(data => this.orders = data);
  }

  getOrders(): Order[] {
    console.log(this.orders);
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    return this.dataSource.updateOrder(order)
      .subscribe(o => this.orders.splice(this.orders.findIndex(i => i.id === o.id), 1, o));
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id)
      .subscribe(o => this.orders.splice(this.orders.findIndex(i => i.id === o.id), 1));
  }
}
