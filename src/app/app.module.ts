import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { ProductsProvider } from '../providers/products/products';
import { CategoriesProvider } from '../providers/categories/categories';
import { UsersProvider } from '../providers/users/users';
import { CartsProvider } from '../providers/carts/carts';
import { AddressesProvider } from '../providers/addresses/addresses';
import { OrdersProvider } from '../providers/orders/orders';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { BigchaindbProvider } from '../providers/bigchaindb/bigchaindb';

@NgModule({
  declarations: [
    MyApp,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios'
  }),
    HttpClientModule,
    HomePageModule,
    LoginPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider,
    CategoriesProvider,
    UsersProvider,
    CartsProvider,
    AddressesProvider,
    OrdersProvider,
    BigchaindbProvider,
  ]
})
export class AppModule {}
