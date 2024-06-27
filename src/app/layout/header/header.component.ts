import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  constructor(private service:ProductService) { 

  }
  ngOnInit(): void {
    this.service.updateCart();
  }


}
