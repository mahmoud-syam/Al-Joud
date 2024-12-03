import { Component } from '@angular/core';
import { Product } from 'src/app/Shared/interfaces/product';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from 'src/app/apidata.service';
import { CartService } from 'src/app/Shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ApidataService: ApidataService,
    private _Router: Router,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
  ) {}
  products: Product[] = [];
  ngOnInit(): void {
    // get product
    this._ApidataService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        // console.log(response);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  };
  addProduct(id: any): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
        this._ToastrService.success('Product added to cart!');
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        this._ToastrService.error('Failed to add product to cart!');
      },
    });
  }
}