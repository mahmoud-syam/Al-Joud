import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    // إعداد اللغة الافتراضية
    this.translate.setDefaultLang('en');
    this.setLanguage(this.currentLang);
  }

  // تغيير اللغة
  setLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);

    // تحديث الاتجاه بناءً على اللغة
    const htmlTag = document.documentElement as HTMLElement;
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', lang);
  }


  title = 'aljoud';
}
