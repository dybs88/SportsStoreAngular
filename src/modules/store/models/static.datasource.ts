import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order/order.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Produkt 1', 'Kategoria 1', 'Opis 1', 10),
    new Product(2, 'Produkt 2', 'Kategoria 1', 'Opis 2', 20),
    new Product(3, 'Produkt 3', 'Kategoria 2', 'Opis 3', 30),
    new Product(4, 'Produkt 4', 'Kategoria 2', 'Opis 4', 40),
    new Product(5, 'Produkt 5', 'Kategoria 2', 'Opis 5', 50),
    new Product(6, 'Produkt 6', 'Kategoria 3', 'Opis 6', 60),
    new Product(7, 'Produkt 7', 'Kategoria 3', 'Opis 7', 70),
    new Product(8, 'Produkt 8', 'Kategoria 1', 'Opis 8', 80),
    new Product(9, 'Produkt 9', 'Kategoria 2', 'Opis 9', 90),
    new Product(10, 'Produkt 10', 'Kategoria 3', 'Opis 10', 100),
    new Product(11, 'Produkt 11', 'Kategoria 4', 'Opis 11', 110),
    new Product(12, 'Produkt 12', 'Kategoria 4', 'Opis 12', 120),
    new Product(13, 'Produkt 13', 'Kategoria 4', 'Opis 13', 130),
    new Product(14, 'Produkt 14', 'Kategoria 2', 'Opis 14', 140),
  ];

  private orders: Order[] = [];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  getOrders(): Observable<Order[]> {
    return from([this.orders]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
