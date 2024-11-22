import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   
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
