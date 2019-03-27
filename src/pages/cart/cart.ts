import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';
import { CartsProvider } from '../../providers/carts/carts';
import { UsersProvider } from '../../providers/users/users';
import { LoginPage } from '../../pages/login/login';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart;
  total: number = 0.00;
  user: any = this.usersProvider.currentUser();
  constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider: UsersProvider, public cartsProvider: CartsProvider, public viewCtrl: ViewController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.cart = [];
    this.cartsProvider.getCartByUserId(this.user.id).then(data => {
      this.cart = data;
      this.total = this.calculateTotal(data);
    })
  }

  calculateTotal(cart) {
    let amount = 0;
    cart.forEach(item => {
      if (item.product.confirm != false)
        amount += (item.product.price * item.product.quantity)
    });
    return amount;
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  decreaseQuantity(index) {
    let quantity = this.cart[index].product.quantity;
    if (quantity <= 1) {
      this.presentToast("Cannot Quantity Minimum 1");
    }
    else {
      this.cart[index].product.quantity -= 1;
      this.cartsProvider.updateQuantity(this.cart[index].product);
    }
    this.total = this.calculateTotal(this.cart);
  }

  increaseQuantity(index) {
    let quantity = this.cart[index].product.quantity;
    if (quantity >= 10) {
      this.presentToast("Cannot Quantity Maximum 10");
    }
    else {
      this.cart[index].product.quantity += 1;
      this.cartsProvider.updateQuantity(this.cart[index].product);
    }
    this.total = this.calculateTotal(this.cart);
  }

  checkout(cart) {
    let checkoutList = []
    cart.forEach(item => {
      if (item.product.confirm)
        checkoutList.push(item);
    });
    if (this.user.id != 0){
      this.navCtrl.push('CheckoutPage', {
        items: checkoutList,
        subTotal: this.total
      });
    }
    else
      this.navCtrl.setRoot(LoginPage);
  }

  removeFromCart(id) {
    this.cartsProvider.delete(id).then(res => {
      this.cartsProvider.getCartByUserId(this.user.id).then(data => {
        this.cart = data;
        this.total = this.calculateTotal(data);
      })
    });
  }

  public editOption(product) {
    var modalPage = this.modalCtrl.create('ProductOptionsPage', {
      data: product
    });

    modalPage.onDidDismiss((data) => {
      product = data;
    })

    modalPage.present();
  }
}
