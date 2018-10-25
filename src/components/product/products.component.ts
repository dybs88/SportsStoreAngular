import { Component } from '@angular/core';
import { ProductRepository } from 'src/dal/product.repository';
import { Product } from 'src/model/product/product.model';
import { PaginateComponent } from 'src/components/base/paginate.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products',
  templateUrl: 'products.component.html'
})
export class AppProductsComponent extends PaginateComponent {

  public selectedCategory: string = null;

  constructor(private repository: ProductRepository) {
    super();
  }

  get products(): Product[] {
    return this.paginate(this.repository.getProducts(this.selectedCategory));
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  get pageCount(): number {
    return super.getPageCount(this.repository.getProducts(this.selectedCategory));
  }

  getProduct(id: number): Product {
    return this.repository.getProduct(id);
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.selectedPage = 1;
  }


}
