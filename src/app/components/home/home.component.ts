import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/app/apidata.service';
import { Category } from 'src/app/Shared/interfaces/category';
import { Product } from 'src/app/Shared/interfaces/product';
import { CartService } from 'src/app/Shared/services/cart.service';
import { TranslationService } from 'src/app/Shared/services/translation.service';

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
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _TranslationService: TranslationService
  ) {
    this._ApidataService.getProducts().subscribe((data) => {
      this.dataApi = data;
      console.log(data);
    });
  }
  // Global property
  products: Product[] = [];
  categories: Category[] = [];
  // Language
  currentLanguage: string = 'en';

  // Awl m afta7 hatsht3l
  ngOnInit(): void {
    // Language
    this._TranslationService.getLanguage().subscribe((lang) => {
      this.currentLanguage = lang;
    });

    // Get Products
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
        this._ToastrService.success('Product added to cart!');
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        this._ToastrService.error('Failed to add product to cart!');
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
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
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
