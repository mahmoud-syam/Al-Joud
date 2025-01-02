import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor( private _TranslationService:TranslationService){}


  currentLanguage: string = 'en';
  ngOnInit(): void {
     // Language
     this._TranslationService.getLanguage().subscribe((lang) => {
      this.currentLanguage = lang;
    });
  }
}
