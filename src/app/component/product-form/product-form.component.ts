import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {

  @Output() addProductRequest = new EventEmitter<number>();
  amountProducts= [1,2,3,4,5,6,7,8,9,10];
  selectedAmount = 1;

  constructor(){
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: any): void {
    this.addProductRequest.emit(form.value.amount);

    //reset form
    this.selectedAmount = 1;
  }

  onAmountChange(amount: number){
    this.selectedAmount = amount;
    console.log('Form Data: ',this.selectedAmount);
  }
}
