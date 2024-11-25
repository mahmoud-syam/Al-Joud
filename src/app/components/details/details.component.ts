import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApidataService } from 'src/app/apidata.service';
import { Product } from 'src/app/Shared/interfaces/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _ApidataService: ApidataService) { }
  products: Product[] = [];

  // carousel options
  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    navText: ['Prv', 'Next'],
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  // to store the product details
  productDetails: Product = {} as Product;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let idProduct: any = params.get('id')
        // Api --- idProduct
        // fetch data from the API
        // and display it in the details component.
        // Example: this.product = this.apiService.getProductById(idProduct);
        this._ApidataService.getProductDeials(idProduct).subscribe({
          next: (response) => {
            this.productDetails = response.data
            console.log(response.data);

          }
        })
        console.log(idProduct);
      },
      error: (error) => {
        console.log(error);
      }
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
  }





}
