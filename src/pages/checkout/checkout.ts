import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { AddressesProvider } from '../../providers/addresses/addresses';
import { OrdersProvider } from '../../providers/orders/orders';
import { CartsProvider } from '../../providers/carts/carts';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  paymentdata: any;
  paymentdetails: any;
  checkoutList: any[] = [];
  payment: any = "paypal";
  delivery: any;
  subTotalAmnt: number = 0.00;
  shippingAmnt: number = 1.00;
  totalAmnt: number = 0.00;
  shippingAddress: any = { id: null };
  billingAddress: any = { id: null };
  user: any = this.usersProvider.currentUser();
  deliveryOption: any = [{
    id: 1,
    name: "Standard",
    price: 1.00,
  }, {
    id: 2,
    name: "Express",
    price: 3.00,
  }];;

  constructor(public navCtrl: NavController, public cartsProvider: CartsProvider, public ordersProvider: OrdersProvider, public navParams: NavParams, public addressesProvider: AddressesProvider, public usersProvider: UsersProvider, public viewCtrl: ViewController, public modalCtrl: ModalController) {



    this.delivery = 0
    this.payment = "paypal";
    this.shippingAmnt = 1;
    this.checkoutList = this.navParams.get('items');
    this.subTotalAmnt = this.navParams.get('subTotal');
    this.totalAmnt = this.subTotalAmnt + this.shippingAmnt;
    this.setAddresses();
  }

  calculateTotal() {
    this.shippingAmnt = this.deliveryOption[this.delivery].price
    this.totalAmnt = +this.subTotalAmnt + +this.shippingAmnt;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  setAddresses() {
    let billingId = this.user.defaultBillingAddress;
    let shippingId = this.user.defaultShippingAddress;
    if (billingId != null) {
      this.addressesProvider.getAddress(billingId).then(data => {
        this.billingAddress = data;
      });
    }
    else {
      this.billingAddress.id = null;
    }

    if (shippingId != null) {
      this.addressesProvider.getAddress(shippingId).then(data => {
        this.shippingAddress = data;
      });
    }
    else
      this.shippingAddress.id = null;
  }

  changeShippingAddress() {
    let addressId = null;
    if (this.shippingAddress.id != null)
      addressId = this.shippingAddress.id
    var modalPage = this.modalCtrl.create('AddressPickerPage', {
      id: addressId
    });

    modalPage.onDidDismiss((data) => {
      this.addressesProvider.getAddress(data).then(data => {
        this.shippingAddress = data;
      });
    })

    modalPage.present();
  }

  changeBillingAddress() {
    let addressId = null;
    if (this.billingAddress.id != null)
      addressId = this.shippingAddress.id
    var modalPage = this.modalCtrl.create('AddressPickerPage', {
      id: addressId
    });

    modalPage.onDidDismiss((data) => {
      this.addressesProvider.getAddress(data).then(data => {
        this.billingAddress = data;
      });
    })

    modalPage.present();
  }

  create() {
    let products = [];
    this.checkoutList.forEach(item => {
      products.push(item.product);
    });
    let json = {
      "id": null,
      "userId": this.user.id,
      "date": new Date().toString(),
      "status": "Awaiting Payment",
      "productTotal": +this.subTotalAmnt,
      "shippingTotal": +this.shippingAmnt,
      "orderTotal": +this.totalAmnt,
      "delivery": this.deliveryOption[this.delivery],
      "payment": this.payment,
      "products": products,
      "shippingAddress": this.shippingAddress,
      "billingAddress": this.billingAddress
    }

    this.ordersProvider.create(json).then(res => {
      if (res) {
        this.checkoutList.forEach(item => {
          this.cartsProvider.delete(item.id);
        });
        this.navCtrl.popToRoot();
        var modalPage = this.modalCtrl.create('OrderDetailsPage', { data: res });
        modalPage.present();
      }
    })
  }

  ionViewWillEnter() {
    if (this.user.id == 0)
      this.navCtrl.setRoot("LoginPage");
  }

}

