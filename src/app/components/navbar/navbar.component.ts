import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private _TranslationService:TranslationService , private _Router:Router) { }
  



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
    });


    // Check if user is logged in
    this._Router.events.subscribe((val:any)=>{
      if(val.url){
        if (localStorage.getItem('eToken')) {
          // this.isLoggedIn = false;
          console.log("User logged in");
          
        }else{
          // this.isLoggedIn = true;
          console.log("User logged out");
          
          // this._Router.navigate(['/home']);  // Redirect to home page if not logged in
        }
      }
    });
  };



  signOut(): void {
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login']);
  }
}
