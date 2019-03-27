import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductOptionsPage } from './product-options';

@NgModule({
  declarations: [
    ProductOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductOptionsPage),
  ],
})
export class ProductOptionsPageModule {}
