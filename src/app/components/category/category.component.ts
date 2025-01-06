import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/app/apidata.service';
import { Category } from 'src/app/Shared/interfaces/category';
import { Product } from 'src/app/Shared/interfaces/product';
import { CartService } from 'src/app/Shared/services/cart.service';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private _ApidataService: ApidataService , private _Router:Router,private _TranslationService: TranslationService,private _ToastrService: ToastrService,private _CartService: CartService) {}
  products: Product[] = [];
  categories: Category[] = [];
  currentPath: string = '';
  // Language
  currentLanguage: string = 'en';



  ngOnInit(): void {
     // Language
  this._TranslationService.getLanguage().subscribe((lang) => {
    this.currentLanguage = lang;
  });
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
    // Git gategory
    this._ApidataService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data.categories;
        // console.log('getCategories', response.data.categories);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
    // Get the current URL
    this._Router.events.subscribe(() => {
      this.currentPath = this._Router.url;
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
}
