import { Component } from "@angular/core";
import { OrderRepository } from "src/dal/order.repository";
import { NgForm } from "@angular/forms";
import { Order } from "../../models/order/order.model";

@Component({
  templateUrl: "order.component.html",
  styleUrls: ["order.component.css"]
})

export class OrderComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  public order: Order;
  public orderRepo: OrderRepository;

  constructor(orderRepo: OrderRepository, order: Order) {
    this.orderRepo = orderRepo;
    this.order = order;
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepo.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
