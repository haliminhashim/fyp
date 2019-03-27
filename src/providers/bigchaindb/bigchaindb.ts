import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as driver from 'bigchaindb-driver';

/*
  Generated class for the BigchaindbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BigchaindbProvider {
  apiUrl = 'https://test.bigchaindb.com/api/v1/';
  apiUrl2 = 'http://localhost:3000';
  constructor(public http: HttpClient) {
    console.log('Hello BigchaindbProvider Provider');
  }

  getTrasanction(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'transactions/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl2 + '/groupBuy', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  searchTransaction(query) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'assets/?search=' + query).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  createKeys() {
    return new driver.Ed25519Keypair()
  }


  createGroupBuy() {

    const user = {
      "publicKey": "BPcvGEeG5u8U2RPNww2X5QhMnJRQ7vX2JqD7yY55PQyY",
      "privateKey": "6t9DK7eb2azS62skzG7WttK4LErBZNwobRMWmBTHUrVv"
    }

    const assetdata = {
      "type": "trlgrpbuy",
      "id": "trlgrpbuy3",
      "expiry": 1553904000,
      "tiers": [{
        "level": 1,
        "amount": 3,
        "discount": 20
      },
      {
        "level": 2,
        "amount": 5,
        "discount": 30
      }, {
        "level": 3,
        "amount": 10,
        "discount": 60
      }],
      "product": {
      "id": 3,
      "image": "https://i.expansys.net/img/b/313404/google-pixel-3-xl-g013c.jpg",
      "name": "Pixel 3 XL",
      "price": 1199.99,
      "rating": 4,
      "categoryId": 6,
      "make": "Google",
      "quantity": 1,
      "confirm": true,
      "option": [
        {
          "title": "Storage Size",
          "selected": "128 GB",
          "type": [
            {
              "value": "64 GB"
            },
            {
              "value": "128 GB"
            }
          ]
        },
        {
          "title": "Colour",
          "selected": "Not PinkHTTP ",
          "type": [
            {
              "value": "Clearly White"
            },
            {
              "value": "Just Black"
            },
            {
              "value": "Not Pink"
            }
          ]
        }
      ],
      "spec": [
        {
          "type": "Colour",
          "value": "Gold / Silver / Space Grey"
        },
        {
          "type": "Screen Size",
          "value": "6.5 inch / 16.5 cm"
        },
        {
          "type": "Sim Count",
          "value": "Dual Sim"
        },
        {
          "type": "Network",
          "value": "4 GB"
        }
      ]
    },
      "quantity": 100
    }

    const metadata = {
      'planet': 'earth'
    }

    let signedTransaction = this.createSignedTransaction(assetdata, metadata, user);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'transactions?mode=sync', JSON.stringify(signedTransaction), {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  joinGroupBuy(data) {
    const assetdata = {
      "type": "trlprtcp",
      "groupBuyId": data.groupBuyId,
      "email": data.email,
      "quantity": data.quantity,
      "paymentDetails": data.payment,
      "shippingDetails": data.shipping,
      "referral": data.referral,
      "action": "Join",
      "inviteCode": data.inviteCode

    }

    const metadata = {
      'planet': 'earth'
    }

    let signedTransaction = this.createSignedTransaction(assetdata, metadata, data.keys);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'transactions?mode=sync', JSON.stringify(signedTransaction), {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  createSignedTransaction(assetdata, metadata, user) {
    const baseTransaction = driver.Transaction.makeCreateTransaction(
      assetdata,
      metadata,

      [driver.Transaction.makeOutput(
        driver.Transaction.makeEd25519Condition(user.publicKey))],
      user.publicKey
    )

    return driver.Transaction.signTransaction(baseTransaction, user.privateKey)
  }


}
