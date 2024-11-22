import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/apidata.service';
import { Category } from 'src/app/Shared/interfaces/category';
import { Product } from 'src/app/Shared/interfaces/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private _ApidataService: ApidataService) {}
  products: Product[] = [];
  categories: Category[] = [];
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
  }
}
