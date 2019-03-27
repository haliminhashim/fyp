import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProductOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-options',
  templateUrl: 'product-options.html',
})
export class ProductOptionsPage {
product: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    this.product = this.navParams.get('data');
  }

  ionViewDidLoad() {
  }

  public closeModal(){
    let data = this.product;
    this.viewCtrl.dismiss(data);
  }
}
