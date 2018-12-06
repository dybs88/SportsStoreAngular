import { Component } from "@angular/core";
import { ProductRepository } from "src/dal/product.repository";
import { Product } from "src/modules/store/models/product/product.model";

@Component({
  templateUrl: "productTable.component.html"
})

export class ProductTableComponent {

  products = this.productRepo.getProducts();

  constructor(private productRepo: ProductRepository) { }

  addProduct() {

  }

  editProduct(product: Product): Product {
    return undefined;
  }

  deleteProduct(productId: number) {

  }
}
