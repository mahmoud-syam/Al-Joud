import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private currentLanguage = new BehaviorSubject<string>('en'); 

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
  }

  setLanguage(lang: string) {
    this.currentLanguage.next(lang);
    this.translate.use(lang);

    const htmlTag = document.documentElement as HTMLElement;
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', lang);
  }

  
  getLanguage() {
    return this.currentLanguage.asObservable();
  }
}
