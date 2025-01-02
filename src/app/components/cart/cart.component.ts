import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/Shared/services/cart.service';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: any[] = [];
  currentLanguage: string = 'en';

  constructor(private _CartService: CartService, private _TranslationService:TranslationService) {}

  ngOnInit(): void {

   // Language
  this._TranslationService.getLanguage().subscribe((lang) => {
    this.currentLanguage = lang;
  });

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
  // Done
  getTotalPrice(): number {
    return this.cartDetails.reduce(
      (total, item) => total + item.total_price,
      0
    );
  }
  // Done
  removeItem(id: string): void {
    this._CartService.removeFromCart(id).subscribe({
      next: (response) => {
        console.log('Product removed from cart:', response);
        // this.cartDetails = response.cart;
        // refresh cart
        this.ngOnInit();
      },
      error: (error) => {
        console.error('Error removing product from cart:', error);
      },
    });
  }
  // increase quantity and decrease quantity
  changeCount(count: number, id: string): void {
    this._CartService.UpdateCartItem(id, count).subscribe({
      next: (response) => {
        console.log('Product count updated:', response);
        this.cartDetails = response.cart;
        // refresh cart
        this.ngOnInit();
      },
      error: (error) => {
        console.error('Error updating product count:', error);
      },
    });
    console.log(count + 'changes');
  }

  // Clear all cart
  Clear(): void {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        console.log('Cart cleared:', response);
        this.cartDetails = [];
      },
      error: (error) => {
        console.error('Error clearing cart:', error);
      },
    });
  }
}
