import { Component } from "@angular/core";
import { ProductRepository } from "src/dal/product.repository";
import { Product } from "src/modules/store/models/product/product.model";
import { PaginateComponent } from "src/modules/store/components/base/paginate.component";

@Component({
  templateUrl: "productTable.component.html"
})

export class ProductTableComponent extends PaginateComponent<Product> {

  private products: Product[];

  constructor(private productRepo: ProductRepository) {
    super();
    this.products = this.productRepo.getProducts();
  }

  getProducts(): Product[] {
    return this.paginate(this.products);
  }

  get pageCount(): number {
    return super.getPageCount(this.products);
  }

  deleteProduct(productId: number) {

  }
}
