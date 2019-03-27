import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersProvider } from '../users/users';

@Injectable()
export class CartsProvider {
  apiUrl = 'http://localhost:3000';
  cart: any[any] = [];
  cartid: number = 0;
  json: any;
  user: any = this.usersProvider.currentUser();
  constructor(public http: HttpClient, public usersProvider: UsersProvider) {
  }

  getCartByUserId(userId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/carts?userId=' + userId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addToCart(product) {
    this.user = this.usersProvider.currentUser()
    this.getCartByUserId(this.user.id).then(data => {
      let exist = false;
      this.json = data;
      let products = this.json;
      for (let index = 0; index < products.length; index++) {
        const element = products[index];
        let item = JSON.parse(JSON.stringify(element.product));
        item.quantity = 1;
        if (JSON.stringify(item) === JSON.stringify(product)) {
          element.product.quantity += 1;
          this.update(element);
          exist = true;
        }
      };
      if (!exist) {
        let json = {
          "userId": this.user.id,
          "product": product
        }
        this.create(json);
      }
    });
    return this.getCartByUserId(this.user.id);
  }

  updateQuantity(product){
    this.getCartByUserId(this.user.id).then(data => {
      this.json = data;
      for (let index = 0; index < this.json.length; index++) {
        const element = this.json[index];
        let item = JSON.parse(JSON.stringify(element.product));
        item.quantity = product.quantity;
        if (JSON.stringify(item) === JSON.stringify(product)) {
          element.product.quantity = product.quantity;
          this.update(element);
        }
      };
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/carts', JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  update(data) {
    return new Promise((resolve, reject) => {
      this.http.patch(this.apiUrl + '/carts/' + data.id, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  delete(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl + '/carts/' + id, {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
