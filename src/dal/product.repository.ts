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

  getCategories(): string[] {
    return this.categories;
  }

}
