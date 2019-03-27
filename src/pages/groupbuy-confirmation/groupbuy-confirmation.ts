import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { AddressesProvider } from '../../providers/addresses/addresses';
import { OrdersProvider } from '../../providers/orders/orders';
import { BigchaindbProvider } from '../../providers/bigchaindb/bigchaindb';

@IonicPage()
@Component({
  selector: 'page-groupbuy-confirmation',
  templateUrl: 'groupbuy-confirmation.html',
})
export class GroupbuyConfirmationPage {
  paymentdata: any;
  paymentdetails: any;
  payment: any = "paypal";
  delivery: any;
  subTotalAmnt: number = 0.00;
  shippingAmnt: number = 1.00;
  totalAmnt: number = 0.00;
  shippingAddress: any = { id: null };
  billingAddress: any = { id: null };
  deliveryOption;
  user: any = this.usersProvider.currentUser();
  product: any = null;
  inviteCode: any = "";
  quantity: number = 1;
  constructor(public toastCtrl: ToastController, public bigchaindbProvider: BigchaindbProvider, public ordersProvider: OrdersProvider, public modalCtrl: ModalController, public addressesProvider: AddressesProvider, public usersProvider: UsersProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.product = this.navParams.get("data").data.product;
    this.inviteCode = this.navParams.get("inviteCode");
    this.deliveryOption = [{
      id: 1,
      name: "Standard",
      price: 1.00,
    }, {
      id: 2,
      name: "Express",
      price: 3.00,
    }];

    this.delivery = 0
    this.payment = "paypal";
    this.subTotalAmnt = this.navParams.get("data").data.product.price;
    this.totalAmnt = this.subTotalAmnt + this.shippingAmnt;
    this.setAddresses();

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

  decreaseQuantity() {
    let quantity = this.quantity;
    if (quantity <= 1) {
      this.presentToast("Cannot Quantity Minimum 1");
    }
    else {
      this.quantity -= 1;
      this.calculateTotal()
    }
  }

  increaseQuantity() {
    let quantity = this.quantity;
    if (quantity >= 10) {
      this.presentToast("Cannot Quantity Maximum 10");
    }
    else {
      this.quantity += 1;
      this.calculateTotal()
    }
  }

  calculateTotal() {
    this.shippingAmnt = this.deliveryOption[this.delivery].price
    this.totalAmnt = (+this.subTotalAmnt * this.quantity) + +this.shippingAmnt;
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
    let data = {
      email: this.user.email,
      keys: this.user.keys,
      shipping: this.shippingAddress,
      referral: this.inviteCode,
      groupBuyId: this.navParams.get("data").data.id,
      quantity: this.quantity,
      inviteCode: this.user.id + this.navParams.get("data").data.id,
      payment: this.payment,
    }
    this.bigchaindbProvider.joinGroupBuy(data)
    .then(res => {
      this.presentToast("Joined Group Buy Successfully");
      this.navCtrl.pop();
    });
  }

}
