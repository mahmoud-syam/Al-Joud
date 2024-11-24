import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private _TranslationService:TranslationService ) { }
  // Change Bt Language
  changeLanguage(lang: string) {
    this._TranslationService.setLanguage(lang);
  }
   
  isscrolling:boolean = true;
  
  ngOnInit(): void {
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 30){
        this.isscrolling = false;
      }else{
        this.isscrolling = true;
      }
    })
  }
}
