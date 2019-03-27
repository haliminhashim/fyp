import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { LoginPage } from '../../pages/login/login'

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  accountRoot = 'AccountPage';
  addressRoot = 'AddressPage';
  user: any = this.usersProvider.currentUser();

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public usersProvider: UsersProvider) {
  }

  public closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    if (this.user.id <= 0)
      this.navCtrl.setRoot(LoginPage);
  }

}
