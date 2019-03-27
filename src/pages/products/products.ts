import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { CategoriesProvider } from '../../providers/categories/categories';

@IonicPage({
  segment: 'products/:id'
})
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  productItems: any = [];
  subCategory: any = [];
  category: any = {};
  page: number = 1;
  scrollChecker: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriesProviders: CategoriesProvider, public productProvider: ProductsProvider, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.categoriesProviders.getCategory(this.navParams.get("id")).then(data => {
      this.category = data;
      this.categoriesProviders.getSubCategories(this.category.id).then(data => {
        this.subCategory = data;
        this.productProvider.getProductsByCategory(this.navParams.get("id"), this.page).then(data => {
          let result: any = data;
          result.forEach(product => {
            this.productItems.push(product);
          });
          this.page += 1;
        });
      });
    });
  }
  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.scrollChecker)
          this.productProvider.getProductsByCategory(this.navParams.get("id"), this.page).then(data => {
            let result: any = data
            if (result.length > 0) {
              result.forEach(product => {
                this.productItems.push(product);
              });
              this.page += 1;
            }
            else
              this.scrollChecker = false;
          });
        resolve();
      }, 500);
    })
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  public viewProduct(id) {
    this.navCtrl.push('ProductPage', { data: id });
  }

  public viewSubCategory(tid) {
    this.navCtrl.push('ProductsPage', { id: tid })
  }

  public viewCart() {
    this.navCtrl.push('CartPage');
  }

}
