import { Component } from "@angular/core";
import { ProductRepository } from "src/dal/product.repository";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "src/modules/store/models/product/product.model";
import { NgForm } from "@angular/forms";

@Component({
  templateUrl: "editProduct.component.html"
})

export class EditProductComponent {
  mode: string;
  product: Product = new Product(0);


  constructor(private productRepo: ProductRepository, private router: Router, private activeRoute: ActivatedRoute) {
    this.mode = activeRoute.snapshot.params["mode"];

    if (this.mode === "edit") {
      this.product = productRepo.getProduct(parseInt(activeRoute.snapshot.params["id"], 36));
    }
  }

  save(form: NgForm) {
    console.log(this.product);
    this.productRepo.saveProduct(this.product);
    this.router.navigateByUrl("admin/main/products");
  }
}
