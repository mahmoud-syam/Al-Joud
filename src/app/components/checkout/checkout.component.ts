import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute , private _CartService:CartService) {}
  cartId: any = '';

  orderForm: FormGroup = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastname: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    city: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    state: new FormControl(null, [Validators.required]),
    zipcode: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('^\\+\\d{1,3}\\s?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$')]),
    
  });
  handleForm(): void {
    this._CartService.checkOut(this.cartId , this.orderForm.value ).subscribe({
      next: (response) => {
        
        if(response.message == 'success') {
          window.open(response.session.url , '_self');
        }

        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
     });
    
   
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
