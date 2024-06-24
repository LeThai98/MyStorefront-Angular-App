import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:4200/assets/data.json';
  storage = window.localStorage;
  constructor(private httpClient: HttpClient) { }

  getListProduct(){
    return this.httpClient.get<any>(this.url);
  }

  addProductToCart(product: any){
    
    this.storage.setItem('cart', JSON.stringify(product));
  }
}
