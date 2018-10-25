
import { NgModule } from '@angular/core';
import { ProductRepository } from 'src/dal/product.repository';
import { StaticDataSource } from 'src/model/static.datasource';

@NgModule({
  providers: [ProductRepository, StaticDataSource]
})

export class ProductModule {

}
