import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoriesProvider } from "../categories/categories";

@Injectable()
export class ProductsProvider {
  apiUrl = 'http://localhost:3000'
  constructor(public http: HttpClient, public categoriesProvider: CategoriesProvider) {
  }

  getProduct(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/products/' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  async getProductsByCategory(parentId, number) {

    let ids: any = [];
    await this.categoriesProvider.getCategories().then(data => {
      let categories: any = data;
      let index = 0;
      ids.push(parentId);
      while(index < ids.length){
        categories.forEach(category => {
          if(category.parentId == ids[index])
            ids.push(category.id)
        });
        index++;
      }
    })
    let query: string = "";
    for (let index = 0; index < ids.length; index++) {
      console.log(ids[index])
      const category = ids[index];
      query += "categoryId=" + category + "&"
    }
    query += "categoryId=" + parentId + "&" + "_page=" + number + "&_limit=6"
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/products?' + query).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProducts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/products').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProductsByPage(number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/products?_page=' + number + "&limit=4").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
