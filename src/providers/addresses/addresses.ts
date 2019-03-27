import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddressesProvider {
  apiUrl = 'http://localhost:3000';
  addresses: any[];
  address: any;
  constructor(public http: HttpClient) {
  }

  getAddressesByUserId(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/addresses?userId=' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getAddress(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/addresses/'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/addresses', JSON.stringify(data), {
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
      this.http.delete(this.apiUrl + '/addresses/' + id, {
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
      this.http.patch(this.apiUrl + '/addresses/' + data.id, JSON.stringify(data), {
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
