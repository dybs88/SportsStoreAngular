import { Injectable } from '@angular/core';
import { RestDataSource } from 'src/dal/rest/rest.datasource';
import { Product } from 'src/modules/common/models/product/product.model';

@Injectable({
  providedIn: "root"
})
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = Array.from(new Set(data.map(p => p.category)));
    });
  }

  getProducts(category: string = null): Product[] {
    if (category == null) {
      return this.products;
    } else {
      return this.products
        .filter(p => p.category === category);
    }
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.productID === id);
  }

  saveProduct(product: Product) {
    this.dataSource.saveProduct(product);
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id)
      .subscribe(p => this.products.splice(this.products.findIndex(i => i.productID === id), 1));
  }

  getCategories(): string[] {
    return this.categories = Array.from(new Set(this.products.map(p => p.category)));
  }

}
