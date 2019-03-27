import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CategoriesProvider } from '../providers/categories/categories';
import { UsersProvider } from '../providers/users/users';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>
  categories: any = [];
  user: any = {
    "id": 0,
    "username": "",
    "password": "",
    "email": "",
    "firstname": "",
    "lastname": "",
    "gender": "",
    "dob": "",
    "defaultBillingAddress": 0,
    "defaultShippingAddress": 0
  };

  constructor(
    platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events,
    public usersProvider: UsersProvider,
    public categoriesProvider: CategoriesProvider,
    public modalCtrl: ModalController) {

    platform.ready().then(() => {
      statusBar;
      splashScreen.hide();
    });

    this.categoriesProvider.getMainCategories().then(data => {
      this.categories = data
    });;

    this.events.subscribe('user:login', (user) => {
      this.user = user;
    });

  }

  viewCategory(tcategory) {
    this.nav.push('ProductsPage', {
      id: tcategory.id,
    });
  }

  viewGroupBuy() {
    if (this.user.id != 0)
    this.nav.push('GroupbuysPage');
  else
    this.nav.setRoot('LoginPage');
  }


  public viewAccount() {
    if (this.user.id != 0){
      this.nav.push('TabsPage');
    }
    else
      this.nav.setRoot('LoginPage');
  }

  public viewCart() {
    this.nav.push('CartPage');
  }

  public viewOrder() {
    if (this.user.id != 0)
      this.nav.push('OrderPage');
    else
      this.nav.setRoot('LoginPage');
  }

  public logout() {
    this.usersProvider.logout();
    this.nav.setRoot('LoginPage');
  }

  public login() {
    this.nav.setRoot('LoginPage');
  }
}
