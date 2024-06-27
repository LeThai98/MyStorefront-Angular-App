import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{
  form!: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,
              private router: Router
            ) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Assuming phone number is numeric
      creditCard: ['', [Validators.required]],
    });
  }

  get userName() {
    return this.form.get('userName');
  }

  get address() {
    return this.form.get('address');
  }

  get creditCard() {
    return this.form.get('creditCard');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);

      // Redirect to another route
      this.router.navigate(['/confirmation']); 
      this.clearCart();

    } else {
      console.log('Form is not valid');
    }
  }

  clearCart():void{
    window.localStorage.clear();

    const element = document.getElementById('productAmount') as HTMLElement;
    element.innerHTML = '0';
  }

}
