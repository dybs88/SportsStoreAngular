import { Injectable } from '@angular/core';
import { RestDataSource } from 'src/modules/store/models/rest.datasource';
import { Product } from 'src/modules/store/models/product/product.model';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index).sort();
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
    return this.products.find(p => p.id === id);
  }

  saveProduct(product: Product) {
    if (product.id === null || product.id === 0) {
      this.dataSource.saveProduct(product)
        .subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(p => this.products.splice(this.products.findIndex(i => i.id === product.id), 1, p));
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id)
      .subscribe(p => this.products.splice(this.products.findIndex(i => i.id === id), 1));
  }

  getCategories(): string[] {
    return this.categories;
  }

}
