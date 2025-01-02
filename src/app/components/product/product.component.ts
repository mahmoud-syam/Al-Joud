import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private _TranslationService: TranslationService) { }
// Language
currentLanguage: string = 'en';
ngOnInit(): void {
  // Language
  this._TranslationService.getLanguage().subscribe((lang) => {
    this.currentLanguage = lang;
  });

}
}
