import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: any[] = [];

  constructor(private _CartService: CartService) {}

  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (response) => {
        console.log(response);
        if (response && response.cart) {
          this.cartDetails = response.cart;
        } else {
          console.warn('Cart is empty or invalid');
          this.cartDetails = [];
        }
      },
      error: (error) => {
        console.error('Error fetching cart items', error);
        this.cartDetails = [];
      },
    });
  }

  getTotalPrice(): number {
    return this.cartDetails.reduce(
      (total, item) => total + item.total_price,
      0
    );
  }

  removeItem(id: string): void {
    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log('Product removed from cart:', response);
        this.cartDetails = response.cart;
      },
      error: (error) => {
        console.error('Error removing product from cart:', error);
      },
    });
  }

  changeCount(count: number , id:string): void {
    console.log(count + ' changes');
  }
}
