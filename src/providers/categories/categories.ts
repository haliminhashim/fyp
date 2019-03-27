import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesProvider {
  apiUrl = 'http://localhost:3000';
  categories: any[] = [];
  constructor(public http: HttpClient) {
  }

  getMainCategories() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/categories?parentId=0').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSubCategories(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/categories?parentId=' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCategory(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/categories/'+ id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCategories() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/categories').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
