import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddedProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api = 'http://localhost:4200/assets/data.json';
  storage = window.localStorage;
  constructor(private httpClient: HttpClient) { }

  getListProduct(){
    return this.httpClient.get<any>(this.api);
  }

  getProductFromCard(): AddedProduct[]{
    const  productList = this.storage.getItem('cart');
    return productList ? JSON.parse(productList) : [];
  }

  insertProductToCard(product: AddedProduct): void{
    const cartProduct : AddedProduct[]= this.getProductFromCard();
    let addedProduct: AddedProduct[] = [];

    if(cartProduct.find(p => p.id === product.id)){

      addedProduct = cartProduct.map(p => {
        if(p.id === product.id){
          return {
            ...p,
            amount: product.amount
          }
        }
        return p;
      });
    }else{
      addedProduct = [
        ...cartProduct,
        product
      ];
    }

    this.storage.setItem('cart', JSON.stringify(addedProduct));
  }

  updateProductToCard(product: AddedProduct): void{
    const cartProduct : AddedProduct[]= this.getProductFromCard();
    let addedProduct: AddedProduct[] = [];

    addedProduct = cartProduct.map(p => {
      if(p.id === product.id){
        return {
          ...p,
          amount: product.amount
        }
      }
      return p;
    });

    this.storage.setItem('cart', JSON.stringify(addedProduct));
  }

  deleteProductFromCard(id: number): void{
    const cartProduct : AddedProduct[]= this.getProductFromCard();
    let addedProduct: AddedProduct[] = [];

    addedProduct = cartProduct.filter(p => p.id !== id);

    this.storage.setItem('cart', JSON.stringify(addedProduct));
  }

}
