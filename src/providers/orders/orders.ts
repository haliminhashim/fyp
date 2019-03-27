import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersProvider {
  apiUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {
  }
  
  getOrdersByUserId(userId) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/orders?userId=' + userId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getOrder(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/orders/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/orders', JSON.stringify(data), {
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
