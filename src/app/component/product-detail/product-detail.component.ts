import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AddedProduct, Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit{

  product !: Product;
  constructor(private service :ProductService) { }

  ngOnInit(): void {
    this.getProductDetail();
  }
  
  getProductDetail(){ 
    this.service.getListProduct().subscribe(data => {
      let id = localStorage.getItem('productID');
      this.product = data.find((p: { id: any; }) => p.id == id);
    }, error => {console.log(error)});
  }

  addProduct(amountProduct: number): void {
    const cartProduct : AddedProduct[]= this.service.getProductFromCard();
    let addedProduct = {
      ...this.product,
      amount: amountProduct
    }

    if(cartProduct.find(p => p.id === this.product.id)){
      this.service.updateProductToCard(addedProduct);
      alert(`You updated the number of ${this.product.name} to ${amountProduct}.`); 
    }else{
      this.service.insertProductToCard(addedProduct);
      alert(`${this.product.name} added to cart.`); 
    }
  }
}
