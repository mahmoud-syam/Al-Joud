import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private currentLanguage = new BehaviorSubject<string>('en'); // اللغة الافتراضية

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // اللغة الافتراضية
  }

  // تغيير اللغة
  setLanguage(lang: string) {
    this.currentLanguage.next(lang);
    this.translate.use(lang);

    // تحديث الاتجاه
    const htmlTag = document.documentElement as HTMLElement;
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', lang);
  }

  // الحصول على اللغة الحالية كـ Observable
  getLanguage() {
    return this.currentLanguage.asObservable();
  }
}
