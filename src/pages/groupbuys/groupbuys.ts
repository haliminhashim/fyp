import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BigchaindbProvider } from '../../providers/bigchaindb/bigchaindb';

/**
 * Generated class for the GroupbuysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groupbuys',
  templateUrl: 'groupbuys.html',
})
export class GroupbuysPage {
  items: any = [];
  transactions: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public bigchaindbProvider: BigchaindbProvider) {
    this.bigchaindbProvider.searchTransaction("trlgrpbuy").then(data => {
      this.transactions = data;
      for (let index = 0; index < this.transactions.length; index++) {
        let transaction = this.transactions[index];
        this.transactions[index].data.count = 0;
        this.bigchaindbProvider.searchTransaction(transaction.data.id).then(data => {
          let result: any = data
          for (let index2 = 0; index2 < result.length; index2++) {
            const element = result[index2];
            if (element.data.type == "trlprtcp")

              if (element.data.action == "Join")
                this.transactions[index].data.count += element.data.quantity
              else
                this.transactions[index].data.count -= element.data.quantity
          }
        })
      }
    })
  }

  viewGroupBuy(transaction){
    this.navCtrl.push("GroupbuyPage", {
      data: transaction
    })
  }

  viewMyGroup(transaction){
    this.navCtrl.push("MygroupPage", {
      data: transaction
    })
  }

  createGroupBuy() {
    this.bigchaindbProvider.createGroupBuy();
  }

  ionViewDidLoad() {

  }

}
