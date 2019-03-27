import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersProvider {
  apiUrl = 'http://localhost:3000';
  user: object = this.user = {
    "id": 0,
    "username": "",
    "password": "",
    "email": "",
    "firstname": "",
    "lastname": "",
    "gender": "",
    "dob": "",
    "defaultBillingAddress": null,
    "defaultShippingAddress": null
  };

  constructor(public http: HttpClient) {
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUser(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserByEmail(email){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users?email=' + email).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  create(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users', JSON.stringify(data), {
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
      this.http.patch(this.apiUrl + '/users/' + data.id, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
      })
        .subscribe(data => {
          this.user = data;
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
  }

  async login(email: string, password: string) {
    let temp;
    await this.getUserByEmail(email)
      .then(data => {
        temp = data;
        for (let index = 0; index < temp.length; index++) {
          if (data[index].email == email && temp[index].password == password) {
            this.user = temp[index];
            break;
          }
          else {
            this.user = null;
          }
        }
      });
    return this.user;
  }

  logout(){
    this.user = {
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
  }

  currentUser() {
    return this.user;
  }

}
