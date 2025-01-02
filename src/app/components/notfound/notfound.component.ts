import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  constructor(private _Router: Router,private _TranslationService: TranslationService) { }
  currentLanguage: string = 'en';
  navigateBack(): void {
    this._Router.navigate(['/home']);  // Navigate to home page
  }
  ngOnInit(): void {
    // Language
    this._TranslationService.getLanguage().subscribe((lang) => {
      this.currentLanguage = lang;
    });
}
}
