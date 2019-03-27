import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-groupbuy',
  templateUrl: 'groupbuy.html',
})
export class GroupbuyPage {
  product;
  inviteCode:any = "";
  tiers;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get('data').data.product;
    this.tiers = this.navParams.get('data').data.tiers;
    console.log(this.tiers)
  }

  joinGroupBuy() {
    this.navCtrl.push("GroupbuyConfirmationPage", {
      data: this.navParams.get('data'),
      inviteCode: this.inviteCode
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupbuyPage');
  }

}
