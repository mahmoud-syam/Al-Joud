import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslationService } from 'src/app/Shared/services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  constructor(private _TranslationService:TranslationService , private _Router:Router , private _ToastrService:ToastrService) { }
  
  isLoggedIn = false;
  username: string | null = null;



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
    const storedUser = sessionStorage.getItem('eToken');
    if (storedUser) {
      this.isLoggedIn = true;
      this.username = storedUser;
    }
  };

  login() {
    this.username = 'JohnDoe'; 
    this.isLoggedIn = true;
    localStorage.setItem('username', this.username);
  }


  signOut(): void {
    this._Router.navigate(['/login']);
    this.isLoggedIn = false;
    localStorage.removeItem('eToken');
    sessionStorage.removeItem('eToken');
    this.username = null;
    this._ToastrService.success( 'Logged Out Successfully' );
  }
}
