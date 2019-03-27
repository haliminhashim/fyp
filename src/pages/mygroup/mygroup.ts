import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { BigchaindbProvider } from '../../providers/bigchaindb/bigchaindb';

@IonicPage()
@Component({
  selector: 'page-mygroup',
  templateUrl: 'mygroup.html',
})
export class MygroupPage {
  user;
  transactions: any = [];
  constructor(public userProvider: UsersProvider, public bigchaindbProvider: BigchaindbProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.userProvider.currentUser();
  }
  ionViewCanEnter() {
    this.bigchaindbProvider.searchTransaction('"' + this.user.email + '"').then(async data => {
      let result: any = data
      result.forEach(element => {
        if (element.data.type == "trlprtcp") {
          element.product = {
            image: ""
          }
          element.data.referrals = []
          this.transactions.push(element)
        }
      });
      await this.transactions.forEach((transaction, index) => {
        this.bigchaindbProvider.searchTransaction(transaction.data.groupBuyId).then(data => {
          let result: any = data;
          result.forEach(element => {
            if (element.data.type == "trlgrpbuy") {
              this.transactions[index].product = element.data.product
              this.transactions[index].tiers = element.data.tiers
              this.transactions[index].discount = 0
            }
          });

          let invitesCodes: any = [];
          let referrals: any = [];

          invitesCodes.push(transaction.data.inviteCode);
          invitesCodes.forEach(code => {
            result.forEach(transaction => {
              if (code == transaction.data.referral)
                invitesCodes.push(transaction.data.inviteCode)
            });
          });

          invitesCodes.forEach(code => {
            result.forEach(element => {
              if (code == element.data.referral && this.user.email != element.data.email)
                referrals.push(element.data.email)
            });
          });
          this.transactions[index].data.referrals = referrals

          transaction.tiers.forEach(tier => {
            // console.log(tier.amount)
            if(referrals.length >= tier.amount){
              this.transactions[index].discount = tier.discount
            }
          });
        });
      });
    })
    // console.log(this.transactions)
  }
}
