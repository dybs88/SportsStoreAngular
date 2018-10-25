import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProductModule } from 'src/model/product/product.module';
import { AppProductsComponent } from './products.component';
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [ProductModule, BrowserModule, FormsModule],
  declarations: [AppProductsComponent, CounterDirective],
  exports: [AppProductsComponent]
})

export class ProductsModule {

}
