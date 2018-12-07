import { Component } from '@angular/core';
import { ProductRepository } from 'src/dal/product.repository';
import { Router } from '@angular/router';
import { Cart } from './models/cart/cart.model';
import { Product } from './models/product/product.model';
import { PaginateComponent } from './components/base/paginate.component';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent extends PaginateComponent<Product> {

  public selectedCategory: string = null;

  constructor(private repository: ProductRepository,
    private cart: Cart,
    private router: Router) {
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

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl("/cart");
  }
}
