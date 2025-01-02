import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslationService } from 'src/app/Shared/services/translation.service';


@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent implements OnInit {
  isscrolling:boolean = true;
  isLoggedIn = false;
  username: string | null = null;
  // Language
  currentLanguage: string = 'en';


  constructor(
      private _TranslationService: TranslationService,
      private _Router: Router,
      private _ToastrService: ToastrService
    ) {
      // To Close Navbar Automatically
      this._Router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.closeNavbar();
        }
      });
    }
  ngOnInit(): void {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 30){
        this.isscrolling = false;
      }else{
        this.isscrolling = true;
      }
    })
  }


  closeNavbar() {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar?.classList.contains('show')) {
      navbar.classList.remove('show');
    }
    //// End
  }
  // Change Bt Language
  changeLanguage(lang: string) {
    this._TranslationService.setLanguage(lang);
  }
}
