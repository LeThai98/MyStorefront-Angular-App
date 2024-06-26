import { Component, Input, OnInit } from '@angular/core';
import { AddedProduct, Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() product!: Product;

  constructor(private service :ProductService) { }
  ngOnInit(): void {
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

  saveProductId(id: number) {
    localStorage.setItem('productID', id.toString());
  }

}
