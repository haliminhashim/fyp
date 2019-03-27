import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products'

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: any = [];
  daily: any = [];
  page: number = 1;
  scrollChecker: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public productsProvider: ProductsProvider) {
    this.productsProvider.getProductsByPage(this.page).then(data => {
      this.page += 1;
      this.products = data;
    });
    this.productsProvider.getProducts().then(data => {
      this.daily = JSON.parse(JSON.stringify(data));
    });
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.scrollChecker)
          this.productsProvider.getProductsByPage(this.page).then(data => {
            let additionalProducts: any = data;
            if (additionalProducts.length != 0) {
              additionalProducts.forEach(product => {
                this.products.push(product);
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

  public viewCart() {
    this.navCtrl.push('CartPage');
  }

  pushGroupBuy() {
    this.navCtrl.push('GroupbuysPage');
  }

  public viewProduct(id) {
    this.navCtrl.push('ProductPage', {
      data: id
    });
  }
}
