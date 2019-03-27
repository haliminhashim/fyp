import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, ViewController } from 'ionic-angular';
import { CartsProvider } from '../../providers/carts/carts';
import { ProductsProvider } from '../../providers/products/products';
import { UsersProvider } from '../../providers/users/users';
import { BigchaindbProvider } from '../../providers/bigchaindb/bigchaindb';

@IonicPage({
  segment: 'product/:data'
})
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  products;
  sameseller;
  related
  product: any = {
    "id": 0,
    "image": "https://via.placeholder.com/750",
    "name": "Product Name",
    "price": 9999.99,
    "categoryId": 0,
    "make": "Product Make",
    "option": [],
    "spec": []
  };
  transaction: any = {}
  result: any = {}

  constructor(public bigchaindbProvider: BigchaindbProvider, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, public toastCtrl: ToastController, public cartsProvider: CartsProvider, public usersProvider: UsersProvider, public productsProvider: ProductsProvider) {
    this.productsProvider.getProducts().then(data => {
      this.products = data;
      this.related = data;
      this.sameseller = data;
    });

    this.productsProvider.getProduct(this.navParams.get('data')).then(data => {
      this.product = data;
    });
  }

  public getTransaction(id) {
    this.bigchaindbProvider.getTrasanction("06cc7655afde40748b456a566f7c452b55443ef6ae1bfd5cfca4b9e3e36ae592").then(data => {
      console.log(data)
    })
  }

  public optionModal(product) {
    var modalPage = this.modalCtrl.create('ProductOptionsPage', {
      data: product
    });

    modalPage.onDidDismiss((data) => {
      this.product = data;
    })

    modalPage.present();
  }

  addToCart(product) {
    let count = 0;
    product.option.forEach(option => {
      if (option.selected != "")
        count = count + 1;
    });
    if (count == product.option.length) {
      this.cartsProvider.addToCart(product);
      this.presentToast('Sucessfully added to cart')
    }
    else
      this.presentToast('Select all product option');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  public viewProduct(id) {
    this.navCtrl.push('ProductPage', {
      data: id
    });
  }

  public viewCart() {
    this.navCtrl.push('CartPage');
  }
}
