import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApidataService } from 'src/app/apidata.service';
import { Category } from 'src/app/Shared/interfaces/category';
import { Product } from 'src/app/Shared/interfaces/product';
import { CartService } from 'src/app/Shared/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // property to call api
  dataApi: any[] = [];
  // Handle Apidata
  constructor(
    private _ApidataService: ApidataService,
    private _CartService: CartService
  ) {
    this._ApidataService.getProducts().subscribe((data) => {
      this.dataApi = data;
      console.log(data);
    });
  }
  // Global property
  products: Product[] = [];
  categories: Category[] = [];

  // Awl m afta7 hatsht3l
  ngOnInit(): void {
    this._ApidataService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        // console.log(response);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });

    // Get Categories
    this._ApidataService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data.categories;
        // console.log('getCategories', response.data.categories);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  addProduct(id: any): void {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
      },
    });
  }

  // carousel options
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 500,
    navText: ['Prv', 'Next'],
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
