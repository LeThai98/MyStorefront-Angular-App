import { Component, OnInit } from '@angular/core';
import { AddedProduct } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartProduct: AddedProduct[] = [];
  totalPrice: number = 0;

  amountProducts= [1,2,3,4,5,6,7,8,9,10];
  selectedAmount = 1;

  constructor(private productService:ProductService) { } 

  ngOnInit(): void {
   this.getListProductFromCart();
   this.calculateTotalPrice();
  }

  getListProductFromCart(){ 
    this.cartProduct = this.productService.getProductFromCard();
  }

  calculateTotalPrice(): void{
    this.totalPrice = parseFloat(this.cartProduct.reduce((acc, p) => acc + p.price * p.amount, 0).toFixed(2));
  };

  onAmountChange(amount: number, product: AddedProduct){

    product.amount = amount;

    this.productService.updateProductToCard(product);

    this.totalPrice = parseFloat(this.cartProduct.reduce((acc, p) => acc + p.price * p.amount, 0).toFixed(2));


    this.productService.updateCart();
  }

  removeProductFromCart(id: number){
    this.productService.deleteProductFromCard(id);
    this.cartProduct= this.productService.getProductFromCard();
    this.totalPrice = parseFloat(this.cartProduct.reduce((acc, p) => acc + p.price * p.amount, 0).toFixed(2));
    this.productService.updateCart();
  }

}
