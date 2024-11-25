import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute) {}
  cartId: any = '';

  orderForm: FormGroup = new FormGroup({
    // Define form controls and validation rules here.
    // Example:
    // firstName: ['', [Validators.required, Validators.minLength(2)]],
    // lastName: ['', [Validators.required, Validators.minLength(2)]],
    // email: ['', [Validators.required, Validators.email]],
    // phone: ['', [Validators.required, Validators.pattern('^\\+\\d{1,3}\\s?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$')]],
    // address: ['', [Validators.required, Validators.minLength(10)]],
    // city: ['', [Validators.required, Validators.minLength(3)]],
    // state: ['', [Validators.required, Validators.minLength(2)]],
  });
  handleForm(): void {
    console.log(this.orderForm.value);
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id'); // Get the cart ID from the route parameters.
        console.log(this.cartId);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
