import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, ModalController } from "ionic-angular";
import { OrdersProvider } from "../../providers/orders/orders";
import { UsersProvider } from "../../providers/users/users";
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: "page-order",
  templateUrl: "order.html",
})
export class OrderPage {
  orders: any = [];
  user: any = this.usersProvider.currentUser();
  constructor(public navCtrl: NavController, public ordersProvider: OrdersProvider, public usersProvider: UsersProvider, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.ordersProvider.getOrdersByUserId(this.user.id).then(data => {
      this.orders = data;
    });
  }

  ionViewDidLoad() {
    if (this.user.id <= 0)
      this.navCtrl.setRoot(LoginPage);
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  viewOrderDetails(data) {
    var modalPage = this.modalCtrl.create("OrderDetailsPage", {
      data: data
    });
    modalPage.present();
  }

}
