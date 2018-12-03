import { Injectable } from "@angular/core";
import { RestDataSource } from "src/modules/store/models/rest.datasource";
import { Observable } from "rxjs";
import { Order } from "src/modules/store/models/order/order.model";

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(private dataSource: RestDataSource) { }

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
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
