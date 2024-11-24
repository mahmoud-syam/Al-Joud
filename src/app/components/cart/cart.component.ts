import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService) {}
  cartDetails:any = null;


  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        console.log(response);
        
        this.cartDetails = response.cart;
      },
      error: (error) => {
        console.log('Error fetching cart items', error);
      },
    })
  }










};
