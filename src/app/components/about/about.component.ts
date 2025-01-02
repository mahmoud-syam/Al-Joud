import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
