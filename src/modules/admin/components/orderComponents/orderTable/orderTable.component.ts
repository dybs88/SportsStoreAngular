import { Component } from "@angular/core";
import { Order } from "src/modules/store/models/order/order.model";
import { OrderRepository } from "src/dal/order.repository";
import { PaginateComponent } from "src/modules/store/components/base/paginate.component";

@Component({
  templateUrl: "orderTable.component.html"
})

export class OrderTableComponent extends PaginateComponent<Order> {
  private orders: Order[];

  constructor(private orderRepo: OrderRepository) {
    super();
    this.orders = orderRepo.getOrders();
  }

  getOrders(): Order[] {
    return this.paginate(this.orders);
  }

  get pageCount(): number {
    return super.getPageCount(this.orders);
  }
}
