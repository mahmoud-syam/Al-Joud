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
  cartId: any = '';
  cart: any = {}; // Initialize cart data
  items: any = [];

  orderForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    city: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    street_address: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    state: new FormControl(null, [Validators.required]),
    zip_code: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('^\\+\\d{1,3}\\s?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$')]),
  });

  constructor(private _ActivatedRoute: ActivatedRoute, private _CartService: CartService) {}

  handleForm(): void {
    // Combine user form data and cart data
    const checkoutData = {
      address: this.orderForm.value,
      items: this.cart.items.map((item: any) => ({
        product_id: item.product_id,
        name: item.name,
        image_url: item.image_url,
        quantity: item.quantity,
        unit_amount: item.unit_amount,
        total_amount: item.unit_amount * item.quantity,
      })),
      // items: [
      //   {
      //       product_id: item.product_id,
      //       name: item.name,
      //       image_url: item.image_url,
      //       quantity: item.quantity,
      //       unit_amount:  item.unit_amount,  
      //       total_amount: item.unit_amount * item.quantity   
      //   }
      // ],
     // Include the actual cart items here please. 
      // how u will add these next two values think please.
      shipping_amount: 7.00, 
      discount_code: "haweil", 
    };
    console.log(this.orderForm.value);
    
    console.log("checkoutData",checkoutData);
    this._CartService.checkOut(this.cartId, checkoutData).subscribe({
      next: (response) => {
        if (response.message == 'success') {
          window.open(response.session.url, '_self');
        }
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  // ngOnInit(): void {
  //   this._ActivatedRoute.paramMap.subscribe({
  //     next: (params) => {
  //       this.cartId = params.get('id'); // Get the cart ID from the route parameters.
  //       // Fetch cart data by cartId
  //       this._CartService.getCartUser().subscribe({
  //         next: (cart) => {
  //           this.cart = cart; // Assign fetched cart data
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         }
  //       });
  //       console.log(this.cartId);
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     },
  //   });
  // }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id'); 
        this.fetchCart();
      },
      error: (error) => {
        console.error('Failed to get cart ID:', error);
      },
    });
  }

  private fetchCart(): void {
    this._CartService.getCartUser().subscribe({
      next: (cart) => {
        this.cart = cart;
        console.log('Cart loaded:', cart);
      },
      error: (error) => {
        console.error('Failed to load cart:', error);
      },
    });
  }
}
